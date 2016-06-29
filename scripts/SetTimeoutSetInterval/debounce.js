/**
 * Created by Тимур on 08.11.2015.
 */
"use strict";

function f() {

}

var f = debounce(f, 1000);

f(1); // выполнится сразу же
f(2); // игнор

setTimeout( function() { f(3) }, 100); // игнор (прошло только 100мс)
setTimeout( function() { f(4) }, 1100); // выполнится
setTimeout( function() { f(5) }, 1500); // игнор