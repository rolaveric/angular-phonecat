'use strict';
import 'angular';
import 'angular-route';
import './animations';
import './controllers';
import './directives';
import './filters';
import './services';

/* App Module */

export default angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',
  'phonecatDirectives',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]).config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl as listCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl as detailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
