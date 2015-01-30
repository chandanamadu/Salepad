import {Router} from 'durandal.forge';

class PaymentDetails {
  constructor(router: Router){
    this.router = router.configure(config => { 
      config.map([
          { pattern:'', 	  
          moduleId: 'payment-details/payment-list/payment-list', nav:true,depth: 0},
           { pattern: 'payment-details/:id',
           moduleId: 'payment-details/payment-details/details',nav:true,depth: 1}, 
           { pattern : 'new-payment',
           moduleId:'payment-details/new-payment/new-payment',nav:true,depth:1}, 
          // { pattern :'details-more',
          // moduleId : 'salesOrder/details-more/details-more', nav:true,depth:1},
      ]);
    });
  }
  
  activate(){ 

  }


}

export default PaymentDetails;