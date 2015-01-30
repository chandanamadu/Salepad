import shell from '../shell/shell';

class DashBoard {
  constructor(Shell : shell) {
		this.shell=Shell;     
  }
  RouteCustomer(){
  	alert('customers');
  	this.shell.router.navigate('#customers');
  }
  RouteSalesOrder(){
  	alert('sales orders');
  	this.shell.router.navigate('#sales-order');
  }
  activete(){
  	
  }
}

export default DashBoard;