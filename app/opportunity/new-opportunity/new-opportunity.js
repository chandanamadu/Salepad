import customers from '../../customers/customers-list';
import items from '../../items/itemService';

class NewOpportunity {
	constructor(Customers:customers,Item:items){
		this.currentTotal = '0.00';
		this.customers = Customers;
		this.customerList = null;
		this.item = Item;
		this.itemList = null;
	}
	activate(){
		this.customerList = this.customers.customers ;
		this.itemList = this.item.itemList;
	}
}

export default NewOpportunity;