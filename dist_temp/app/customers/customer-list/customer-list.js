define(["assert", "../customers", "q", "../customers-list"], function($__0,$__2,$__4,$__6) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  if (!$__4 || !$__4.__esModule)
    $__4 = {default: $__4};
  if (!$__6 || !$__6.__esModule)
    $__6 = {default: $__6};
  var assert = $__0.assert;
  var route = $__2.default;
  var Q = $__4.default;
  var Customers = $__6.default;
  var List = function List(Route, cus) {
    assert.argumentTypes(Route, route, cus, Customers);
    this.route = Route;
    this.customers = null;
    this.customersList = cus;
  };
  ($traceurRuntime.createClass)(List, {
    goHome: function() {
      this.route.router.navigate('#');
      window.location.reload(true);
    },
    getCustomers: function() {},
    activate: function() {
      this.customers = this.customersList.customers;
    }
  }, {});
  Object.defineProperty(List, "parameters", {get: function() {
      return [[route], [Customers]];
    }});
  var $__default = List;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=customer-list.map
//# sourceURL=app/customers/customer-list/customer-list.js