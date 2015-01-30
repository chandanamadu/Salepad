import customers from '../../customers/customers-list';
//
class NewInvoice {
	constructor(Customers:customers){
		this.customers = Customers;
		this.customerList = null;
	}
	activate(){
		this.customerList = this.customers.customers;
	}
}

export default NewInvoice;