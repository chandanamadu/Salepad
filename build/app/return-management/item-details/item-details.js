define(["assert", "../returnManagementService"], function($__0,$__2) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  var assert = $__0.assert;
  var returnItem = $__2.default;
  var ReturnItems = function ReturnItems(ReturnItem) {
    assert.argumentTypes(ReturnItem, returnItem);
    this.returnItem = ReturnItem;
    this.selectItem = null;
    this.returnItemList = null;
  };
  ($traceurRuntime.createClass)(ReturnItems, {activate: function(id) {
      this.returnItemList = this.returnItem.returnItems;
      for (var $__5 = this.returnItemList[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__6; !($__6 = $__5.next()).done; ) {
        var item = $__6.value;
        {
          if (item.id == id) {
            this.selectItem = item;
          }
        }
      }
    }}, {});
  Object.defineProperty(ReturnItems, "parameters", {get: function() {
      return [[returnItem]];
    }});
  var $__default = ReturnItems;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=item-details.map
//# sourceURL=app/return-management/item-details/item-details.js