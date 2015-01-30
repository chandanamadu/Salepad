import opportunities from '../opportunityService';
import route from '../opportunity';

class Opportunity {
	constructor(Opportunities:opportunities,Route:route){
		this.opportunities = Opportunities;
		this.opportunityList = null;
		this.route = Route;
	}
	goHome(){
		this.route.router.navigate('#');
		window.location.reload(true);
	}

	activate(){
		this.opportunityList = this.opportunities.opportunities;
	}
}

export default Opportunity;