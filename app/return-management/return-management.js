import {Router} from 'durandal.forge';

class RetuenManagement {
  constructor(router: Router){
    this.router = router.configure(config => { 
      config.map([
          { pattern:'', 	  
          moduleId: 'return-management/return-list/return-list', nav:true,depth: 0},
           { pattern: 'item-details/:id', 
           moduleId: 'return-management/item-details/item-details',nav:true,depth: 1}, 
           { pattern : 'new-item',
           moduleId:'return-management/new-item/new-item',nav:true,depth:1}, 
          // { pattern :'details-more',
          //   moduleId : 'salesOrder/details-more/details-more', nav:true,depth:1},
      ]);
    });
  }
  
  activate(){ 

  }


}

export default RetuenManagement;