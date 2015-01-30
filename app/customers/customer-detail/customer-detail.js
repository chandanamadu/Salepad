//import dataService from '../../DataService';
import Q from 'q';
import Customers from '../customers-list';

class Detail {

	constructor(cus : Customers){
		this.customer = null;
		this.dummyCustomer = {
			'AvarageSales': 25000,
			'mobile' : '071-1234567',
			'Email' : 'abcdefg@gmail.com',
			'address' : 'No 133, Hallgolla No 2, Nawalapitiya',
			'company': 'ABC(pvt ltd)'
		};
		this.customer = null;
		this.customerList = null;
		this.customersList = cus;
		//this.DataService = DataService;
	}
	getCustomer(id){
		// var defferd = Q.defer();
		// this.DataService.findById(id).then(function(customer){
		// 	 defferd.resolve(customer);

		// });

		// return defferd.promise;

	}

	activate(id){
		
		// this.getCustomer(id).then((customer)=>{
		// 		this.customer = customer;
		// 		alert(this.customer.name);	
		// });
		this.customerList = this.customersList.customers;
		for(var cus of this.customerList){
			if(cus.id==id){
				this.customer = cus;
			}
		}
		
	}
}

export default Detail;