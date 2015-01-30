define([], function() {
  "use strict";
  var OpportunityService = function OpportunityService() {
    this.opportunities = [{
      cus: 'Chandana Bandara',
      Odate: '12/12/2014',
      Edate: '15/12/2014',
      total: '12000',
      des: 'cake order',
      id: 0
    }, {
      cus: 'Kasun Bandara',
      Odate: '11/12/2014',
      Edate: '16/12/2014',
      total: '1000',
      des: 'biscuits order',
      id: 1
    }, {
      cus: 'Migara Perera',
      Odate: '25/11/2014',
      Edate: '03/12/2014',
      total: '5000',
      des: 'cake order',
      id: 2
    }];
  };
  ($traceurRuntime.createClass)(OpportunityService, {activate: function() {}}, {});
  var $__default = OpportunityService;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=opportunityService.map
//# sourceURL=app/opportunity/opportunityService.js