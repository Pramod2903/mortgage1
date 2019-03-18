'use strict';

describe('userList', function(){

        beforeEach(module('userList'));

        describe('userListController', function(){
            it('shoule create a user list with 2 menus', inject(function($componentController){
                var ctrl = $componentController('userList');
                expect(ctrl.menus.length).toBe(3);
            }));
        });
});