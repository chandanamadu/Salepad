define(["assert", "durandal.forge"], function($__0,$__2) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  var assert = $__0.assert;
  var Router = $__2.Router;
  var PaymentDetails = function PaymentDetails(router) {
    assert.argumentTypes(router, Router);
    this.router = router.configure((function(config) {
      config.map([{
        pattern: '',
        moduleId: 'payment-details/payment-list/payment-list',
        nav: true,
        depth: 0
      }, {
        pattern: 'payment-details/:id',
        moduleId: 'payment-details/payment-details/details',
        nav: true,
        depth: 1
      }, {
        pattern: 'new-payment',
        moduleId: 'payment-details/new-payment/new-payment',
        nav: true,
        depth: 1
      }]);
    }));
  };
  ($traceurRuntime.createClass)(PaymentDetails, {activate: function() {}}, {});
  Object.defineProperty(PaymentDetails, "parameters", {get: function() {
      return [[Router]];
    }});
  var $__default = PaymentDetails;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=payment-details.map
//# sourceURL=app/payment-details/payment-details.js