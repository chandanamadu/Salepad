define([], function() {
  "use strict";
  var InvoiceService = function InvoiceService() {
    this.invoiceList = [{
      cus: 'Anura Kumara',
      No: 1234,
      InvcDate: '01/01/2015',
      DueDate: '05/01/2015',
      total: 'Rs 24500',
      id: 0
    }, {
      cus: 'Saman Priyadharshana',
      No: 1334,
      InvcDate: '04/01/2015',
      DueDate: '07/01/2015',
      total: 'Rs 12500',
      id: 1
    }, {
      cus: 'Sachintha Bandara',
      No: 11334,
      InvcDate: '23/01/2015',
      DueDate: '29/01/2015',
      total: 'Rs 14850',
      id: 2
    }, {
      cus: 'Kuamara Rathanayaka',
      No: 15734,
      InvcDate: '31/01/2015',
      DueDate: '05/02/2015',
      total: 'Rs 13267',
      id: 3
    }, {
      cus: 'Amiala Sampath',
      No: 12384,
      InvcDate: '12/01/2015',
      DueDate: '21/01/2015',
      total: 'Rs 12378',
      id: 4
    }];
  };
  ($traceurRuntime.createClass)(InvoiceService, {activate: function() {}}, {});
  var $__default = InvoiceService;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=invoiceService.map
//# sourceURL=app/invoice/invoiceService.js