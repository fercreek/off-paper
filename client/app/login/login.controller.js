'use strict';
(function(){

class LoginComponent {
  constructor($state) {
    this.message = 'Hello';
    this.goToDashboard = function () {
   		$state.go('main');
    };
  }
}

angular.module('offPaperApp')
  .component('login', {
    templateUrl: 'app/login/login.html',
    controller: LoginComponent
  });

})();
