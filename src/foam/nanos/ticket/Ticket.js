/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.nanos.ticket',
  name: 'Ticket',

  documentation: 'Ticket Model',

  implements: [
    'foam.nanos.auth.CreatedAware',
    'foam.nanos.auth.CreatedByAware',
    'foam.nanos.auth.LastModifiedAware',
    'foam.nanos.auth.LastModifiedByAware'
  ],

  requires: [
    'foam.nanos.ticket.TicketStatus'
  ],

  javaImports: [
    'java.util.Date',
  ],

  imports: [
    'userDAO'
  ],

  tableColumns: [
    'id',
    'type',
    // REVIEW: view fails to display when owner in tableColumns
  //  'owner',
    'lastModified',
    'status',
    'summary'
  ],

  sections: [
     {
      name: 'ticketType',
      isAvailable: function(id) { return !! id; },
      order: 1
    },
    {
      name: 'basicInfo',
      title: '',
      order: 2
    },
    {
      name: 'comments',
      title: '',
      order: 3
    },
    {
      name: 'details',
      title: '',
      order: 4
    },
    {
      name: '_defaultSection',
      permissionRequired: true,
      hidden: true
    },
  ],

  properties: [
    {
      class: 'String',
      name: 'type',
      documentation: 'The type of the ticket.',
      transient: true,
      getter: function() {
        return this.cls_.name;
      },
      javaGetter: `
        return getClass().getSimpleName();
      `,
      tableWidth: 135,
      section: 'ticketType',
      visibility: 'RO'
    },
    {
      class: 'Long',
      name: 'id',
      visibility: 'RO',
      section: 'basicInfo',
      order: 1
    },
    {
      name: 'type',
      class: 'String',
      visibility: 'RO',
      storageTransient: true,
      section: 'basicInfo',
      getter: function() {
         return this.cls_.name;
      },
      javaGetter: `
    return getClass().getSimpleName();
      `,
      tableWidth: 160,
      order: 2
    },
    {
      class: 'foam.core.Enum',
      of: 'foam.nanos.ticket.TicketStatus',
      name: 'status',
      value: 'OPEN',
      javaFactory: 'return TicketStatus.OPEN;',
      includeInDigest: true,
      section: 'basicInfo',
      order: 3,
      tableWidth: 130,
      view: function(_, x) {
        return {
          class: 'foam.u2.view.ModeAltView',
          readView: {
            class: 'foam.u2.EnumView',
            of: 'foam.nanos.ticket.TicketStatus'
          },
          writeView: {
            class: 'foam.u2.view.ChoiceView',
            choices: x.data.statusChoices
          }
        };
      },
    },
    {
      name: 'statusChoices',
      hidden: true,
      factory: function() {
        var s = [];
        if ( this.status == this.TicketStatus.CLOSED ) {
          s.push([foam.nanos.ticket.TicketStatus.CLOSED.name, foam.nanos.ticket.TicketStatus.CLOSED.label]);
        } else {
          s.push([foam.nanos.ticket.TicketStatus.OPEN.name, foam.nanos.ticket.TicketStatus.OPEN.label]);
        }
        return s;
      },
      documentation: 'Returns available statuses for each ticket depending on current status'
    },
    // REVIEW: can't get this to work.
    // {
    //   name: 'watchers',
    //   class: 'List',
    //   javaType: 'java.util.ArrayList<java.lang.Long>',
    //   view: {
    //     class: 'foam.u2.view.ReferenceArrayView',
    //     daoKey: 'userDAO'
    //   },
    //   section: 'details',
    // },
    {
      class: 'String',
      name: 'title',
      required: true,
      section: 'basicInfo',
      validationPredicate: [
        {
          args: ['title', 'type'],
          predicateFactory: function(e) {
            return e.GT(
              foam.mlang.StringLength.create({
                arg1: foam.nanos.ticket.Ticket.TITLE
              }), 0);
          },
          errorString: 'Please provide a summary of the Ticket.'
        }
      ],
      order: 4
    },
    {
      class: 'String',
      name: 'comment',
      value: '',
    // required: true,
      storageTransient: true,
      section: 'comments',
      validationPredicate: [
        {
          args: ['id', 'title', 'comment'],
          predicateFactory: function(e) {
            return e.OR(
              e.AND(
                e.EQ(foam.nanos.ticket.Ticket.ID, 0),
                e.GT(
                  foam.mlang.StringLength.create({
                    arg1: foam.nanos.ticket.Ticket.TITLE
                  }), 0)
              ),
              e.GT(
              foam.mlang.StringLength.create({
                arg1: foam.nanos.ticket.Ticket.COMMENT
              }), 0)
            );
          },
          errorString: 'Please provide a comment.'
        }
      ],
      order: 1
    },
    {
      class: 'DateTime',
      name: 'created',
      visibility: 'RO',
      includeInDigest: true,
      section: 'details',
    },
    {
      class: 'Reference',
      of: 'foam.nanos.auth.User',
      name: 'createdBy',
      visibility: 'RO',
      includeInDigest: true,
      tableCellFormatter: function(value, obj) {
        obj.userDAO.find(value).then(function(user) {
          if ( user ) {
            this.add(user.legalName);
          }
        }.bind(this));
      },
      section: 'details',
    },
    {
      class: 'DateTime',
      name: 'lastModified',
      visibility: 'RO',
      section: 'details',
    },
    {
      class: 'Reference',
      of: 'foam.nanos.auth.User',
      name: 'lastModifiedBy',
      visibility: 'RO',
      tableCellFormatter: function(value, obj) {
        obj.userDAO.find(value).then(function(user) {
          if ( user ) {
            this.add(user.legalName);
          }
        }.bind(this));
      },
      section: 'details',
    },
    {
      name: 'summary',
      class: 'String',
      transient: true,
      hidden: true,
      tableCellFormatter: function(value, obj) {
        this.add(obj.title);
      }
    }
  ],

  actions: [
    {
      name: 'close',
      tableWidth: 70,
      confirmationRequired: true,
      code: function() {
        var self = this;
        this.output = '';
        this.status = this.TicketStatus.CLOSED;
        this.ticketDAO.put(this).then(function(ticket) {
          self.copyFrom(ticket);
        });
      }
    },
  ]
});