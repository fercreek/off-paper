'use strict';
(function(){

class ShopComponent {

  constructor($http) {
    this.$http = $http;
    this.message = 'Hello';
    this.products = [];
  }


	$onInit() {
	  this.$http.get('/api/products')
	    .then(response => {
	      this.products = response.data;
	    });
	}

	saveTicket() {
		console.log('save ticket')
	}

}

angular.module('offPaperApp')
  .component('shop', {
    templateUrl: 'app/shop/shop.html',
    controller: ShopComponent
  });

})();
