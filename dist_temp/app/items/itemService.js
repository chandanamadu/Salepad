define([], function() {
  "use strict";
  var ItemService = function ItemService() {
    this.itemList = ['pen', 'pencil', 'apple nector'];
  };
  ($traceurRuntime.createClass)(ItemService, {activate: function() {}}, {});
  var $__default = ItemService;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=itemService.map
//# sourceURL=app/items/itemService.js