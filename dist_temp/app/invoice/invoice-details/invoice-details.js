define(["assert", "../invoiceService"], function($__0,$__2) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  var assert = $__0.assert;
  var invoice = $__2.default;
  var InvoiceDetails = function InvoiceDetails(Invoice) {
    assert.argumentTypes(Invoice, invoice);
    this.invoice = Invoice;
    this.selectInvoice = null;
    this.invoiceList = null;
  };
  ($traceurRuntime.createClass)(InvoiceDetails, {activate: function(id) {
      this.invoiceList = this.invoice.invoiceList;
      for (var $__5 = this.invoiceList[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__6; !($__6 = $__5.next()).done; ) {
        var invoice = $__6.value;
        {
          if (invoice.id == id) {
            this.selectInvoice = invoice;
          }
        }
      }
    }}, {});
  Object.defineProperty(InvoiceDetails, "parameters", {get: function() {
      return [[invoice]];
    }});
  var $__default = InvoiceDetails;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=invoice-details.map
//# sourceURL=app/invoice/invoice-details/invoice-details.js