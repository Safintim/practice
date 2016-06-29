/**
 * Created by Тимур on 03.11.2015.
 */
"use strict";

var timerId = setInterval(function(){
  console.log('hi');
}, 2000);

setTimeout(function(){
  clearInterval(timerId);
  console.log('bye');
}, 5000);
