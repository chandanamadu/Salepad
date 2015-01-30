define(["assert", "../../items/selectedItems"], function($__0,$__2) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  var assert = $__0.assert;
  var items = $__2.default;
  var DetailsMore = function DetailsMore(Items) {
    assert.argumentTypes(Items, items);
    this.Items = Items;
    this.selectedItems = null;
  };
  ($traceurRuntime.createClass)(DetailsMore, {activate: function() {
      this.selectedItems = this.Items.itemList;
    }}, {});
  Object.defineProperty(DetailsMore, "parameters", {get: function() {
      return [[items]];
    }});
  var $__default = DetailsMore;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=details-more.map
//# sourceURL=app/salesOrder/details-more/details-more.js