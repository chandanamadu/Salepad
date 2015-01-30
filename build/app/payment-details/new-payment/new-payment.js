define(["assert", "../../customers/customers-list", "../paymentDetailsService"], function($__0,$__2,$__4) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  if (!$__4 || !$__4.__esModule)
    $__4 = {default: $__4};
  var assert = $__0.assert;
  var customers = $__2.default;
  var payments = $__4.default;
  var NewPayment = function NewPayment(Customer, Payments) {
    assert.argumentTypes(Customer, customers, Payments, payments);
    this.customer = Customer;
    this.payments = Payments;
    this.customerList = null;
    this.paymentMethods = null;
  };
  ($traceurRuntime.createClass)(NewPayment, {activate: function() {
      this.customerList = this.customer.customers;
      this.paymentMethods = this.payments.paymentMethods;
    }}, {});
  Object.defineProperty(NewPayment, "parameters", {get: function() {
      return [[customers], [payments]];
    }});
  var $__default = NewPayment;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=new-payment.map
//# sourceURL=app/payment-details/new-payment/new-payment.js