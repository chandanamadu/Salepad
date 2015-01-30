define(["assert", "q", "../customers-list"], function($__0,$__2,$__4) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  if (!$__4 || !$__4.__esModule)
    $__4 = {default: $__4};
  var assert = $__0.assert;
  var Q = $__2.default;
  var Customers = $__4.default;
  var Detail = function Detail(cus) {
    assert.argumentTypes(cus, Customers);
    this.customer = null;
    this.dummyCustomer = {
      'AvarageSales': 25000,
      'mobile': '071-1234567',
      'Email': 'abcdefg@gmail.com',
      'address': 'No 133, Hallgolla No 2, Nawalapitiya',
      'company': 'ABC(pvt ltd)'
    };
    this.customer = null;
    this.customerList = null;
    this.customersList = cus;
  };
  ($traceurRuntime.createClass)(Detail, {
    getCustomer: function(id) {},
    activate: function(id) {
      this.customerList = this.customersList.customers;
      for (var $__7 = this.customerList[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__8; !($__8 = $__7.next()).done; ) {
        var cus = $__8.value;
        {
          if (cus.id == id) {
            this.customer = cus;
          }
        }
      }
    }
  }, {});
  Object.defineProperty(Detail, "parameters", {get: function() {
      return [[Customers]];
    }});
  var $__default = Detail;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=customer-detail.map
//# sourceURL=app/customers/customer-detail/customer-detail.js