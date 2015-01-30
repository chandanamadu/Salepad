define(["q"], function($__0) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  var Q = $__0.default;
  var Customers = function Customers() {
    this.customers = [{
      name: 'Chandana Bandara',
      id: 0
    }, {
      name: 'Nimal Bandara',
      id: 1
    }, {
      name: 'Kasun Dharshana',
      id: 2
    }, {
      name: 'Gayan Sasanka',
      id: 3
    }];
  };
  ($traceurRuntime.createClass)(Customers, {
    getCustomers: function() {
      return this.customers;
    },
    addNewCustomer: function(name) {
      var newCustmer = {
        id: '',
        name: ''
      };
      newCustmer.id = this.customers.length;
      newCustmer.name = name;
      if (name != ' ') {
        this.customers.push(newCustmer);
      } else {
        alert('Nothing to add');
      }
    },
    activate: function() {}
  }, {});
  var $__default = Customers;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});

//# sourceMappingURL=customers-list.map
//# sourceURL=app/customers/customers-list.js