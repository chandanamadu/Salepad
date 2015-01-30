define(["assert", "durandal.forge"], function($__0,$__2) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  var assert = $__0.assert;
  var Router = $__2.Router;
  var Opportunity = function Opportunity(router) {
    assert.argumentTypes(router, Router);
    this.router = router.configure((function(config) {
      config.map([{
        pattern: '',
        moduleId: 'opportunity/opportunity-list/opportunity-list',
        nav: true,
        depth: 0
      }, {
        pattern: 'opportunity-details/:id',
        moduleId: 'opportunity/opportunity-details/opportunity-details',
        nav: true,
        depth: 1
      }, {
        pattern: 'new-opportunity',
        moduleId: 'opportunity/new-opportunity/new-opportunity',
        nav: true,
        depth: 1
      }]);
    }));
  };
  ($traceurRuntime.createClass)(Opportunity, {activate: function() {}}, {});
  Object.defineProperty(Opportunity, "parameters", {get: function() {
      return [[Router]];
    }});
  var $__default = Opportunity;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=opportunity.map
//# sourceURL=app/opportunity/opportunity.js