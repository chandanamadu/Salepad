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
  var NewOpportunity = function NewOpportunity(Customers, Item) {
    assert.argumentTypes(Customers, customers, Item, items);
    this.currentTotal = '0.00';
    this.customers = Customers;
    this.customerList = null;
    this.item = Item;
    this.itemList = null;
  };
  ($traceurRuntime.createClass)(NewOpportunity, {activate: function() {
      this.customerList = this.customers.customers;
      this.itemList = this.item.itemList;
    }}, {});
  Object.defineProperty(NewOpportunity, "parameters", {get: function() {
      return [[customers], [items]];
    }});
  var $__default = NewOpportunity;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=new-opportunity.map
//# sourceURL=app/opportunity/new-opportunity/new-opportunity.js