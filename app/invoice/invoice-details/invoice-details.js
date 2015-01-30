import invoice from '../invoiceService';

class InvoiceDetails {
	constructor(Invoice:invoice){
		this.invoice = Invoice;
		this.selectInvoice = null;
		this.invoiceList = null;
	}
	activate(id){
		this.invoiceList = this.invoice.invoiceList;
		for(var invoice of this.invoiceList){
			if(invoice.id==id){
				this.selectInvoice = invoice;
			}
		}
	}
}

export default InvoiceDetails;