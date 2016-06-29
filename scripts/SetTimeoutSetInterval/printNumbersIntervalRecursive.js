/**
 * Created by Тимур on 03.11.2015.
 */
"use strict";

function printNumbersInterval(){
  var i = 0;
  var timerId = setInterval(function () {
    console.log(i);
    if( i == 20) clearInterval(timerId);
    i++;
  }, 100);
}

printNumbersInterval();