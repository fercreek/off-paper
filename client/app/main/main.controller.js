'use strict';

(function() {

  class MainController {

    constructor($http) {
      this.$http = $http;
      this.purchases = [];
      this.total = 0;
    }

    $onInit() {
      this.$http.get('/api/purchases')
        .then(response => {
          this.purchases = response.data;

          this.total = this.purchases.reduce(function (oldVal, newVal) {
            console.log(oldVal)
            console.log(newVal)
            return oldVal + newVal.total_amount;
          }, 0);
        });
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
