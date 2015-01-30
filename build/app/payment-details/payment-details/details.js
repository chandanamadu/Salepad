define(["assert", "../paymentDetailsService"], function($__0,$__2) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  var assert = $__0.assert;
  var payments = $__2.default;
  var Details = function Details(Payments) {
    assert.argumentTypes(Payments, payments);
    this.payments = Payments;
    this.paymentList = null;
    this.selectPayment = null;
  };
  ($traceurRuntime.createClass)(Details, {activate: function(id) {
      this.paymentList = this.payments.payments;
      for (var $__5 = this.paymentList[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__6; !($__6 = $__5.next()).done; ) {
        var payment = $__6.value;
        {
          if (payment.id == id) {
            this.selectPayment = payment;
          }
        }
      }
    }}, {});
  Object.defineProperty(Details, "parameters", {get: function() {
      return [[payments]];
    }});
  var $__default = Details;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=details.map
//# sourceURL=app/payment-details/payment-details/details.js