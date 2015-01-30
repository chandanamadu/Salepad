define(["assert", "../invoiceService", "../invoice"], function($__0,$__2,$__4) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  if (!$__4 || !$__4.__esModule)
    $__4 = {default: $__4};
  var assert = $__0.assert;
  var invoice = $__2.default;
  var route = $__4.default;
  var InvoiceList = function InvoiceList(Invoice, Route) {
    assert.argumentTypes(Invoice, invoice, Route, route);
    this.invoice = Invoice;
    this.invoiceList = null;
    this.route = Route;
  };
  ($traceurRuntime.createClass)(InvoiceList, {
    goHome: function() {
      this.route.router.navigate('#');
      window.location.reload(true);
    },
    activate: function() {
      this.invoiceList = this.invoice.invoiceList;
    }
  }, {});
  Object.defineProperty(InvoiceList, "parameters", {get: function() {
      return [[invoice], [route]];
    }});
  var $__default = InvoiceList;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=invoice-list.map
//# sourceURL=app/invoice/invoice-list/invoice-list.js