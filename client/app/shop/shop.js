'use strict';

angular.module('offPaperApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shop', {
        url: '/shop',
        template: '<shop></shop>'
      });
  });
