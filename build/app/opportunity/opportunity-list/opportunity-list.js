define(["assert", "../opportunityService", "../opportunity"], function($__0,$__2,$__4) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  if (!$__4 || !$__4.__esModule)
    $__4 = {default: $__4};
  var assert = $__0.assert;
  var opportunities = $__2.default;
  var route = $__4.default;
  var Opportunity = function Opportunity(Opportunities, Route) {
    assert.argumentTypes(Opportunities, opportunities, Route, route);
    this.opportunities = Opportunities;
    this.opportunityList = null;
    this.route = Route;
  };
  ($traceurRuntime.createClass)(Opportunity, {
    goHome: function() {
      this.route.router.navigate('#');
      window.location.reload(true);
    },
    activate: function() {
      this.opportunityList = this.opportunities.opportunities;
    }
  }, {});
  Object.defineProperty(Opportunity, "parameters", {get: function() {
      return [[opportunities], [route]];
    }});
  var $__default = Opportunity;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=opportunity-list.map
//# sourceURL=app/opportunity/opportunity-list/opportunity-list.js