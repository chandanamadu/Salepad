import {Router} from 'durandal.forge';

class Invoice {
  constructor(router: Router){
    this.router = router.configure(config => { 
      config.map([
          { pattern:'', 	  
          moduleId: 'invoice/invoice-list/invoice-list', nav:true,depth: 0},
          { pattern: 'invoice-detail/:id', 
          moduleId: 'invoice/invoice-details/invoice-details',   nav:true ,depth: 1},
          { pattern:'new-invoice',moduleId:'invoice/new-invoice/new-invoice',nav:true,depth:1}   
      ]);
    });
  }

  activate(){ 

  }


}

export default Invoice;