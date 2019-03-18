'use strict';

angular.module('userList')
       .component('userList', {
                templateUrl:'user-list/user-list.template.html',
                controller: function userListController($http){
                        var self = this;
                        //List of items in navigation menus
                        this.menus = [{ id: 1, place: 'Details'},{ id: 2, place: 'Property Details'},{ id: 3, place: 'Offers'}];
                }


});