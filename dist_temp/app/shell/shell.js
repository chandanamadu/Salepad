define(["assert", "durandal.forge"], function($__0,$__2) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  var assert = $__0.assert;
  var AppRouter = $__2.AppRouter;
  var Shell = function Shell(router) {
    assert.argumentTypes(router, AppRouter);
    this.router = router.configure((function(config) {
      config.map([{
        pattern: ['', 'dashbord'],
        moduleId: 'dashbord/dashbord',
        nav: true,
        title: 'Salespad'
      }, {
        pattern: 'customers',
        hasChildRoutes: true,
        moduleId: 'customers/customers',
        nav: true,
        title: 'Customers'
      }, {
        pattern: 'sales-order',
        hasChildRoutes: true,
        moduleId: 'salesOrder/salesOrder',
        nav: true,
        title: 'SalesOrder'
      }, {
        pattern: 'opportunity',
        hasChildRoutes: true,
        moduleId: 'opportunity/opportunity',
        nav: true
      }, {
        pattern: 'todo',
        moduleId: 'todo/todo',
        nav: true
      }, {
        pattern: 'invoice',
        hasChildRoutes: true,
        moduleId: 'invoice/invoice',
        nav: true
      }, {
        pattern: 'return-management',
        hasChildRoutes: true,
        moduleId: 'return-management/return-management',
        nav: true
      }, {
        pattern: 'payment-details',
        hasChildRoutes: true,
        moduleId: 'payment-details/payment-details',
        nav: true
      }]);
    }));
  };
  ($traceurRuntime.createClass)(Shell, {activate: function() {
      return this.router.activate();
    }}, {});
  Object.defineProperty(Shell, "parameters", {get: function() {
      return [[AppRouter]];
    }});
  var $__default = Shell;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=shell.map
//# sourceURL=app/shell/shell.js