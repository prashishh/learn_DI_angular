'use strict';

/* App Module */

/* 
 * This is the main Application Module 
 * All the Routing and Controller assignment is Done here
 *
 */

angular.module('CoffeeMaker', ['coffeeServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/coffee',
        {templateUrl: 'partials/coffee.html',
         controller: CoffeeMachine}).
      otherwise({redirectTo: '/coffee'});
}]);
