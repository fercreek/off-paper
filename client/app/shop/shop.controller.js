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
		this.products.forEach( function(element, index) {
			// console.log(element)
		});
		let data = {
			products: this.products,
		  payment: "Cash",
		  tax: 2.2,
		  amount: 22,
		  total_amount: 24.2
		}
		console.log(data)
		this.$http.post('/api/purchases', data)
			.then(response => {
				console.log(response)
			});
	}

}

angular.module('offPaperApp')
  .component('shop', {
    templateUrl: 'app/shop/shop.html',
    controller: ShopComponent
  });

})();
