define([], function() {
  "use strict";
  var TodoService = function TodoService() {
    this.todoMorning = [{
      'description': 'Supply Order to customer Nimal',
      'time': '8.00 - 9.00 AM '
    }, {
      'description': 'Get new orders  in Kandy',
      'time': '9.00-10.30 AM'
    }, {
      'description': 'Get Items from store',
      'time': '10.30-12.00 AM'
    }];
    this.todoAfterNoon = [{
      'description': 'Get new orders in Gampola',
      'time': '1.00-3.30 PM'
    }, {
      'description': 'Supply items to ABC(Pvt ltd)',
      'time': '3.30-4.00 AM'
    }, {
      'description': 'Collect money from DDR(Pvt ltd)',
      'time': '4.00-4.30 AM'
    }];
  };
  ($traceurRuntime.createClass)(TodoService, {activate: function() {}}, {});
  var $__default = TodoService;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=todoService.map
//# sourceURL=app/todo/todoService.js