(function() {
  'use strict';

  var leftpad = require('left-pad'),
    button = document.querySelector('#btnLeftPad'),
    cssButton = document.querySelector('#btnCss'),
    char = document.querySelector('#txtChar'),
    input = document.querySelector('#txtNumber'),
    number = document.querySelector('#numSpaces'),
    code = document.querySelector('#codeResult');

  init();

  function clickEvent() {
    code.innerHTML = leftpad(input.value, number.value, char.value);
  }

  function cssEvent() {
    require("./extCss.css");
  }

  function init() {
    number.addEventListener('keypress', numCheck);
    button.addEventListener('click', clickEvent);
    cssButton.addEventListener('click', cssEvent);
  }

  function numCheck(event) {
    if (!/\d/.test(event.key)) {
      event.preventDefault();
    }
  }
})();
