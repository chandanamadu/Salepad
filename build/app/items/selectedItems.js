define([], function() {
  "use strict";
  var ItemService = function ItemService() {
    this.itemList = [{
      itemGrop: 'Anchor milk powder 400g',
      unitPrize: 350,
      selected: '144 box 1'
    }, {
      itemGrop: 'Anchor milk powder 1kg',
      unitPrize: 770,
      selected: '20 units'
    }, {
      itemGrop: 'Coca cola 500ml',
      unitPrize: 80,
      selected: '20 units'
    }];
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

//# sourceMappingURL=selectedItems.map
//# sourceURL=app/items/selectedItems.js