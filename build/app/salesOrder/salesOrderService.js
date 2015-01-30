define([], function() {
  "use strict";
  var SalesOrderService = function SalesOrderService() {
    this.salesOrderList = [{
      oderDate: '2015/01/01',
      total: 2000,
      Cname: 'Kamal Wickramasinghe',
      id: 0,
      no: 1234
    }, {
      oderDate: '2015/01/03',
      total: 1300,
      Cname: 'Sunil Jayantha',
      id: 1,
      no: 1224
    }, {
      oderDate: '2015/01/05',
      total: 1250,
      Cname: 'Jayantha Bandara',
      id: 2,
      no: 1134
    }, {
      oderDate: '2015/01/11',
      total: 12000,
      Cname: 'Gayan Sasanka',
      id: 3,
      no: 1254
    }];
  };
  ($traceurRuntime.createClass)(SalesOrderService, {activate: function() {}}, {});
  var $__default = SalesOrderService;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=salesOrderService.map
//# sourceURL=app/salesOrder/salesOrderService.js