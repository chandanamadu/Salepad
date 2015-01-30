define(["plugins/dialog"], function($__0) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  var dialog = $__0.default;
  var NewTodo = function NewTodo() {
    this.autoclose = true;
  };
  ($traceurRuntime.createClass)(NewTodo, {
    addThisTodo: function() {
      dialog.close(this);
    },
    cancel: function() {
      dialog.close(this);
    },
    activate: function() {}
  }, {});
  var $__default = NewTodo;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=newTodo.map
//# sourceURL=app/todo/newTodo.js