define(["assert", "../opportunityService"], function($__0,$__2) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  var assert = $__0.assert;
  var opportunity = $__2.default;
  var OpportunityaDetails = function OpportunityaDetails(Opportunity) {
    assert.argumentTypes(Opportunity, opportunity);
    this.opportunity = Opportunity;
    this.opportunityList = null;
    this.opprtunitySelect = null;
  };
  ($traceurRuntime.createClass)(OpportunityaDetails, {activate: function(id) {
      this.opportunityList = this.opportunity.opportunities;
      for (var $__5 = this.opportunityList[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__6; !($__6 = $__5.next()).done; ) {
        var opp = $__6.value;
        {
          if (opp.id == id) {
            this.opportunitySelect = opp;
          }
        }
      }
    }}, {});
  Object.defineProperty(OpportunityaDetails, "parameters", {get: function() {
      return [[opportunity]];
    }});
  var $__default = OpportunityaDetails;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=opportunity-details.map
//# sourceURL=app/opportunity/opportunity-details/opportunity-details.js