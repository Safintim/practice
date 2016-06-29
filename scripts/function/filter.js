/**
 * Created by Тимур on 29.10.2015.
 */
"use strict";

/* .. ваш код для filter, inBetween, inArray */
function filter(arr, func) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var value = arr[i];
    if(func(value)) {
      result.push(value);
    }
  }
  console.log(result);
}

function inBetween(a, b) {

  return function(x) {
    return x >= a && x <= b;
  };
}

function inArray(massive) {

  return function (x) {
    return massive.indexOf(x) != -1;
  }
}

var arr = [1, 2, 3, 4, 5, 6, 7];

console.log(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6
console.log();
console.log( filter(arr, inBetween(3, 6)) ); // 3,4,5,6
console.log();
console.log( filter(arr, inArray([1, 2, 10])) ); // 1,2