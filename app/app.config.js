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
        when('/offers', {
          controller: 'authenticationController',
          template: '<h2>Welcome to Offers</h2>'
        }).        
        otherwise('/login');
    }
  ]);
