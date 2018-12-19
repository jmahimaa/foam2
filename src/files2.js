/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * List of all FOAM files available to be loaded in a JSONP
 * format, so it can used from both nodejs scripts, and web
 * pages via script tags easily.
 */

if ( typeof window !== 'undefined' ) global = window;

FOAM_FILES([
  { name: "foam/core/poly" },
  { name: "foam/core/lib" },
  { name: "foam/core/stdlib" },
  { name: "foam/core/events" },
  { name: "foam/core/Context" },
  { name: "foam/core/Boot" },
  { name: "foam/core/FObject" },
  { name: "foam/core/Model" },
  { name: "foam/core/Property" },
  { name: "foam/core/Simple" },
  { name: "foam/core/Method" },
  { name: "foam/core/Boolean" },
  { name: "foam/core/AxiomArray" },
  { name: "foam/core/EndBoot" },
  { name: "foam/core/Script" },
  { name: "foam/core/FObjectArray" },
  { name: "foam/core/Constant" },
  { name: "foam/core/Validation" },
  { name: "foam/pattern/Faceted" },
  { name: "foam/core/types" },
  { name: "foam/core/Type" },
  { name: "foam/core/Topic" },
  { name: "foam/core/InnerClass" },
  { name: "foam/core/InnerEnum" },
  { name: "foam/core/Implements" },
  { name: "foam/core/ImportsExports" },
  { name: "foam/core/Listener" },
  { name: "foam/core/IDSupport" },
  { name: "foam/core/Requires" },
  { name: "foam/core/Slot" },
  { name: "foam/core/Proxy" },
  { name: "foam/core/Promised" },
  { name: "foam/core/Interface" },
  { name: "foam/core/Axiom" },
  { name: "foam/core/Exception" },
  { name: "foam/core/ContextMethod" },
  { name: "foam/core/Window" },
  { name: "foam/core/ContextMultipleInheritence" },
  { name: "foam/core/Argument" },
  { name: "foam/core/MultiMethod" },
  { name: "foam/core/debug", flags: ['debug'] },
  { name: "foam/pattern/Singleton" },
  { name: "foam/pattern/Multiton" },
  { name: "foam/core/Enum" },
  { name: "foam/core/JSON" },
  { name: "foam/core/XML" },
  { name: "foam/lib/csv/CSV" },
  { name: "foam/lib/csv/CSVParser" },
  { name: "foam/parse/StringPStream" },
  { name: "foam/parse/ErrorReportingPStream" },
  { name: "foam/parse/TrapPStream" },
  { name: "foam/parse/InvalidPStream" },
  { name: "foam/parse/parse" },
  { name: "foam/parse/json" },
  { name: "foam/parsers/FON" },
  { name: "foam/core/templates" },
  { name: "foam/i18n/Messages" },
  { name: "foam/core/Action" },
  { name: "foam/core/Static" },
  { name: "foam/core/Reaction" },
  { name: "foam/core/Serializable" },
  { name: "foam/core/Freezable" },
  { name: "foam/core/Detachable" },
  { name: "foam/core/AbstractFObject" },
  { name: "foam/core/ContextAgent" },
  { name: "foam/java/Validation" },
  { name: "foam/i18n/TranslationFormatStringParser", flags: ['swift'] },
  { name: "foam/swift/SwiftLib", flags: ['swift'] },
  { name: "foam/swift/SwiftClass", flags: ['swift'] },
  { name: "foam/swift/Outputter", flags: ['swift'] },
  { name: "foam/swift/Protocol", flags: ['swift'] },
  { name: "foam/swift/Argument", flags: ['swift'] },
  { name: "foam/swift/ProtocolArgument", flags: ['swift'] },
  { name: "foam/swift/refines/Action", flags: ['swift'] },
  { name: "foam/swift/refines/InnerClass", flags: ['swift'] },
  { name: "foam/swift/refines/AbstractInterface", flags: ['swift'] },
  { name: "foam/swift/refines/Argument", flags: ['swift'] },
  { name: "foam/swift/refines/Property", flags: ['swift'] },
  { name: "foam/swift/refines/FObject", flags: ['swift'] },
  { name: "foam/swift/refines/AbstractEnum", flags: ['swift'] },
  { name: "foam/swift/refines/Array", flags: ['swift'] },
  { name: "foam/swift/refines/FObjectArray", flags: ['swift'] },
  { name: "foam/swift/refines/Import", flags: ['swift'] },
  { name: "foam/swift/refines/Constant", flags: ['swift'] },
  { name: "foam/swift/refines/Message", flags: ['swift'] },
  { name: "foam/swift/refines/Method", flags: ['swift'] },
  { name: "foam/swift/refines/Listener", flags: ['swift'] },
  { name: "foam/swift/refines/Proxy", flags: ['swift'] },
  { name: "foam/swift/refines/InterfaceMethod", flags: ['swift'] },
  { name: "foam/swift/ProtocolMethod", flags: ['swift'] },
  { name: "foam/swift/ProtocolField", flags: ['swift'] },
  { name: "foam/swift/refines/Model", flags: ['swift'] },
  { name: "foam/swift/refines/Requires", flags: ['swift'] },
  { name: "foam/swift/refines/IntProperty", flags: ['swift'] },
  { name: "foam/swift/refines/String", flags: ['swift'] },
  { name: "foam/swift/refines/Multiton", flags: ['swift'] },
  { name: "foam/swift/refines/Singleton", flags: ['swift'] },
  { name: "foam/swift/Field", flags: ['swift']},
  { name: "foam/swift/Method", flags: ['swift']},


  { name: "foam/java/Argument", flags: ['java'] },
  { name: "foam/java/Class", flags: ['java'] },
  { name: "foam/java/ClassInfo", flags: ['java'] },
  { name: "foam/java/Code", flags: ['java'] },
  { name: "foam/java/CodeProperty", flags: ['java'] },
  { name: "foam/java/Field", flags: ['java'] },
  { name: "foam/java/Interface", flags: ['java'] },
  { name: "foam/java/JavaImplements", flags: ['java'] },
  { name: "foam/java/InterfaceMethod", flags: ['java'] },
  { name: "foam/java/Method", flags: ['java'] },
  { name: "foam/java/Constant", flags: ['java'] },
  { name: "foam/java/Enum", flags: ['java'] },
  { name: "foam/java/Outputter", flags: ['java'] },
  { name: "foam/java/PropertyInfo", flags: ['java'] },
  { name: "foam/java/Skeleton", flags: ['java'] },
  { name: "foam/java/JavaImport", flags: ['java'] },
  { name: "foam/java/Builder", flags: ['java'] },
  { name: "foam/java/refinements", flags: ['java'] },
  { name: "foam/json2/Json2PropertyRefine" },
  { name: "foam/json2/OutputterOutput" },
  { name: "foam/json2/ProxyOutputterOutput" },
  { name: "foam/json2/SimpleOutputterOutput" },
  { name: "foam/json2/PrettyOutputterOutput" },
  { name: "foam/json2/Outputter" },
  { name: "foam/json2/Serializer" },
  { name: "foam/json2/Deserializer" },

  { name: "foam/util/Timer" },
  { name: "foam/util/EmailTest" },
  { name: "foam/util/PasswordTest" },
  { name: "foam/util/SecurityUtilTest" },
  { name: "foam/log/LogLevel" },
  { name: "foam/log/Logger" },
  { name: "foam/log/ConsoleLogger" },
  { name: "foam/memento/MementoMgr" },
  { name: "foam/web/DetachedURLState", flags: ['web'] },
  { name: "foam/web/URLState", flags: ['web'] },
  { name: "lib/input", flags: ['web'] },
  { name: "foam/box/Remote" },
  { name: 'foam/u2/ModalHeader', flags: ['web'] },
  { name: 'foam/u2/ExportModal', flags: ['web'] },
  { name: "foam/u2/AttrSlot" },
  { name: "foam/u2/ViewSpec" },
  { name: "foam/u2/Visibility"},
  { name: "foam/u2/RowFormatter" },
  { name: "foam/u2/WeakMap", flags: ['web'] },
  { name: "foam/u2/Element", flags: ['js'] },
  { name: "foam/u2/MNRowFormatter", flags: ['web'] },
  { name: "foam/u2/ProgressView", flags: ['web'] },
  { name: "foam/u2/ListCreateController", flags: ['web'] },
  { name: 'foam/u2/view/SearchViewWrapper', flags: ['web'] },
  { name: 'foam/u2/view/StringArrayRowView', flags: ['web'] },
  { name: 'foam/u2/borders/NullBorder', flags: ['web'] },
  { name: "foam/version/VersionTrait" },
  { name: "foam/version/VersionedClass" },
  { name: "foam/version/VersionedClassFactory" },
  { name: "foam/dao/Sink" },
  { name: "foam/dao/DAO" },
  { name: "foam/dao/daoUtils" },
  { name: "foam/dao/ArraySink" },
  { name: "foam/dao/DAODecorator" },
  { name: "foam/dao/AbstractDAO" },
  { name: "foam/dao/FilteredDAO" },
  { name: "foam/dao/DAOProperty" },
  { name: "foam/dao/SQLStatement" },
  { name: "foam/mlang/order/Comparator" },
//  { name: "foam/mlang/order/ComparatorJava", flags: ['java'] },
  { name: "foam/mlang/mlang" },
  { name: "foam/swift/refines/MLang", flags: ['swift'] },
  { name: "foam/swift/refines/Predicate", flags: ['swift'] },
  { name: "foam/swift/refines/AbstractDAO", flags: ['swift'] },
  { name: "foam/mlang/LabeledValue" },
  { name: "foam/dao/index/Plan" },
  { name: "foam/dao/index/Index" },
  { name: "foam/dao/index/ProxyIndex" },
  { name: "foam/dao/index/AltIndex" },
  { name: "foam/dao/index/ValueIndex" },
  { name: "foam/dao/index/AATree" },
  { name: "foam/dao/index/TreeIndex" },
  { name: "foam/dao/index/AutoIndex" },
  { name: "foam/dao/index/PersistedIndexTest" },
  { name: "foam/dao/MDAO" },
  { name: "foam/dao/ArrayDAO" },
  { name: "foam/dao/TimestampDAO" },
  { name: "foam/dao/AdapterDAO" },
  { name: "foam/dao/GUIDDAO" },
  { name: "foam/dao/ReadOnlyDAO" },
  { name: "foam/dao/StoreAndForwardDAO" },
  { name: "foam/dao/Journal" },
  { name: "foam/dao/CompositeJournal", flags: ['java'] },
  { name: "foam/dao/FileJournal", flags: ['java'] },
  { name: "foam/dao/JDAO", flags: ['web'] },
  { name: "foam/dao/java/JDAO", flags: ['java'] },
  { name: "foam/dao/RoutingJournal", flags: ['java'] },
  { name: "foam/dao/RoutingJournalTest", flags: ['java'] },
  { name: "foam/dao/RoutingJDAO", flags: ['java'] },
  { name: "foam/dao/Relationship" },
  { name: "foam/dao/RelationshipDAO" },
  { name: "foam/dao/ManyToManyRelationshipDAO" },
  { name: "foam/dao/grid/ManyToManyGridRecord" },
  { name: "foam/dao/grid/ManyToManyGridDAO" },
  { name: "foam/dao/LazyCacheDAO" },
  { name: "foam/dao/CachingDAO" },
  { name: "foam/dao/DeDupDAO" },
  { name: "foam/dao/LRUDAOManager" },
  { name: "foam/dao/SequenceNumberDAO" },
  { name: "foam/dao/SequenceNumberDAOTest" },
  { name: "foam/dao/ContextualizingDAO" },
  { name: "foam/dao/VersionNoDAO" },
  { name: "foam/dao/sync/SyncRecord" },
  { name: "foam/dao/SyncDAO" },
  { name: "foam/dao/EasyDAO" },
  { name: "foam/dao/NoSelectAllDAO" },
  { name: "foam/dao/NullDAO" },
  { name: "foam/dao/TimingDAO" },
  { name: "foam/dao/LoggingDAO" },
  { name: "foam/dao/IDBInternalException", flags: ['web'] },
  { name: "foam/dao/IDBDAO", flags: ['web'] },
  { name: "foam/dao/BatchMutationIDBDAO", flags: ['web'] },
  { name: "foam/dao/RestDAO" },
  { name: "foam/dao/EnabledAwareDAO" },
  { name: "foam/dao/ValidationDAODecorator" },
  { name: "foam/dao/SQL", flags: ['sql'] },
  { name: "foam/dao/NoDisjunctionDAO" },
  { name: "foam/dao/NoNeqDAO" },
  { name: "foam/dao/FixedSizeDAO" },
  { name: "foam/parse/QueryParser" },
  { name: "foam/parse/QueryParserUserTest" },
  { name: "foam/physics/Physical" },
  { name: "foam/physics/Collider" },
  { name: "foam/physics/PhysicsEngine" },
  { name: "foam/blob/Blob" },
  { name: "lib/node/json_dao", flags: ['node'] },
  { name: "lib/utf8" },
  { name: "foam/net/NotConnectedException" },
  { name: "foam/net/ConnectionFailedException" },
  { name: "foam/net/web/WebSocket" },
  { name: "foam/net/web/WebSocketService" },
  // foam.net.web: No 'web' flag, because some are base classes for
  // foam.net.node.
  { name: "foam/net/web/HTTPResponse" },
  { name: "foam/net/web/HTTPRequest" },
  { name: "foam/net/web/BaseHTTPRequest" },
  { name: "foam/net/web/EventSource" },
  { name: "foam/net/web/XMLHTTPRequest" },
  { name: "foam/net/web/XMLHTTPResponse" },
  { name: "foam/net/web/SafariEventSource" },
  { name: "foam/messageport/MessagePortService", flags: ['web'] },
  { name: "foam/net/node/Frame", flags: ['node'] },
  { name: "foam/net/node/Socket", flags: ['node'] },
  { name: "foam/net/node/SocketService", flags: ['node'] },
  { name: "foam/net/node/WebSocket", flags: ['node'] },
  { name: "foam/net/node/HTTPRequest", flags: ['node'] },
  { name: "foam/net/node/BaseHTTPRequest", flags: ['node'] },
  { name: "foam/net/node/HTTPResponse", flags: ['node'] },
  { name: "foam/net/node/WebSocketService", flags: ['node'] },
  { name: "lib/firebase" },
  { name: "lib/fcm" },
  { name: "foam/core/StubMethod" },
  { name: "foam/core/StubAction" },
  { name: "foam/core/Stub" },
  { name: "foam/box/Box" },
  { name: "foam/box/AnonymousBox" },
  { name: "foam/box/RemoteException" },
  { name: "foam/box/Skeleton" },
  { name: "foam/box/PromisedBox" },
  { name: "foam/box/ProxyBox" },
  { name: "foam/box/Message" },
  { name: "foam/box/SubBoxMessage" },
  { name: "foam/box/HelloMessage" },
  { name: "foam/box/TimeoutBox" },
  { name: "foam/box/RetryBox" },
  { name: "foam/box/SubBox" },
  { name: "foam/box/NameAlreadyRegisteredException" },
  { name: "foam/box/NoSuchNameException" },
  { name: "foam/box/BoxRegistry" },
  { name: "foam/box/LocalBoxRegistry" },
  { name: "foam/box/BoxRegistryBox" },
  { name: "foam/box/ClientBoxRegistry" },
  { name: "foam/box/PromisedBoxRegistry" },
  { name: "foam/box/RegistrySelector" },
  { name: "foam/box/SelectorRegistry" },
  { name: "foam/box/BroadcastRegistry" },
  { name: "foam/box/LookupBox" },
  { name: "foam/box/NamedBox" },
  { name: "foam/box/ReplyBox" },
  { name: "foam/box/FunctionBox" },
  { name: "foam/box/RPCReturnMessage" },
  { name: "foam/box/RPCErrorMessage" },
  { name: "foam/box/SubscribeMessage" },
  { name: "foam/box/RPCReturnBox" },
  { name: "foam/box/RPCMessage" },
  { name: "foam/dao/BaseClientDAO" },
  { name: "foam/dao/MergeBox" },
  { name: "foam/dao/ClientDAO" },
  { name: "foam/dao/PollingClientDAO" },
  { name: "foam/dao/StreamingClientDAO" },
  { name: "foam/dao/RequestResponseClientDAO" },
  { name: "foam/box/InvalidMessageException" },
  { name: "foam/box/EventMessage" },
  { name: "foam/box/EventDispatchBox" },
  { name: "foam/box/SkeletonBox" },
  { name: "foam/box/NullBox" },
  { name: "foam/box/SocketBox" },
  { name: "foam/box/SocketBox2" },
  { name: "foam/box/SocketConnectBox" },
  { name: "foam/box/RawSocketBox" },
  { name: "foam/box/SendFailedError" },
  { name: "foam/box/RegisterSelfMessage" },
  { name: "foam/box/RawWebSocketBox" },
  { name: "foam/box/ReturnBox" },
  { name: "foam/box/RawMessagePortBox" },
  { name: "foam/box/WebSocketBox" },
  { name: "foam/box/ClassWhitelistContext" },
  { name: "foam/box/LoggedLookupContext" },
  { name: "foam/box/Context" },
  { name: "foam/box/BoxService" },
  { name: "foam/box/HTTPReplyBox" },
  { name: "foam/box/AuthenticatedBox" },
  { name: "foam/box/CheckAuthenticationBox" },
  { name: "foam/box/HTTPBox" },
  { name: "foam/box/MessagePortBox" },
  { name: "foam/box/ForwardedMessage" },
  { name: "foam/box/ForwardBox" },
  { name: "foam/box/ForwardingBox" },
  { name: "foam/box/SessionClientBox" },

  { name: "foam/swift/refines/Stub", flags: ['swift'] },
  { name: "foam/swift/refines/Promised", flags: ['swift'] },
  { name: "foam/swift/refines/Topic", flags: ['swift'] },
  { name: "foam/swift/refines/Remote", flags: ['swift'] },

  { name: "foam/box/LogBox" },
  { name: "foam/box/MultiDelegateBox" },
  { name: "foam/box/BroadcastBox" },
  { name: "foam/box/RoundRobinBox" },
  { name: "foam/core/async" },
  { name: "foam/dao/ClientSink" },
  { name: "foam/u2/ViewFactory", flags: ['web'] },
  { name: "foam/u2/DAOList", flags: ['web'] },
  { name: "foam/u2/TableView", flags: ['web'] },
  { name: "foam/u2/TableSelection", flags: ['web'] },
  { name: "foam/u2/Scroller", flags: ['web'] },
  { name: "foam/u2/ActionView", flags: ['web'] },
  { name: "foam/u2/UnstyledActionView", flags: ['web'] },
  { name: "foam/u2/DetailPropertyView", flags: ['web'] },
  { name: "foam/u2/DetailView", flags: ['web'] },
  { name: "foam/u2/ContextSensitiveDetailView", flags: ['web'] },
  { name: "foam/u2/tag/Image", flags: ['web'] },
  { name: "foam/u2/tag/Input", flags: ['web'] },
  { name: "foam/u2/tag/TextArea", flags: ['web'] },
  { name: "foam/u2/TextField", flags: ['web'] },
  { name: "foam/u2/IntView", flags: ['web'] },
  { name: "foam/u2/FloatView", flags: ['web'] },
  { name: "foam/u2/CurrencyView", flags: ['web'] },
  { name: "foam/u2/CheckBox", flags: ['web'] },
  { name: "foam/u2/md/CheckBox", flags: ['web'] },
  { name: "foam/u2/CitationView", flags: ['web'] },
  { name: "foam/u2/PopupView", flags: ['web'] },
  { name: "foam/u2/DateView", flags: ['web'] },
  { name: "foam/u2/DateTimeView", flags: ['web'] },
  { name: "foam/u2/RangeView", flags: ['web'] },
  { name: "foam/u2/ReadWriteView", flags: ['web'] },
  { name: "foam/u2/HTMLElement", flags: ['web'] },
  { name: "foam/u2/tag/Select", flags: ['web'] },
  { name: "foam/u2/UnstyledTabs", flags: ['web'] },
  { name: "foam/u2/Tabs", flags: ['web'] },
  { name: "foam/u2/TimeView", flags: ['web'] },
  { name: "foam/u2/history/HistoryItemView", flags: ['web'] },
  { name: "foam/u2/history/HistoryView", flags: ['web'] },
  { name: "foam/u2/view/FObjectView", flags: ['web'] },
  { name: "foam/u2/view/FObjectArrayView", flags: ['web'] },
  { name: "foam/u2/view/ChoiceView", flags: ['web'] },
  { name: "foam/u2/view/RichChoiceView", flags: ['web'] },
  { name: "foam/u2/view/RadioView", flags: ['web'] },
  { name: "foam/u2/view/TextField", flags: ['web'] },
  { name: "foam/u2/view/TreeView", flags: ['web'] },
  { name: "foam/u2/view/AltView", flags: ['web'] },
  { name: "foam/u2/view/SimpleAltView", flags: ['web'] },
  { name: "foam/u2/view/DualView", flags: ['web'] },
  { name: "foam/u2/view/ColorPicker", flags: ['web'] },
  { name: "foam/u2/view/PasswordView", flags: ['web'] },
  { name: "foam/u2/view/ChipView", flags: ['web'] },
  { name: "foam/u2/view/Formatter", flags: ['js'] },
  { name: "foam/u2/view/FnFormatter", flags: ['js'] },
  { name: "foam/u2/view/TableCellFormatter", flags: ['js'] },
  { name: "foam/u2/view/UnstyledTableView", flags: ['web'] },
  { name: "foam/u2/view/TableView", flags: ['web'] },
  { name: "foam/u2/view/EditColumnsView", flags: ['web'] },
  { name: "foam/u2/md/OverlayDropdown", flags: ['web'] },
  { name: "foam/u2/view/ScrollTableView", flags: ['web'] },
  { name: "foam/u2/view/ScrollDAOView", flags: ['web'] },
  { name: "foam/u2/view/BlobView", flags: ['web'] },
  { name: "foam/u2/view/FileView", flags: ['web'] },
  { name: "foam/u2/view/ImageBlobView", flags: ['web'] },
  { name: "foam/u2/view/StringArrayView", flags: ['web'] },
  { name: "foam/u2/view/ImageView", flags: ['web'] },
  { name: "foam/u2/view/ExprView", flags: ['web'] },
  { name: "foam/u2/EnumView", flags: ['web'] },
  { name: "foam/u2/ClassView", flags: ['web'] },
  { name: "foam/u2/view/ReferenceView", flags: ['web'] },
  { name: "foam/u2/tag/Card", flags: ['web'] },
  { name: "foam/u2/dialog/Popup", flags: ['web'] },
  { name: "foam/u2/dialog/NotificationMessage", flags: ['web'] },
  { name: "foam/u2/Autocompleter", flags: ['web'] },
  { name: "foam/u2/search/FilterController", flags: ['web'] },
  { name: "foam/u2/search/GroupCompleter", flags: ['web'] },
  { name: "foam/u2/search/GroupAutocompleteSearchView", flags: ['web'] },
  { name: "foam/u2/search/GroupBySearchView", flags: ['web'] },
  { name: "foam/u2/search/SearchManager", flags: ['web'] },
  { name: "foam/u2/search/TextSearchView", flags: ['web'] },
  { name: 'foam/u2/search/IntegerSearchView', flags: ['web'] },
  { name: 'foam/u2/search/FloatSearchView', flags: ['web'] },
  { name: 'foam/u2/search/CurrencySearchView', flags: ['web'] },
  { name: 'foam/u2/search/DateSearchView', flags: ['web'] },
  { name: "foam/u2/stack/Stack", flags: ['web'] },
  { name: "foam/u2/stack/StackView", flags: ['web'] },
  { name: "foam/graphics/CView", flags: ['web'] },
  { name: "foam/graphics/TreeGraph", flags: ['web'] },
  { name: "foam/graphics/ScrollCView", flags: ['web'] },
  { name: "foam/physics/PhysicalCircle", flags: ['web'] },
  { name: "foam/u2/view/SimpleSearch", flags: ['web'] },
  { name: "foam/comics/SearchMode", flags: ['web'] },
  { name: "foam/comics/DAOController" },
  { name: "foam/comics/DAOControllerView", flags: ['web'] },
  { name: "foam/comics/InlineDAOControllerView", flags: ['web'] },
  { name: "foam/comics/DAOCreateController" },
  { name: "foam/comics/DAOCreateControllerView", flags: ['web'] },
  { name: "foam/comics/DAOUpdateController" },
  { name: "foam/comics/DAOUpdateControllerView", flags: ['web'] },
  { name: "foam/comics/BrowserView", flags: ['web'] },
  { name: "foam/comics/InlineBrowserView", flags: ['web'] },
  { name: "foam/comics/RelationshipView", flags: ['web'] },
  { name: "foam/u2/view/ReciprocalSearch", flags: ['web'] },
  { name: "lib/node/box", flags: ['node'] },
  { name: "lib/net", flags: ['web'] },
  { name: "lib/netNode", flags: ['node'] },
  { name: "foam/net/RetryHTTPRequest" },
  { name: "foam/net/auth/TokenBearerCredential" },
  { name: "foam/net/auth/AuthAwareHTTPRequest" },
  { name: "foam/net/auth/TokenBearerHTTPRequest" },
  { name: "foam/net/auth/AuthAgent" },
  { name: "foam/doc/ClassLink", flags: ['debug', 'web'] },
  { name: "foam/doc/DocBrowser", flags: ['debug', 'web'] },
  { name: "com/google/net/node/Google2LOAuthAgent", flags: ['node', 'gcloud'] },
  { name: "com/google/cloud/datastore/types", flags: ['gcloud'] },
  { name: "com/google/cloud/datastore/mlang", flags: ['gcloud'] },
  { name: "com/google/cloud/datastore/DatastoreDAO", flags: ['gcloud'] },
  { name: "com/google/cloud/datastore/BatchMutationDatastoreDAO", flags: ['gcloud'] },
  { name: "com/google/firebase/DefaultFirestoreDocumentID", flags: ['firebase'] },
  { name: "com/google/firebase/DefaultFirestoreData", flags: ['firebase'] },
  { name: "com/google/firebase/DefaultFObject", flags: ['firebase'] },
  { name: "com/google/firebase/AwaitAuthenticationDAO", flags: ['firebase'] },
  { name: "com/google/firebase/FirestoreDAO", flags: ['firebase'] },
  { name: "foam/net/node/EntityEncoding", flags: ['node'] },
  { name: "foam/net/node/Route", flags: ['node'] },
  { name: "foam/net/node/PathnamePrefixRoute", flags: ['node'] },
  { name: "foam/net/node/PathnameRoute", flags: ['node'] },
  { name: "foam/net/node/Handler", flags: ['node'] },
  { name: "foam/net/node/RouteBinding", flags: ['node'] },
  { name: "foam/net/node/Router", flags: ['node'] },
  { name: "foam/net/node/BaseHandler", flags: ['node'] },
  { name: "foam/net/node/ErrorHandler", flags: ['node'] },
  { name: "foam/net/node/PathnamePrefixHandler", flags: ['node'] },
  { name: "foam/net/node/PathnameHandler", flags: ['node'] },
  { name: "foam/net/node/SimpleRouter", flags: ['node'] },
  { name: "foam/net/node/PathnameRouter", flags: ['node'] },
  { name: "foam/net/node/RequestIdentifier", flags: ['node'] },
  { name: "foam/net/node/CacheHandler", flags: ['node'] },
  { name: "foam/net/node/FileHandler", flags: ['node'] },
  { name: "foam/net/node/DirTreeHandler", flags: ['node'] },
  { name: "foam/net/node/RestDAOHandler", flags: ['node'] },
  { name: "foam/net/node/ServerRequest", flags: ['node'] },
  { name: "foam/net/node/ServerResponse", flags: ['node'] },
  { name: "foam/net/node/SimpleServerResponse", flags: ['node'] },
  { name: "foam/net/node/CachedResponse", flags: ['node'] },
  { name: "foam/net/node/CachingResponse", flags: ['node'] },
  { name: "foam/net/node/Server", flags: ['node'] },
  { name: "foam/parsers/html/lib" },
  { name: "foam/parsers/html/Attribute" },
  { name: "foam/parsers/html/TagType" },
  { name: "foam/parsers/html/Tag" },
  { name: "foam/parsers/html/HTMLLexer" },
  { name: "foam/core/ContextAware", flags: ['java'] },
  { name: "foam/dao/history/PropertyUpdate" },
  { name: "foam/dao/history/HistoryRecord" },
  { name: "foam/mop/MOP" },
  { name: "foam/dao/pg/ConnectionPool" },
  { name: "foam/lib/Outputter" },
  { name: "foam/lib/json/OutputterMode" },
  { name: "foam/lib/json/ClassReferenceParserTest" },
  { name: "foam/lib/parse/Parser" },
  { name: "foam/lib/parse/PStream" },
  { name: "foam/crypto/hash/Hasher" },
  { name: "foam/crypto/hash/Hashable" },
  { name: "foam/crypto/hash/HashableTest" },
  { name: "foam/crypto/sign/Signer" },
  { name: "foam/crypto/sign/Signable" },
  { name: "foam/crypto/sign/SignableTest" },
  { name: "foam/test/TestObj" },
  { name: "foam/core/FObjectTest" },
  { name: "com/google/foam/demos/bubbles/Bubbles" },

  { name: "org/chartjs/Lib" },
  { name: "org/chartjs/AbstractChartCView" },
  { name: "org/chartjs/Pie" },
  { name: "org/chartjs/Bar" },
  { name: "org/chartjs/Line" },
  { name: "org/chartjs/Line2" },

  { name: "foam/dashboard/model/Visualization" },
  { name: "foam/dashboard/model/GroupBy" },
  { name: "foam/dashboard/model/Count" },
  { name: "foam/dashboard/model/Table" },

  { name: "foam/dashboard/view/Count" },
  { name: "foam/dashboard/view/Table" },
  { name: "foam/dashboard/view/Pie" },
  { name: "foam/dashboard/view/Bar" },
  { name: "foam/dashboard/view/Line" },
  { name: "foam/dashboard/view/DAOTable" },
  { name: "foam/dashboard/view/Card" },
  { name: "foam/apploader/NoClassLoader" },
  { name: "foam/u2/FoamTagLoader", flags: ['web'] },
  { name: "foam/build/EmbeddedModelDAO" },
  { name: "foam/build/ClassLoader" },
  { name: "foam/build/ClassLoaderImpl" },
  { name: "foam/build/PromisedClassLoader" },
  { name: "foam/build/ClassLoaderContext" }
]);