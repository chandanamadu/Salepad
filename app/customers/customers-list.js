//import data from '../DataService';
import Q from 'q';




class Customers {
	constructor(){
		this.customers = [{name:'Chandana Bandara',id:0},
						  {name:'Nimal Bandara',id:1},
						  {name:'Kasun Dharshana',id:2},
						  {name:'Gayan Sasanka',id:3}];
	}

	getCustomers(){
		return this.customers;
		// var deferred = Q.defer();
		// this.dataService.findAll().then(function(customers){
		// 	 deferred.resolve(customers);
		// });
		// return deferred.promise;
	}
	
	addNewCustomer(name){

		 var newCustmer={
		 	id:'',
		 	name:'',
		 };
		 newCustmer.id = this.customers.length ;
		 newCustmer.name = name;
		 if(name!=' '){
		 	this.customers.push(newCustmer);
		 }
		 else{
		 	alert('Nothing to add');
		 }
		 

	}
	activate(){

	}
}
export default Customers;