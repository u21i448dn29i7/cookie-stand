'use strict';

// hoursOfOperations are 6AM __to__ 8PM or 14 Hrs.
const hoursOfOperations = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
var stores = [];
const salesForecastTableId = document.getElementById('salesForecastTable');
var tableBody = salesForecastTableId.createTBody();

//////////////////////////////////////////////////////
// Constructor for a new store object. 
// new NewStore('string', 'string', num, num, num);
//
// Really, I just wanted to write "num, num, num" 
// SOMEWHERE in the code....
//
function NewStore(storeName, storeLocation, minSalesPerHour, maxSalesPerHour, avgCookiesPerSale, stores) {

  this.storeName = storeName;
  this.storeLocation = storeLocation;
  this.minSalesPerHour = minSalesPerHour;
  this.maxSalesPerHour = maxSalesPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.cookieSalesForecast = [];
  this.totalDailySales = 0;
  stores.push(this);

  this.forecastCookieSales = function () {
    var estimatedSales;
    var cookieSalesForecastPerHour;
    for (var i = 0; i < hoursOfOperations.length; i++) {
      estimatedSales = Math.ceil(Math.random()*(this.maxSalesPerHour-this.minSalesPerHour+1)+this.minSalesPerHour);
      console.log('estimatedSales for ' + this.storeLocation + ': ' + estimatedSales);
      cookieSalesForecastPerHour = Math.ceil(estimatedSales * this.avgCookiesPerSale);
      this.cookieSalesForecast.push([hoursOfOperations[i], cookieSalesForecastPerHour]);
      this.totalDailySales += cookieSalesForecastPerHour;
    }
  };

  // this is awful. view data in my constructor! the concerns! the concerns!
  this.renderCookieSalesForecast = function (tableBody) {
    var cell = 0;
    this.forecastCookieSales();

    var newRow = tableBody.insertRow();

    var newRow1Cell0 = newRow.insertCell(0);
    newRow1Cell0.appendChild(document.createTextNode(this.storeLocation));

    for (var r = 0; r < hoursOfOperations.length; r++) {
      cell = newRow.insertCell(r + 1);
      cell.appendChild(document.createTextNode(this.cookieSalesForecast[r][1]));
    }

    cell = newRow.insertCell(hoursOfOperations.length + 1);
    cell.appendChild(document.createTextNode(this.totalDailySales));
  };

}

//////////////////////////////////////////////////////
// Header row for the sales table. Accepts
// the Id of the html table as an input
//
var generateHeaderRow = function () {
  var cell = 0;

  const tableHead = salesForecastTableId.createTHead();
  tableHead.id = 'table-head';

  const headerRow = tableHead.insertRow(0);
  headerRow.insertCell(cell); // inserts an empty cell

  for (var i = 0; i < hoursOfOperations.length; i++) {
    // "i + 1" begins in the second column of the table
    cell = headerRow.insertCell(i + 1);
    cell.appendChild(document.createTextNode(hoursOfOperations[i]));
  }

  var headerTotalCell = headerRow.insertCell(hoursOfOperations.length + 1);
  headerTotalCell.appendChild(document.createTextNode('Daily Location Total'));

};

//////////////////////////////////////////////////////
// Footer row for the sales table. Accepts
// stores (so we can count stores and access
// daily totals) and the Id of the html table as
// an input
//
var generateFooterRow = function () {
  var cell = 0;

  if (document.getElementById('Totals')) {
    (document.getElementById('Totals')).remove();
  }

  const tableFoot = salesForecastTableId.createTFoot();
  const newRow = tableFoot.insertRow();
  newRow.id = 'Totals';

  const newRow1Cell0 = newRow.insertCell(0);
  newRow1Cell0.appendChild(document.createTextNode('Totals'));

  for (var i = 0; i < hoursOfOperations.length; i++) {
    var totalOfAllStoresHourly = 0;
    for (var s = 0; s < stores.length; s++) {
      totalOfAllStoresHourly += stores[s].cookieSalesForecast[i][1];
    }

    cell = newRow.insertCell(i + 1);
    cell.appendChild(document.createTextNode(totalOfAllStoresHourly));

  }

  var grandTotal = 0;
  for (s = 0; s < stores.length; s++) {
    grandTotal += stores[s].totalDailySales;
  }

  cell = newRow.insertCell(hoursOfOperations.length + 1);
  cell.appendChild(document.createTextNode(grandTotal));

};

//////////////////////////////////////////////////////
// Create submit event listener on the form
// and call addNewStoreFunc
//
var form = document.querySelector('form');
form.addEventListener('submit', function(e) {

  var storeName = form.elements.storeName.value;
  var storeLocation = form.elements.storeLocation.value;
  var minSalesPerHour = form.elements.minSalesPerHour.value;
  var maxSalesPerHour = form.elements.maxSalesPerHour.value;
  var avgCookiesPerSale = form.elements.avgCookiesPerSale.value;

  addNewStore(storeName, storeLocation, minSalesPerHour, maxSalesPerHour, avgCookiesPerSale);

  e.preventDefault();

});

function addNewStore(storeName, storeLocation, minSalesPerHour, maxSalesPerHour, avgCookiesPerSale) {
  new NewStore(storeName, storeLocation, minSalesPerHour, maxSalesPerHour, avgCookiesPerSale, stores);

  console.log('avgCookiesPerSale from button e: ' + avgCookiesPerSale);

  stores[stores.length - 1].renderCookieSalesForecast(tableBody);
  generateFooterRow();
}


(function () {
  generateHeaderRow();

  for (var i = 0; i < stores.length; i++) {
    stores[i].renderCookieSalesForecast(tableBody);
  }

  // Init starting stores including the footer in each.
  // It's wasteful because of the .remove() on the table footer, but it's
  // effective for adding new rows and recalculating the footer each time.
  addNewStore('King', '1st and Pike', 23, 65, 6.3, stores);
  addNewStore('Sockeye', 'SeaTac Airport', 3, 24, 1.2, stores);
  addNewStore('Coho', 'Seattle Center', 11, 38, 3.7, stores);
  addNewStore('Pink', 'Capitol Hill', 20, 38, 2.3, stores);
  addNewStore('Chum', 'Alki', 2, 16, 4.6, stores);

}());

