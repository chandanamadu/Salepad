import customers from '../../customers/customers-list';
import payments from '../paymentDetailsService';

class NewPayment {
	constructor(Customer:customers,Payments:payments){
		this.customer = Customer;
		this.payments = Payments;
		this.customerList = null;
		this.paymentMethods = null;

	}
	activate(){
		this.customerList = this.customer.customers;
		this.paymentMethods = this.payments.paymentMethods;
	}
}

export default NewPayment;