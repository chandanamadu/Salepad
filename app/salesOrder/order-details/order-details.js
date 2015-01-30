
import orders from '../salesOrderService'; 

class Detail {
	constructor(Orders:orders){
		this.orderList = Orders;
		this.salesOrders = null;
		this.salesOrder = null;	
	}

	activate(id){
		this.salesOrders = this.orderList.salesOrderList;
		for(var order of this.salesOrders){
			if(order.id == id){
				this.salesOrder = order;
			}
		}
		
	}
}


export default Detail;