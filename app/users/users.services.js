'use strict';

angular.module('usersApp').factory('userAppService', ['$http', '$window', '$rootScope','config',
  function ($http, $window, $rootScope,config) {

    var service = {};

    service.submitUserDetails = function (userObj) {

      console.log(JSON.stringify(userObj));

      return $http({
        method: 'POST',
        type: 'JSON',
        data: userObj,
        url: config.url+'mortgage/api/user'
      });
    }

    service.submitPropertyDetails = function (propertyObj) {

      return $http({
        method: 'POST',
        type: 'JSON',
        data: propertyObj,
        url: config.url+'mortgage/api/properties/test'
      });

    }

    return service;
  }]);
