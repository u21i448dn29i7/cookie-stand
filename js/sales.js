'use strict';

// hoursOfOperations are 6AM __to__ 8PM or 14 Hrs.
var hoursOfOperations = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

// future constructor
var storeNumber000 = {
  storeName: 'King',
  storeLocation: '1st and Pike',
  minSalesPerHour: 23,
  maxSalesPerHour: 65,
  avgCookiesPerSale: 6.3,
  // storeGeo: ['lat','long'],
  // numEmployees: 2,
  // manager: 'Aero',
  cookieSalesForecast: [],
  totalDailySales: 0,
  forecastCookieSales: function () {
    // for (var i in hoursOfOperations) {
    var estimatedSales;
    var cookieSalesForecastPerHour;
    for (var i = 0; i < hoursOfOperations.length; i++ ) {
      estimatedSales = Math.floor(Math.random() * (this.maxSalesPerHour - this.minSalesPerHour + 1)) + this.minSalesPerHour;
    //   console.log('current hour: ' + hoursOfOperations[i]);
    //   console.log('estimated sales: ' + estimatedSales);
    //   console.log('current forecast: ' + Math.ceil(estimatedSales * this.avgCookiesPerSale));
      cookieSalesForecastPerHour = Math.ceil(estimatedSales * this.avgCookiesPerSale);
      this.cookieSalesForecast.push([hoursOfOperations[i],cookieSalesForecastPerHour]);
      this.totalDailySales += cookieSalesForecastPerHour;
    }
  }
};

var storeNumber001 = {
  storeName: 'Sockeye',
  storeLocation: 'SeaTac Airport',
  minSalesPerHour: 3,
  maxSalesPerHour: 24,
  avgCookiesPerSale: 1.2,
  cookieSalesForecast: [],
  totalDailySales: 0,
  forecastCookieSales: function () {
    // for (var i in hoursOfOperations) {
    var estimatedSales;
    var cookieSalesForecastPerHour;
    for (var i = 0; i < hoursOfOperations.length; i++ ) {
      estimatedSales = Math.floor(Math.random() * (this.maxSalesPerHour - this.minSalesPerHour + 1)) + this.minSalesPerHour;
    //   console.log('current hour: ' + hoursOfOperations[i]);
    //   console.log('estimated sales: ' + estimatedSales);
    //   console.log('current forecast: ' + Math.ceil(estimatedSales * this.avgCookiesPerSale));
      cookieSalesForecastPerHour = Math.ceil(estimatedSales * this.avgCookiesPerSale);
      this.cookieSalesForecast.push([hoursOfOperations[i],cookieSalesForecastPerHour]);
      this.totalDailySales += cookieSalesForecastPerHour;
    }
  }
};

var storeNumber002 = {
  storeName: 'Coho',
  storeLocation: 'Seattle Center',
  minSalesPerHour: 11,
  maxSalesPerHour: 38,
  avgCookiesPerSale: 3.7,
  cookieSalesForecast: [],
  totalDailySales: 0,
  forecastCookieSales: function () {
    var estimatedSales;
    var cookieSalesForecastPerHour;
    for (var i = 0; i < hoursOfOperations.length; i++ ) {
      estimatedSales = Math.floor(Math.random() * (this.maxSalesPerHour - this.minSalesPerHour + 1)) + this.minSalesPerHour;
      cookieSalesForecastPerHour = Math.ceil(estimatedSales * this.avgCookiesPerSale);
      this.cookieSalesForecast.push([hoursOfOperations[i],cookieSalesForecastPerHour]);
      this.totalDailySales += cookieSalesForecastPerHour;
    }
  }
};
  
  

var storeNumber003 = {
  storeName: 'Pink',
  storeLocation: 'Capitol Hill',
  minSalesPerHour: 20,
  maxSalesPerHour: 38,
  avgCookiesPerSale: 2.3,
  cookieSalesForecast: [],
  totalDailySales: 0,
  forecastCookieSales: function () {
    var estimatedSales;
    var cookieSalesForecastPerHour;
    for (var i = 0; i < hoursOfOperations.length; i++ ) {
      estimatedSales = Math.floor(Math.random() * (this.maxSalesPerHour - this.minSalesPerHour + 1)) + this.minSalesPerHour;
      cookieSalesForecastPerHour = Math.ceil(estimatedSales * this.avgCookiesPerSale);
      this.cookieSalesForecast.push([hoursOfOperations[i],cookieSalesForecastPerHour]);
      this.totalDailySales += cookieSalesForecastPerHour;
    }
  }
};

var storeNumber004 = {
  storeName: 'Chum',
  storeLocation: 'Alki',
  minSalesPerHour: 2,
  maxSalesPerHour: 16,
  avgCookiesPerSale: 4.6,
  cookieSalesForecast: [],
  totalDailySales: 0,
  forecastCookieSales: function () {
    var estimatedSales;
    var cookieSalesForecastPerHour;
    for (var i = 0; i < hoursOfOperations.length; i++ ) {
      estimatedSales = Math.floor(Math.random() * (this.maxSalesPerHour - this.minSalesPerHour + 1)) + this.minSalesPerHour;
      cookieSalesForecastPerHour = Math.ceil(estimatedSales * this.avgCookiesPerSale);
      this.cookieSalesForecast.push([hoursOfOperations[i],cookieSalesForecastPerHour]);
      this.totalDailySales += cookieSalesForecastPerHour;
    }
  }
};

var salesForecastTableId = document.getElementById('salesForecastTable');
var stores = [storeNumber000,storeNumber001,storeNumber002,storeNumber003,storeNumber004];
var cell = 0;

var generateHeaderRow = function() {

  // generate header row
  var headerRow = salesForecastTableId.insertRow(0);
  var headerCell0 = headerRow.insertCell(0);
  headerCell0.innerHTML = 'Store / Hour';

  for (var h = 0; h < hoursOfOperations.length; h++) {
    // "h + 1" begins in the second column of the table
    cell = headerRow.insertCell(h + 1);
    cell.innerHTML = hoursOfOperations[h];
  }

  // add the totals column to the header row
  var headerTotalCell = headerRow.insertCell(hoursOfOperations.length+1);
  headerTotalCell.innerHTML = 'Total';

};

var generateSalesRows = function() {

  // generate store rows
  var rowCount = 1;
  for (var s = 0; s < stores.length; s++ ) {
    stores[s].forecastCookieSales();
    // use i + 1 to skip the header row at i = 0
    var storeRow = salesForecastTableId.insertRow(s + 1);
    var storeRow1Cell0 = storeRow.insertCell(0);
    storeRow1Cell0.innerHTML = stores[s].storeLocation;

    for (var r = 0; r < hoursOfOperations.length; r++) {
      cell = storeRow.insertCell(r + 1);
      cell.innerHTML = stores[s].cookieSalesForecast[r][1];
    }

    //add the per store total
    cell = storeRow.insertCell(hoursOfOperations.length + 1);
    cell.innerHTML = stores[s].totalDailySales;

    rowCount += 1;
  }

  return rowCount;

};

var generateFooterRow = function (rowCount) {
  // totals
  var totalsRow = salesForecastTableId.insertRow(rowCount); //use last rowCount for next row.
  var totalsRowCell0 = totalsRow.insertCell(0);
  totalsRowCell0.innerHTML = 'Totals';

  for (var t = 0; t < hoursOfOperations.length; t++) {
    var totalOfAllStoresHourly = 0;
    for (var s = 0; s < stores.length; s++ ) {
      totalOfAllStoresHourly += stores[s].cookieSalesForecast[t][1];
    }
  
    cell = totalsRow.insertCell(t + 1);
    cell.innerHTML = totalOfAllStoresHourly;
  }
  
  // sum the store daily totals
  var grandTotal = 0;
  for (s = 0; s < stores.length; s++ ) {
    grandTotal += stores[s].totalDailySales;
  }

  cell = totalsRow.insertCell(hoursOfOperations.length + 1);
  cell.innerHTML = grandTotal;
};

var refreshCookieSalesForecast = (function() {
  generateHeaderRow();
  var rowCount = generateSalesRows();
  generateFooterRow(rowCount);
}());

