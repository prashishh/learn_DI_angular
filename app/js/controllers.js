'use strict';

/* Controllers */

/*
 * We have a controller : CoffeeMachine !
 * It has no idea where the Milk comes from , 
 * It does not need to know how to construct Milk
 * This Controller sticks to its Dependency i,e, no Hidden Dependency !
 */

function CoffeeMachine($scope, Milk) {
 $scope.awesomeThings = [
   'Milk',
   'Coffee',
    Milk
]}

/*
 * Another way to Inject
 * CoffeeMachine.$inject = ['$scope', 'Milk'];
 * 
 * The 'ng-controller' directive does this behind the scenes
 * injector.instantiate(MyController); 
 */
