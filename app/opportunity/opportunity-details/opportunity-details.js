
import opportunity from '../opportunityService' ;


class OpportunityaDetails {
	constructor(Opportunity:opportunity){
		this.opportunity = Opportunity;
		this.opportunityList = null;
		this.opprtunitySelect  = null;
	}
	activate(id){
		this.opportunityList = this.opportunity.opportunities;
		for (var opp of this.opportunityList){
			if(opp.id==id){
				this.opportunitySelect = opp;
			}
		}
	}
}

export default OpportunityaDetails;

