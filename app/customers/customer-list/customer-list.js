import route from '../customers';
//import dataService from '../../DataService';
import  Q from 'q';
import Customers from '../customers-list';

class  List{
	constructor(Route:route,cus : Customers){
		this.route = Route;
		this.customers = null;
		this.customersList = cus;
		
	}
	goHome(){
		this.route.router.navigate('#');
		window.location.reload(true);
	}
  	getCustomers(){
  // 		var defferd = Q.defer();
		// this.dataService.findAll().then(function(customers){
		// 	defferd.resolve(customers);
		// });
		// return defferd.promise;

  	}
	activate(){
			this.customers = this.customersList.customers;
		// this.getCustomers().then((customers) => {
		// 		this.customers = customers;
		// });
	}
}

export default List;