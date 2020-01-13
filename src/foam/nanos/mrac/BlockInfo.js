/**
 * @license
 * Copyright 2020 The FOAM Authors. All Rights Reserved.
 *     http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.nanos.mrac',
  name: 'BlockInfo',

  properties: [
    {
      class: 'Boolean',
      name: 'isSort'
    },
    {
      class: 'String',
      name: 'fileName'
    },
    {
      class: 'Long',
      name: 'offset'
    },
    {
      class: 'Int',
      name: 'length'
    },
    {
      class: 'Boolean',
      name: 'eof'
    },
    {
      class: 'Int',
      name: 'totalEntries'
    },
    {
      class: 'Long',
      name: 'maxIndex'
    },
    {
      class: 'Long',
      name: 'minIndex'
    },
    {
      class: 'Boolean',
      name: 'anyFailure'
    },
    {
      class: 'String',
      name: 'failLine'
    },
    {
      class: 'String',
      name: 'failReason'
    }
  ]
})