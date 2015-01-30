import payments from '../paymentDetailsService';
class Details {
	constructor(Payments:payments){
		this.payments = Payments;
		this.paymentList = null;
		this.selectPayment = null;
	}
	activate(id){
		this.paymentList = this.payments.payments;
		for(var payment of this.paymentList){
			if(payment.id==id){
				this.selectPayment = payment;
			}
		}
	}
}

export default Details;