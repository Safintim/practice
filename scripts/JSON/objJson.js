/**
 * Created by Тимур on 03.11.2015.
 */
"use strict";

var leader = {
  name: "Василий Иванович",
  age: 35
};

var str = JSON.stringify(leader);
console.log(str);
console.log('обратно');
console.log(JSON.parse(str));