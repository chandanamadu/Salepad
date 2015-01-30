import Q from 'q';
import breeze from 'breeze';

class DataService {
	constructor(){
		this.serviceName = 'http://magnetdemo.herokuapp.com/web/app_dev.php/system/api';
  		this.entityManager = new breeze.EntityManager(this.serviceName);
  		this.query = new breeze.EntityQuery().from('Party');
  		this.IdQuery = null;

  	}
  	getLocalResults(query){
    	if(!this.entityManager.metadataStore.isEmpty()){
    		return this.entityManager.executeQueryLocally(query);
    	}
  		return [];
  	}
  	getResults(locally,query){
  		var deferred = Q.defer();
  		if(locally.length){
        		deferred.resolve(locally);
        	}else{
        		this.entityManager.executeQuery(query).then(function(data){
                	deferred.resolve(data.results);
        		},function(error){
	                console.log(error);
        		});
        	}
        	return deferred.promise;
  	}
	findAll(){
		var deferred = Q.defer();
		var results = this.getLocalResults(this.query);
		this.getResults(results,this.query).then(function(data){
        		deferred.resolve(data);
        });

        return deferred.promise;

	}
	findById(id){
		var deferred = Q.defer();
		this.IdQuery = this.query.where('id','eq',id);
		var results = this.getLocalResults(this.IdQuery);
		this.getResults(results,this.IdQuery).then(function(data){
        		deferred.resolve(data[0]);
        });
        return deferred.promise;
	}
	activate(){
	}

}

export default DataService; 