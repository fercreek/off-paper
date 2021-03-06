'use strict';
(function(){

class ShopComponent {

  constructor($http, toaster) {
    this.$http = $http;
    this.toaster = toaster;
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
		let data = {
			products: this.products,
		  payment: "Cash",
		  tax: 2.2,
		  amount: 22,
		  total_amount: 24.2,
		  created_at: new Date,
			updated_at: new Date
		}

		this.$http.post('/api/purchases', data)
			.then(response => {
 				this.toaster.pop('success', "Compra realizada", "");
			});
	}

}

angular.module('offPaperApp')
  .component('shop', {
    templateUrl: 'app/shop/shop.html',
    controller: ShopComponent
  });

})();
