'use strict';

/* App Module */

angular.module('CoffeeMaker', ['coffeeServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/coffee',
        {templateUrl: 'partials/coffee.html',
         controller: CoffeeMachine}).
      otherwise({redirectTo: '/coffee'});
}]);
