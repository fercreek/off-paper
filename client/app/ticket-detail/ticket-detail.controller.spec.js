'use strict';

describe('Component: TicketDetailComponent', function () {

  // load the controller's module
  beforeEach(module('offPaperApp'));

  var TicketDetailComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    TicketDetailComponent = $componentController('TicketDetailComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
