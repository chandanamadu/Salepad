define(["assert", "durandal.forge"], function($__0,$__2) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  var assert = $__0.assert;
  var Router = $__2.Router;
  var Invoice = function Invoice(router) {
    assert.argumentTypes(router, Router);
    this.router = router.configure((function(config) {
      config.map([{
        pattern: '',
        moduleId: 'invoice/invoice-list/invoice-list',
        nav: true,
        depth: 0
      }, {
        pattern: 'invoice-detail/:id',
        moduleId: 'invoice/invoice-details/invoice-details',
        nav: true,
        depth: 1
      }, {
        pattern: 'new-invoice',
        moduleId: 'invoice/new-invoice/new-invoice',
        nav: true,
        depth: 1
      }]);
    }));
  };
  ($traceurRuntime.createClass)(Invoice, {activate: function() {}}, {});
  Object.defineProperty(Invoice, "parameters", {get: function() {
      return [[Router]];
    }});
  var $__default = Invoice;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=invoice.map
//# sourceURL=app/invoice/invoice.js