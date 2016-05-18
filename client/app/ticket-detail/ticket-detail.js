'use strict';

angular.module('offPaperApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ticket-detail', {
        url: '/ticket-detail/:id',
        template: '<ticket-detail></ticket-detail>'
      });
  });
