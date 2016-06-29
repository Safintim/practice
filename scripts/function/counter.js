/**
 * Created by Тимур on 29.10.2015.
 */
"use strict";
function makeCounter() {
  var currentCount = 1;

  return { // возвратим объект вместо функции
    getNext: function() {
      return currentCount++;
    },

    set: function(value) {
      currentCount = value;
    },

    reset: function() {
      currentCount = 1;
    }
  };
}

var counter = makeCounter();

alert( counter.getNext() ); // 1
alert( counter.getNext() ); // 2

counter.set(5);
alert( counter.getNext() ); // 5