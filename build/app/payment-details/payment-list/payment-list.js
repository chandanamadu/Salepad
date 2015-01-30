define(["assert", "../paymentDetailsService", "../payment-details"], function($__0,$__2,$__4) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  if (!$__4 || !$__4.__esModule)
    $__4 = {default: $__4};
  var assert = $__0.assert;
  var payments = $__2.default;
  var route = $__4.default;
  var PaymentList = function PaymentList(Payments, Route) {
    assert.argumentTypes(Payments, payments, Route, route);
    this.payments = Payments;
    this.paymentList = null;
    this.route = Route;
  };
  ($traceurRuntime.createClass)(PaymentList, {
    goHome: function() {
      this.route.router.navigate('#');
      window.location.reload(true);
    },
    activate: function() {
      this.paymentList = this.payments.payments;
    }
  }, {});
  Object.defineProperty(PaymentList, "parameters", {get: function() {
      return [[payments], [route]];
    }});
  var $__default = PaymentList;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=payment-list.map
//# sourceURL=app/payment-details/payment-list/payment-list.js