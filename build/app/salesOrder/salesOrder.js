define(["assert", "durandal.forge"], function($__0,$__2) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  var assert = $__0.assert;
  var Router = $__2.Router;
  var SalesOrders = function SalesOrders(router) {
    assert.argumentTypes(router, Router);
    this.router = router.configure((function(config) {
      config.map([{
        pattern: '',
        moduleId: 'salesOrder/order-list/order-list',
        nav: true,
        depth: 0
      }, {
        pattern: 'order-details/:id',
        moduleId: 'salesOrder/order-details/order-details',
        nav: true,
        depth: 1
      }, {
        pattern: 'new-order',
        moduleId: 'salesOrder/new-order/new-order',
        nav: true,
        depth: 1
      }, {
        pattern: 'details-more',
        moduleId: 'salesOrder/details-more/details-more',
        nav: true,
        depth: 1
      }]);
    }));
  };
  ($traceurRuntime.createClass)(SalesOrders, {activate: function() {}}, {});
  Object.defineProperty(SalesOrders, "parameters", {get: function() {
      return [[Router]];
    }});
  var $__default = SalesOrders;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=salesOrder.map
//# sourceURL=app/salesOrder/salesOrder.js