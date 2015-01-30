import {Router} from 'durandal.forge';
class Opportunity {
  constructor(router: Router){
   
    this.router = router.configure(config => { 
      config.map([
          { pattern:'', 	  
          moduleId: 'opportunity/opportunity-list/opportunity-list',nav:true,depth: 0},
          { pattern: 'opportunity-details/:id', 
          moduleId: 'opportunity/opportunity-details/opportunity-details',   nav: true ,depth: 1},
          { pattern:'new-opportunity',moduleId:'opportunity/new-opportunity/new-opportunity',nav:true,depth:1}   
      ]);
    });
  } 
  activate(){ 

  }


}

export default Opportunity;