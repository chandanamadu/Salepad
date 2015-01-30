define(["q", "breeze"], function($__0,$__2) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  var Q = $__0.default;
  var breeze = $__2.default;
  var DataService = function DataService() {
    this.serviceName = 'http://magnetdemo.herokuapp.com/web/app_dev.php/system/api';
    this.entityManager = new breeze.EntityManager(this.serviceName);
    this.query = new breeze.EntityQuery().from('Party');
    this.IdQuery = null;
  };
  ($traceurRuntime.createClass)(DataService, {
    getLocalResults: function(query) {
      if (!this.entityManager.metadataStore.isEmpty()) {
        return this.entityManager.executeQueryLocally(query);
      }
      return [];
    },
    getResults: function(locally, query) {
      var deferred = Q.defer();
      if (locally.length) {
        deferred.resolve(locally);
      } else {
        this.entityManager.executeQuery(query).then(function(data) {
          deferred.resolve(data.results);
        }, function(error) {
          console.log(error);
        });
      }
      return deferred.promise;
    },
    findAll: function() {
      var deferred = Q.defer();
      var results = this.getLocalResults(this.query);
      this.getResults(results, this.query).then(function(data) {
        deferred.resolve(data);
      });
      return deferred.promise;
    },
    findById: function(id) {
      var deferred = Q.defer();
      this.IdQuery = this.query.where('id', 'eq', id);
      var results = this.getLocalResults(this.IdQuery);
      this.getResults(results, this.IdQuery).then(function(data) {
        deferred.resolve(data[0]);
      });
      return deferred.promise;
    },
    activate: function() {}
  }, {});
  var $__default = DataService;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=DataService.map
//# sourceURL=app/DataService.js