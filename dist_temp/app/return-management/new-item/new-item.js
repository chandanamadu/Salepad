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
  var items = $__4.default;
  var NewReturnItem = function NewReturnItem(Customers, Items) {
    assert.argumentTypes(Customers, customers, Items, items);
    this.customers = Customers;
    this.customerList = null;
    this.items = Items;
    this.itemList = null;
  };
  ($traceurRuntime.createClass)(NewReturnItem, {activate: function() {
      this.customerList = this.customers.customers;
      this.itemList = this.items.itemList;
    }}, {});
  Object.defineProperty(NewReturnItem, "parameters", {get: function() {
      return [[customers], [items]];
    }});
  var $__default = NewReturnItem;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=new-item.map
//# sourceURL=app/return-management/new-item/new-item.js