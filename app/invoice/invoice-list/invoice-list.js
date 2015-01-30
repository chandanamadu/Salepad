import invoice from '../invoiceService';
import route from '../invoice';
//
class InvoiceList {
	constructor(Invoice:invoice,Route:route){
		this.invoice = Invoice;
		this.invoiceList = null;
		this.route = Route;
	}
	goHome(){
		this.route.router.navigate('#');
		window.location.reload(true);
	}
	activate(){
		this.invoiceList = this.invoice.invoiceList;
	}
}

export default InvoiceList;