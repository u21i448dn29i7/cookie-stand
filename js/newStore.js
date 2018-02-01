'use strict';

const btnSaveAndContinue = document.getElementById('saveAndContinue');
// const btnSaveAndExit = document.getElementById('saveAndExit');

const whichButtonDivId = document.getElementById('whichButton');
const appendToUl = whichButtonDivId.appendChild(document.createElement('ul'));
appendToUl.appendChild(document.createTextNode('Which button was clicked?'));

btnSaveAndContinue.addEventListener('click', function (event) {
  event.preventDefault();    // just do it, but why?
  var storeName = document.getElementById('storeName').value;
  var storeLocationName = document.getElementById('storeLocation').value;
  var minSalesPerHour = document.getElementById('minSalesPerHour').value;
  var maxSalesPerHour = document.getElementById('maxSalesPerHour').value;
  var avgCookiesPerSale = document.getElementById('avgCookiesPerSale').value;

  // var liElement = appendToUl.appendChild(document.createElement('li'));
  // liElement.appendChild(document.createTextNode('Store name is: ' + storeName));
  // liElement.appendChild(document.createTextNode('Location is: ' + storeLocationName));


});
    
// btnSaveAndExit.addEventListener('click', function (event) {
//   event.preventDefault();   // just do it, but why?
//   var liElement = appendToUl.appendChild(document.createElement('li'));
//   liElement.appendChild(document.createTextNode("save and exit was clicked."));
// });

