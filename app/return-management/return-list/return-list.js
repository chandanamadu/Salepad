import returnList from '../returnManagementService';
import route from '../return-management';

class ReturnList {
	constructor(Returnlist:returnList,Route:route){
		this.returnList = Returnlist;
		this.returnItems = null;
		this.route = Route;
	}
	goHome(){
		this.route.router.navigate('#');
		window.location.reload(true);
	}

	activate(){
		this.returnItems = this.returnList.returnItems;
	}

}

export default ReturnList;