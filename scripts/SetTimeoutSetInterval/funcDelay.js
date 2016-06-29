/**
 * Created by Тимур on 08.11.2015.
 */
"use strict";

function delay(f, ms) {
  //var timer = setTimeout(f, ms)
  //return f;

  return function () {
    var savedThis = this;
    var savedArgs = arguments;

    setTimeout(function () {
      f.apply(savedThis, savedArgs);
    }, ms);
  };
}

function f(x) {
  console.log( x );
}

var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд