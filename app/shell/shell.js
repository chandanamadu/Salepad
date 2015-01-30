
import {AppRouter} from 'durandal.forge';

class Shell {

  constructor(router: AppRouter){
   
    this.router = router.configure(config =>{ 
      config.map([
        { pattern: ['','dashbord'],      moduleId: 'dashbord/dashbord',  nav: true, title:'Salespad' },
        { pattern:'customers', hasChildRoutes: true,      moduleId: 'customers/customers', nav: true , title:'Customers'},
        { pattern:'sales-order', hasChildRoutes: true,      moduleId: 'salesOrder/salesOrder', nav: true , title:'SalesOrder'},
        { pattern:'opportunity',hasChildRoutes:true,  moduleId:'opportunity/opportunity',nav:true},
        { pattern:'todo',moduleId:'todo/todo',nav:true},
        { pattern:'invoice',hasChildRoutes:true,moduleId:'invoice/invoice',nav:true},
        { pattern:'return-management',hasChildRoutes:true,moduleId:'return-management/return-management',nav:true},
        { pattern:'payment-details',hasChildRoutes:true,moduleId:'payment-details/payment-details',nav:true},
      ]);
    });
  }
    
  activate(){
      return this.router.activate();
  }

}

export default Shell;