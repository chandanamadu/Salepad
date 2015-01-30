define(["assert", "../returnManagementService", "../return-management"], function($__0,$__2,$__4) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  if (!$__4 || !$__4.__esModule)
    $__4 = {default: $__4};
  var assert = $__0.assert;
  var returnList = $__2.default;
  var route = $__4.default;
  var ReturnList = function ReturnList(Returnlist, Route) {
    assert.argumentTypes(Returnlist, returnList, Route, route);
    this.returnList = Returnlist;
    this.returnItems = null;
    this.route = Route;
  };
  ($traceurRuntime.createClass)(ReturnList, {
    goHome: function() {
      this.route.router.navigate('#');
      window.location.reload(true);
    },
    activate: function() {
      this.returnItems = this.returnList.returnItems;
    }
  }, {});
  Object.defineProperty(ReturnList, "parameters", {get: function() {
      return [[returnList], [route]];
    }});
  var $__default = ReturnList;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=return-list.map
//# sourceURL=app/return-management/return-list/return-list.js