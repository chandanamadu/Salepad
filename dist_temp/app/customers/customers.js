define(["assert", "durandal.forge"], function($__0,$__2) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  var assert = $__0.assert;
  var Router = $__2.Router;
  var Customers = function Customers(router) {
    assert.argumentTypes(router, Router);
    this.router = router.configure((function(config) {
      config.map([{
        pattern: '',
        moduleId: 'customers/customer-list/customer-list',
        nav: false,
        depth: 0
      }, {
        pattern: 'customer-details/:id',
        moduleId: 'customers/customer-detail/customer-detail',
        nav: false,
        depth: 1
      }, {
        pattern: 'new-Customer',
        moduleId: 'customers/newCustomer/newCustomer',
        nav: false,
        depth: 1,
        title: 'New Customer'
      }]);
    }));
  };
  ($traceurRuntime.createClass)(Customers, {
    getTitle: function() {
      if (this.router.activeInstruction()) {
        return this.router.activeInstruction().config.title;
      }
    },
    activate: function() {}
  }, {});
  Object.defineProperty(Customers, "parameters", {get: function() {
      return [[Router]];
    }});
  var $__default = Customers;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=customers.map
//# sourceURL=app/customers/customers.js