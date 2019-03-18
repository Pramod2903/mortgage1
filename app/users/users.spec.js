describe('User Controllers', function() {

    describe('usersAppController', function(){
      var scope, ctrl;
  
      beforeEach(module('phonecatApp'));
  
      beforeEach(inject(function($controller) {
        scope = {};
        ctrl = $controller('usersAppController', {$scope:scope});
      }));
  
      it('should create "phones" model with 3 phones', function() {
        expect(scope.phones.length).toBe(3);
      });
  
  
      it('should set the default value of orderProp model', function() {
        expect(scope.orderProp).toBe('age');
      });
    });
  });
  