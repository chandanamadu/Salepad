import orders from '../salesOrderService' ;
import route from '../salesOrder';

class OrderList {
	constructor(Orders:orders,Route:route){
		this.orderList = Orders;
		this.salesOrders = null;		
		this.route = Route;
	}
	goHome(){
		this.route.router.navigate('#');
		window.location.reload(true);
	}
	activate(){
		this.salesOrders = this.orderList.salesOrderList;	
	}
}

export default OrderList;