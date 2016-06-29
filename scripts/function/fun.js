/**
 * Created by Тимур on 29.10.2015.
 */
"use strict";
var a = 1;

function getFunc() {
  var a = 2;

  var func = new Function('', 'console.log(a)');

  return func;
}

getFunc()();