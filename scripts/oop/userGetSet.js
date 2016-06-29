/**
 * Created by Тимур on 10.11.2015.
 */
"use strict";

function User() {
  var firstName, surname;
  this.setFirstname = function (newFirstName) {
    firstName = name;
  };

  this.setSurname = function (newSurname) {
    surname = sur;
  }

  this.getFullName = function () {
    return firstName + ' ' + surname;
  }
}

var user = new User();
user.setFirstname('Петя');
user.setSurname('Иванов');

console.log(user.getFullName());