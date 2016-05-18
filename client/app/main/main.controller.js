'use strict';

(function() {

  class MainController {

    constructor($http, $state) {
      this.$http = $http;
      this.$state = $state;
      this.awesomeThings = [];
    }

    $onInit() {
      this.$http.get('/api/things')
        .then(response => {
          this.awesomeThings = response.data;
        });
    }

    goToShop() {
      this.$state.go('shop');
    }

    addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', {
          name: this.newThing
        });
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }
  }

  angular.module('offPaperApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
