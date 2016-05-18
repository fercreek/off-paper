'use strict';

angular.module('offPaperApp', ['offPaperApp.constants', 'ngCookies', 'ngResource', 'ngSanitize',
    'ui.router', 'ui.bootstrap', 'toaster', 'ngAnimate'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/login');

    $locationProvider.html5Mode(true);
  });
