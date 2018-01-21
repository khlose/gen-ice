'use strict';

describe('Controller: JoinusCtrl', function () {

  // load the controller's module
  beforeEach(module('genIceApp'));

  var JoinusCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JoinusCtrl = $controller('JoinusCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(JoinusCtrl.awesomeThings.length).toBe(3);
  });
});
