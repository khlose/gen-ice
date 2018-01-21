'use strict';

describe('Controller: WhyCtrl', function () {

  // load the controller's module
  beforeEach(module('genIceApp'));

  var WhyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WhyCtrl = $controller('WhyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WhyCtrl.awesomeThings.length).toBe(3);
  });
});
