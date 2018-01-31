'use strict';

const btnSaveAndContinue = document.getElementById('saveAndContinue');
const btnSaveAndExit = document.getElementById('saveAndExit');

var whichButtonDivId = document.getElementById('whichButton');
var appendToUl = whichButtonDivId.appendChild(document.createElement('ul'));
appendToUl.appendChild(document.createTextNode("Which button was clicked?"));


btnSaveAndContinue.addEventListener('click', function (event) {
  event.preventDefault();    // just do it, but why?
  var liElement = appendToUl.appendChild(document.createElement('li'));
  liElement.appendChild(document.createTextNode("save and continue was clicked."));
});
    
btnSaveAndExit.addEventListener('click', function (event) {
  event.preventDefault();   // just do it, but why?
  var liElement = appendToUl.appendChild(document.createElement('li'));
  liElement.appendChild(document.createTextNode("save and exit was clicked."));
});

