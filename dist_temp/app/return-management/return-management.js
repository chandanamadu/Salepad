define(["assert", "durandal.forge"], function($__0,$__2) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  var assert = $__0.assert;
  var Router = $__2.Router;
  var RetuenManagement = function RetuenManagement(router) {
    assert.argumentTypes(router, Router);
    this.router = router.configure((function(config) {
      config.map([{
        pattern: '',
        moduleId: 'return-management/return-list/return-list',
        nav: true,
        depth: 0
      }, {
        pattern: 'item-details/:id',
        moduleId: 'return-management/item-details/item-details',
        nav: true,
        depth: 1
      }, {
        pattern: 'new-item',
        moduleId: 'return-management/new-item/new-item',
        nav: true,
        depth: 1
      }]);
    }));
  };
  ($traceurRuntime.createClass)(RetuenManagement, {activate: function() {}}, {});
  Object.defineProperty(RetuenManagement, "parameters", {get: function() {
      return [[Router]];
    }});
  var $__default = RetuenManagement;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=return-management.map
//# sourceURL=app/return-management/return-management.js