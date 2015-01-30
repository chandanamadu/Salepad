import returnItem from '../returnManagementService';

class ReturnItems {
	constructor(ReturnItem:returnItem){
		this.returnItem = ReturnItem;
		this.selectItem = null;
		this.returnItemList = null;
	}
	activate(id){
		this.returnItemList = this.returnItem.returnItems;
		for(var item of this.returnItemList){
			if(item.id==id){
				this.selectItem = item;
			}
		}
	}
}

export default ReturnItems;