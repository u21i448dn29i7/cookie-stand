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

(function() {

  var stores = [storeNumber000,storeNumber001,storeNumber002,storeNumber003,storeNumber004];
  var salesForecastListDivId = document.getElementById('salesForecastList');

  for (var s = 0; s < stores.length; s++) {
    stores[s].forecastCookieSales();

    var ul = salesForecastListDivId.appendChild(document.createElement('ul'));
    ul.appendChild(document.createTextNode(stores[s].storeLocation));
    ul.setAttribute('id', stores[s].storeLocation);

    for (var h = 0; h < hoursOfOperations.length; h++) {
      var appendToUl = document.getElementById(stores[s].storeLocation);
      var li = appendToUl.appendChild(document.createElement('li'));
      li.appendChild(document.createTextNode(hoursOfOperations[h] + ': ' + stores[s].cookieSalesForecast[h][1] + ' cookies'));
    }
  }
}());

