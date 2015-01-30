define(["assert", "../../customers/customers-list"], function($__0,$__2) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  var assert = $__0.assert;
  var customers = $__2.default;
  var NewInvoice = function NewInvoice(Customers) {
    assert.argumentTypes(Customers, customers);
    this.customers = Customers;
    this.customerList = null;
  };
  ($traceurRuntime.createClass)(NewInvoice, {activate: function() {
      this.customerList = this.customers.customers;
    }}, {});
  Object.defineProperty(NewInvoice, "parameters", {get: function() {
      return [[customers]];
    }});
  var $__default = NewInvoice;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=new-invoice.map
//# sourceURL=app/invoice/new-invoice/new-invoice.js