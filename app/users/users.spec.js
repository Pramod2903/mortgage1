describe('User Controllers', function() {

    describe('usersAppController', function(){
      var scope, ctrl,  $httpBackend;
  
      beforeEach(module('usersApp'));
  
      beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('phones/phones.json').
        respond([{id: 't-mobile-g2'}, {id: 'samsung-transform'}]);

        scope = $rootScope.$new();
        // scope = {};
        ctrl = $controller('usersAppController', {$scope:scope});
      }));

    //   it('should create "phones" model with 2 phones fetched from xhr', function() {
    //     expect(scope.users).toBeUndefined();
    //     $httpBackend.flush();
      
    //     expect(scope.users).toEqual([{id: 't-mobile-g2'}, {id: 'samsung-transform'}]);
    //   });
      
  
      it('should create "property Type" with 2 types', function() {
        expect(scope.propertyType.length).toBe(2);
      });
  
  
    //   it('should set the default value of orderProp model', function() {
    //     expect(scope.orderProp).toBe('age');
    //   });
    });
  });
  