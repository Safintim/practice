/**
 * Created by Тимур on 29.10.2015.
 */
"use strict";

function sum(a) {
  return function (b){
    console.log( a + b );
  };
}

sum(1)(2);
sum(4)(-2);