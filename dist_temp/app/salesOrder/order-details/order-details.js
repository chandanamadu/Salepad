define(["assert", "../salesOrderService"], function($__0,$__2) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  var assert = $__0.assert;
  var orders = $__2.default;
  var Detail = function Detail(Orders) {
    assert.argumentTypes(Orders, orders);
    this.orderList = Orders;
    this.salesOrders = null;
    this.salesOrder = null;
  };
  ($traceurRuntime.createClass)(Detail, {activate: function(id) {
      this.salesOrders = this.orderList.salesOrderList;
      for (var $__5 = this.salesOrders[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__6; !($__6 = $__5.next()).done; ) {
        var order = $__6.value;
        {
          if (order.id == id) {
            this.salesOrder = order;
          }
        }
      }
    }}, {});
  Object.defineProperty(Detail, "parameters", {get: function() {
      return [[orders]];
    }});
  var $__default = Detail;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=order-details.map
//# sourceURL=app/salesOrder/order-details/order-details.js