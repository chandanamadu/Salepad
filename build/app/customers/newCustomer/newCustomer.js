define(["assert", "../customers", "../customers-list", "knockout"], function($__0,$__2,$__4,$__6) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  if (!$__4 || !$__4.__esModule)
    $__4 = {default: $__4};
  if (!$__6 || !$__6.__esModule)
    $__6 = {default: $__6};
  var assert = $__0.assert;
  var customer = $__2.default;
  var customerList = $__4.default;
  var ko = $__6.default;
  var NewCustomer = function NewCustomer(Customer, CustomerList) {
    assert.argumentTypes(Customer, customer, CustomerList, customerList);
    this.costomer = Customer;
    this.cutomerLst = CustomerList;
    this.newCustomer = {
      'firstName': '',
      'lastName': '',
      'address': '',
      'mobile': '',
      'email': ''
    };
  };
  ($traceurRuntime.createClass)(NewCustomer, {
    getTitle: function() {
      return this.costomer.getTitle();
    },
    addNewCustomer: function() {
      var name = this.newCustomer.firstName + ' ' + this.newCustomer.lastName;
      this.cutomerLst.addNewCustomer(name);
      this.newCustomer.firstName = '';
      this.newCustomer.lastName = '';
      this.newCustomer.address = '';
      this.newCustomer.mobile = '';
      this.newCustomer.email = '';
      this.costomer.router.navigate('#customers');
    },
    activate: function() {}
  }, {});
  Object.defineProperty(NewCustomer, "parameters", {get: function() {
      return [[customer], [customerList]];
    }});
  var $__default = NewCustomer;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=newCustomer.map
//# sourceURL=app/customers/newCustomer/newCustomer.js