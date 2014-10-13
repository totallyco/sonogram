'use strict';

describe('Controller: LastfmrecenttracksCtrl', function () {

  // load the controller's module
  beforeEach(module('sonogramApp'));

  var LastfmrecenttracksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LastfmrecenttracksCtrl = $controller('LastfmrecenttracksCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
