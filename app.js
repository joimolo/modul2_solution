(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])

.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showToBuyList = this;

  showToBuyList.items = ShoppingListCheckOffService.getToBuyItems();

  showToBuyList.buyItem = function (itemIndex) {

    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showBoughtList = this;

  showBoughtList.items = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService() {
  var service = this;

  // List of to buy items
  var toBuyItems = [
    { name: "milk", quantity: 3 },
    { name: "yogurt", quantity: 5 },
    { name: "bread", quantity: 3 },
    { name: "bier", quantity: 3 },
    { name: "spaghety", quantity: 2 }
  ];

  // List of bought items
  var boughtItems = []

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

  service.buyItem = function (itemIndex){
    boughtItems.push(toBuyItems[itemIndex]);
    toBuyItems.splice(itemIndex,1);
  }

}
})();
