define([], function() {
  "use strict";
  var PaymentDetailsService = function PaymentDetailsService() {
    this.payments = [{
      'cus': 'Chandana Bandara',
      'Amount': 'Rs 12000',
      'Date': '21/12/2014',
      'Pmethod': 'Cash Payment',
      'des': 'On Time',
      'id': 0
    }, {
      'cus': 'Sampath Disanayake',
      'Amount': 'Rs 13500',
      'Date': '11/12/2014',
      'Pmethod': 'Cash Payment',
      'des': 'On Time',
      'id': 1
    }, {
      'cus': 'Duminda Bandara',
      'Amount': 'Rs 5000',
      'Date': '11/11/2014',
      'Pmethod': 'Cash Payment',
      'des': 'On Time',
      'id': 2
    }, {
      'cus': 'Nalaka Sampath',
      'Amount': 'Rs 7500',
      'Date': '01/12/2014',
      'Pmethod': 'Cash Payment',
      'des': 'On Time',
      'id': 3
    }];
    this.paymentMethods = ['Cash Paymemt', 'Check Payment', 'Deposite to bank'];
  };
  ($traceurRuntime.createClass)(PaymentDetailsService, {activate: function() {}}, {});
  var $__default = PaymentDetailsService;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=paymentDetailsService.map
//# sourceURL=app/payment-details/paymentDetailsService.js