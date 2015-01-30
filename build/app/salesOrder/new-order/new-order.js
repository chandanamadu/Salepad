define(["assert", "../../customers/customers-list", "../../items/itemService"], function($__0,$__2,$__4) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  if (!$__4 || !$__4.__esModule)
    $__4 = {default: $__4};
  var assert = $__0.assert;
  var customers = $__2.default;
  var itemList = $__4.default;
  var NewOrder = function NewOrder(Customers, Items) {
    assert.argumentTypes(Customers, customers, Items, itemList);
    this.customer = Customers;
    this.customerList = null;
    this.currentTotal = '0.00';
    this.itemsList = Items;
    this.items = null;
  };
  ($traceurRuntime.createClass)(NewOrder, {activate: function() {
      this.customerList = this.customer.customers;
      this.items = this.itemsList.itemList;
    }}, {});
  Object.defineProperty(NewOrder, "parameters", {get: function() {
      return [[customers], [itemList]];
    }});
  var $__default = NewOrder;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=new-order.map
//# sourceURL=app/salesOrder/new-order/new-order.js