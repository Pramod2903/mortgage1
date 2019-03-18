'use strict';

var usersApp = angular.module('usersApp',[]);

usersApp.controller('usersAppController', ['$scope','userAppService', function($scope, userAppService){

    $scope.users = {};

    $scope.userName = "Hello World";

    $scope.propertyTypes = [{"id": 1,"name": "Plot"},{"id": 2,"name": "Residential"}];
    $scope.propertyType = $scope.propertyTypes[0];

    console.log(JSON.stringify($scope.users.propertyType));


    $scope.submitUserDetails = function(obj){

        
        var userObj = {
            "userName": 'test1234',
            "phone": obj.phone,
            "email": obj.email,
            "dob": obj.dob,
            "gender": obj.gender,
            "pan": obj.panNumber,
            "salary": obj.salary,
            "altIncomee": obj.income,
            "otherIncome": obj.oincome,
            "name":obj.userName
        }


        userAppService.submitUserDetails(obj)
        .then(
          function (success) {
              alert('User Details are updated');
          },
          function (error) {
              console.log('Error setting the propertes');
          }); 

    }


    $scope.submitPropertyDetails = function(obj){


        var propertyObj = {
            "area": obj.area,
            "pincode": obj.pin,
            "propertyName": obj.propertyName,
            "type": obj.propertyType,
            "address": obj.addr
        }

        userAppService.submitPropertyDetails(propertyObj)
        .then(
          function (success) {
              alert('Property Details are submitted successfuly');
              window.location.replace('#!/offers');
          },
          function (error) {
              console.log('Error setting the propertes');
          }); 

    }

}]);