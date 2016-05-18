'use strict';
(function(){

class TicketDetailComponent {
  constructor($http, $stateParams) {
  	this.$stateParams = $stateParams;
  	this.$http = $http;
  	this.purchase = {};
  	this.products = [];
  }

	$onInit() {
	  this.$http.get('/api/purchases/' + this.$stateParams.id)
	    .then(response => {
	      this.purchase = response.data;

	      this.purchase.products.forEach( (element, index) => {
	      	this.$http.get('/api/products/' + element)
	      		.then(res => {
	      			this.products.push(res.data);
	      		});

	      });
	    });
	}

}

angular.module('offPaperApp')
  .component('ticketDetail', {
    templateUrl: 'app/ticket-detail/ticket-detail.html',
    controller: TicketDetailComponent
  });

})();
