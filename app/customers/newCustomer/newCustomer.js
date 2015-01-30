import customer from '../customers';
import customerList from '../customers-list';
import ko from 'knockout';

class NewCustomer{
  constructor(Customer:customer, CustomerList:customerList) {
  	  this.costomer  = Customer;
  	  this.cutomerLst = CustomerList;
	  this.newCustomer= {
	  	  	'firstName':'',
	  	  	'lastName' :'',
          'address' :'',
          'mobile' :'',
          'email' :'',
	  };   
  }
  getTitle(){
  		return this.costomer.getTitle();
  }
  addNewCustomer(){
  	var name = this.newCustomer.firstName + ' ' + this.newCustomer.lastName;
  	this.cutomerLst.addNewCustomer(name);
  	this.newCustomer.firstName = '';
  	this.newCustomer.lastName = '';
    this.newCustomer.address = '';
    this.newCustomer.mobile = '';
    this.newCustomer.email = '';
  	this.costomer.router.navigate('#customers');
  }
  activate(){
  		
  }
}

export default NewCustomer;