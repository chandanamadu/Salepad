import {Router} from 'durandal.forge';

class SalesOrders {
  constructor(router: Router){
    this.router = router.configure(config => { 
      config.map([
          { pattern:'', 	  
          moduleId: 'salesOrder/order-list/order-list', nav:true,depth: 0},
          { pattern: 'order-details/:id', 
          moduleId: 'salesOrder/order-details/order-details',nav:true,depth: 1}, 
          { pattern : 'new-order',
          moduleId:'salesOrder/new-order/new-order',nav:true,depth:1}, 
          { pattern :'details-more',
            moduleId : 'salesOrder/details-more/details-more', nav:true,depth:1},
      ]);
    });
  }
  
  activate(){ 

  }


}

export default SalesOrders;