import customers from '../../customers/customers-list';
import items from '../../items/itemService';

class NewReturnItem {
	constructor(Customers:customers,Items:items){
		this.customers = Customers;
		this.customerList = null;

		this.items = Items;
		this.itemList = null;
	}

	activate(){
		this.customerList = this.customers.customers;
		this.itemList = this.items.itemList;
	}
}

export default NewReturnItem;