define(["assert", "./todoService", "durandal/app", "plugins/dialog"], function($__0,$__2,$__4,$__6) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  if (!$__4 || !$__4.__esModule)
    $__4 = {default: $__4};
  if (!$__6 || !$__6.__esModule)
    $__6 = {default: $__6};
  var assert = $__0.assert;
  var todo = $__2.default;
  var app = $__4.default;
  var dialog = $__6.default;
  var Todo = function Todo(ToDo) {
    assert.argumentTypes(ToDo, todo);
    this.todo = ToDo;
    this.morningTodo = null;
    this.eveningTodo = null;
  };
  ($traceurRuntime.createClass)(Todo, {
    showBottomPanel: function() {
      return dialog['showPanel']('todo/newTodo', {
        autoclose: true,
        position: 'right',
        overlay: true,
        animationSpeed: 'fast',
        animationIn: 'hingeInFromRight',
        animationOut: 'hingeOutFromRight',
        animationEasing: 'bounceIn'
      });
    },
    activate: function() {
      this.morningTodo = this.todo.todoMorning;
      this.eveningTodo = this.todo.todoAfterNoon;
    }
  }, {});
  Object.defineProperty(Todo, "parameters", {get: function() {
      return [[todo]];
    }});
  var $__default = Todo;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=todo.map
//# sourceURL=app/todo/todo.js