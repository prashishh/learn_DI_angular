'use strict';

/* Services */
/* 
 * This module represent the services for the controllers.
 * 
 * Dependency Injection helps us to Maintain our code,  
 * because now we can modify anything related to this service * here in this factory only.
 * 
 * We will have less code, and one bonus point :Testing
 * Easy to create test mockups !
 *
 * And one more benefit is that, controller does not 
 * need to know where exactly this 'Milk' comes from :)
 *
 */

angular.module('coffeeServices', []).

  // We teach angular how to build Milk 
  factory('Milk', function(){
     return "Milk from the Factory";
  });

/* 
 * Things happening behind the Scenes
 * 
 * New injector is created from the module.
 * (This is usually done automatically by angular bootstrap)
 * 
 * var injector = angular.injector(['coffeeServices', 'ng']);
 * 
 * Request any dependency from the injector
 * var Milk = injector.get('Milk');
 * 
 */
