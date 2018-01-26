'use strict';

// hoursOfOperations are 6AM __to__ 8PM or 14 Hrs.
var hoursOfOperations = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
var salesForecastTableId = document.getElementById('salesForecastTable');

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

  // this is awful. the concerns (rendering vs. processing) should be separate.
  // this.renderCookieSalesForecast = function (rowId) {
  //  
  // }
}

var generateHeaderRow = function () {
  var cell = 0;
  // generate header row
  var headerRow = salesForecastTableId.insertRow(0);
  var headerCell0 = headerRow.insertCell(0);
  headerCell0.innerHTML = '';

  for (var h = 0; h < hoursOfOperations.length; h++) {
    // "h + 1" begins in the second column of the table
    cell = headerRow.insertCell(h + 1);
    cell.innerHTML = hoursOfOperations[h];
  }

  // add the totals column to the header row
  var headerTotalCell = headerRow.insertCell(hoursOfOperations.length + 1);
  headerTotalCell.innerHTML = 'Daily Location Total';

};

var generateSalesRows = function () {
  var cell = 0;

  // generate store rows
  var rowId = 1;
  for (var s = 0; s < stores.length; s++) {
    stores[s].forecastCookieSales();
    // use i + 1 to skip the header row at i = 0
    var storeRow = salesForecastTableId.insertRow(s + 1);
    storeRow.id = stores[s].storeLocation;

    var storeRow1Cell0 = storeRow.insertCell(0);
    storeRow1Cell0.innerHTML = stores[s].storeLocation;
    
    for (var r = 0; r < hoursOfOperations.length; r++) {
      cell = storeRow.insertCell(r + 1);
      cell.innerHTML = stores[s].cookieSalesForecast[r][1];
    }

    //add the per store total
    cell = storeRow.insertCell(hoursOfOperations.length + 1);
    cell.innerHTML = stores[s].totalDailySales;

    rowId += 1;
  }

  return rowId;

};

var generateFooterRow = function (rowId) {
  var cell = 0;

  // totals
  var totalsRow = salesForecastTableId.insertRow(rowId); //use last rowId for next row.
  var totalsRowCell0 = totalsRow.insertCell(0);
  totalsRowCell0.innerHTML = 'Totals';

  for (var t = 0; t < hoursOfOperations.length; t++) {
    var totalOfAllStoresHourly = 0;
    for (var s = 0; s < stores.length; s++) {
      totalOfAllStoresHourly += stores[s].cookieSalesForecast[t][1];
    }

    cell = totalsRow.insertCell(t + 1);
    cell.innerHTML = totalOfAllStoresHourly;
  }

  // sum the store daily totals
  var grandTotal = 0;
  for (s = 0; s < stores.length; s++) {
    grandTotal += stores[s].totalDailySales;
  }

  cell = totalsRow.insertCell(hoursOfOperations.length + 1);
  cell.innerHTML = grandTotal;
};

var stores = (function makeStore() {
  var stores = [];
  stores.push(new NewStore('King','1st and Pike', 23, 65, 6.3));
  stores.push(new NewStore('Sockeye','SeaTac Airport', 3, 24, 1.2));
  stores.push(new NewStore('Coho','Seattle Center', 11, 38, 3.7));
  stores.push(new NewStore('Pink','Capitol Hill', 20, 38, 2.3));
  stores.push(new NewStore('Chum','Alki', 2, 16, 4.6));
  return stores;
}());

(function () {
  generateHeaderRow();
  var rowId = generateSalesRows();
  generateFooterRow(rowId);
}());
