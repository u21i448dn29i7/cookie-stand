'use strict';

// hoursOfOperations are 6AM __to__ 8PM or 14 Hrs.
var hoursOfOperations = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
var stores = [];

//////////////////////////////////////////////////////
// Constructor for a new store object. 
// new NewStore('string', 'string', num, num, num);
//
// Really, I just wanted to write "num, num, num" 
// SOMEWHERE in the code....
//
function NewStore(storeName, storeLocation, minSalesPerHour, maxSalesPerHour, avgCookiesPerSale) {

  this.storeName = storeName;
  this.storeLocation = storeLocation;
  this.minSalesPerHour = minSalesPerHour;
  this.maxSalesPerHour = maxSalesPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.cookieSalesForecast = [];
  this.totalDailySales = 0;

  this.forecastCookieSales = function () {
    var estimatedSales;
    var cookieSalesForecastPerHour;
    for (var i = 0; i < hoursOfOperations.length; i++) {
      estimatedSales = Math.floor(Math.random() * (this.maxSalesPerHour - this.minSalesPerHour + 1)) + this.minSalesPerHour;
      cookieSalesForecastPerHour = Math.ceil(estimatedSales * this.avgCookiesPerSale);
      this.cookieSalesForecast.push([hoursOfOperations[i], cookieSalesForecastPerHour]);
      this.totalDailySales += cookieSalesForecastPerHour;
    }
  };

  // this is awful. view data in my constructor! the concerns! the concerns!   
  this.renderCookieSalesForecast = function (salesForecastTableId) {
    var cell = 0;
    this.forecastCookieSales();

    var newRow = salesForecastTableId.insertRow();

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
var generateHeaderRow = function (salesForecastTableId) {
  var cell = 0;

  var headerRow = salesForecastTableId.insertRow(0);
  headerRow.insertCell(cell);  // inserts an empty cell
 
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
var generateFooterRow = function (salesForecastTableId) {
  var cell = 0;

  var newRow = salesForecastTableId.insertRow();
  newRow.id = 'Totals';

  var newRow1Cell0 = newRow.insertCell(0);
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
// Generate all the store objects.
//
(function () {
  stores.push(new NewStore('King', '1st and Pike', 23, 65, 6.3));
  stores.push(new NewStore('Sockeye', 'SeaTac Airport', 3, 24, 1.2));
  stores.push(new NewStore('Coho', 'Seattle Center', 11, 38, 3.7));
  stores.push(new NewStore('Pink', 'Capitol Hill', 20, 38, 2.3));
  stores.push(new NewStore('Chum', 'Alki', 2, 16, 4.6));
}());


(function () {
  var salesForecastTableId = document.getElementById('salesForecastTable');

  generateHeaderRow(salesForecastTableId);

  for (var i = 0; i < stores.length; i++) {
    stores[i].renderCookieSalesForecast(salesForecastTableId);
  }

  generateFooterRow(salesForecastTableId);
}());
