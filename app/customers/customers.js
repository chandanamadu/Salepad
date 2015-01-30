import {Router} from 'durandal.forge';

class Customers {
  constructor(router: Router){
    // return;
    this.router = router.configure(config => { 
      config.map([
          { pattern:'', 	  
          moduleId: 'customers/customer-list/customer-list', nav:false,depth: 0},
          { pattern: 'customer-details/:id', 
          moduleId: 'customers/customer-detail/customer-detail',   nav: false ,depth: 1},
          { pattern:'new-Customer',moduleId:'customers/newCustomer/newCustomer',nav:false,depth:1,title:'New Customer'}   
      ]);
    });
  }
  getTitle(){
    if(this.router.activeInstruction()){
      return this.router.activeInstruction().config.title;
    }
  } 
  
  activate(){ 

  }


}

export default Customers;