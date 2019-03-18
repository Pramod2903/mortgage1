'use strict';

angular.
  module('iSmartApp').
  config(['$routeProvider','$locationProvider',
    function config($routeProvider,$locationProvider) {

      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/login', {
          controller: 'authenticationController',
          templateUrl: 'authentication/login.template.html'
        }).
        when('/signup', {
          controller: 'authenticationController',
          templateUrl: 'authentication/signup.template.html'
        }).
        when('/personal', {
          controller: 'usersAppController',
          templateUrl: 'users/users_details.html'
        }).  
        when('/property', {
          controller: 'usersAppController',
          templateUrl: 'users/users_properties.html'
        }).  
        when('/offers', {
          controller: 'usersAppController',
          template: '<user-list></user-list>'
        }).        
        otherwise('/login');
    }
  ]);
