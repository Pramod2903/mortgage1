'use strict';

var iSmartApp = angular.module('iSmartApp',['ngRoute','ui.bootstrap','angularUtils.directives.dirPagination','authenticationApp','menuList','userList','usersApp']);

iSmartApp.controller('smartController', function insureController($scope){

    $scope.name='HCL Insurer';

});


iSmartApp.constant('config', {
    url:'http://10.117.189.206:9080/'
});


//http://10.117.189.206:9080/mortgage/api/user/

//url:'http://13.233.90.170:9080/'
