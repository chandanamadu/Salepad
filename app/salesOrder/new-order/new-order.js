import customers from '../../customers/customers-list';
import itemList from '../../items/itemService';


class NewOrder {
	constructor(Customers:customers,Items:itemList){
		this.customer = Customers;
		this.customerList = null;
		this.currentTotal = '0.00';
		this.itemsList = Items;
		this.items = null; 
	}

	activate(){
		this.customerList = this.customer.customers;
		this.items = this.itemsList.itemList;
	}
}

export default NewOrder;