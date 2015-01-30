define(["assert", "../salesOrderService", "../salesOrder"], function($__0,$__2,$__4) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  if (!$__4 || !$__4.__esModule)
    $__4 = {default: $__4};
  var assert = $__0.assert;
  var orders = $__2.default;
  var route = $__4.default;
  var OrderList = function OrderList(Orders, Route) {
    assert.argumentTypes(Orders, orders, Route, route);
    this.orderList = Orders;
    this.salesOrders = null;
    this.route = Route;
  };
  ($traceurRuntime.createClass)(OrderList, {
    goHome: function() {
      this.route.router.navigate('#');
      window.location.reload(true);
    },
    activate: function() {
      this.salesOrders = this.orderList.salesOrderList;
    }
  }, {});
  Object.defineProperty(OrderList, "parameters", {get: function() {
      return [[orders], [route]];
    }});
  var $__default = OrderList;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=order-list.map
//# sourceURL=app/salesOrder/order-list/order-list.js