/**
 * Created by Тимур on 03.11.2015.
 */
"use strict";

//function printNumbersInterval(){
//  var i = 0;
//  var timerId = setTimeout(function num() {
//    console.log(i);
//    timerId = setTimeout(num, 200);
//    if( i == 20) clearTimeout(timerId);
//    i++;
//  }, 200);
//}
//printNumbersInterval();

function printNumbersTimeout20_100() {
  var i = 1;
  var timerId = setTimeout(function go() {
    console.log(i);
    if (i < 20) setTimeout(go, 100);
    i++;
  }, 100);
}

printNumbersTimeout20_100();