'use strict';
(function(){

class ShopComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('offPaperApp')
  .component('shop', {
    templateUrl: 'app/shop/shop.html',
    controller: ShopComponent
  });

})();
