/**
 * Created by “имур on 03.11.2015.
 */
"use strict";
/** вместо:
 var timerId = setInterval(function() {
  alert( "тик" );
}, 2000);
 */

var timerId = setTimeout(function tick() {
  alert( "тик" );
  timerId = setTimeout(tick, 2000);
}, 2000);

//–екурсивный setTimeout гарантирует паузу между вызовами, setInterval Ч нет.