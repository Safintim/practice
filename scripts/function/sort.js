/**
 * Created by Тимур on 29.10.2015.
 */
"use strict";

function byField(field) {

  return function (a, b) {
    return a[field] > b[field] ? 1 : -1;
  };
}

var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];

users.sort(byField('name'));
users.forEach(function(user) {
  console.log( user.name );
}); // Вася, Маша, Петя
console.log('');
users.sort(byField('age'));
users.forEach(function(user) {
  console.log( user.name );
}); // Маша, Вася, Петя