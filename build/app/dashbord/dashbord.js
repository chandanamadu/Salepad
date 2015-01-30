define(["assert", "../shell/shell"], function($__0,$__2) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  var assert = $__0.assert;
  var shell = $__2.default;
  var DashBoard = function DashBoard(Shell) {
    assert.argumentTypes(Shell, shell);
    this.shell = Shell;
  };
  ($traceurRuntime.createClass)(DashBoard, {
    RouteCustomer: function() {
      alert('customers');
      this.shell.router.navigate('#customers');
    },
    RouteSalesOrder: function() {
      alert('sales orders');
      this.shell.router.navigate('#sales-order');
    },
    activete: function() {}
  }, {});
  Object.defineProperty(DashBoard, "parameters", {get: function() {
      return [[shell]];
    }});
  var $__default = DashBoard;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=dashbord.map
//# sourceURL=app/dashbord/dashbord.js