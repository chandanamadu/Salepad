import payments from '../paymentDetailsService';
import route from '../payment-details';

class PaymentList {
	constructor(Payments:payments,Route:route){
		this.payments = Payments;
		this.paymentList = null;
		this.route = Route;
	}
	goHome(){
		this.route.router.navigate('#');
		window.location.reload(true);
	}
	activate(){
		this.paymentList = this.payments.payments;
	}
}

export default PaymentList;