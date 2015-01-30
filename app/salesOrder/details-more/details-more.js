import items from '../../items/selectedItems';

class DetailsMore {
	constructor(Items:items){
		this.Items = Items;
		this.selectedItems = null;
	}
	activate(){
		this.selectedItems = this.Items.itemList;
	}
}

export default DetailsMore;