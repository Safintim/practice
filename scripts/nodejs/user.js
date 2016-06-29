/**
 * Created by Тимур on 09.11.2015.
 */
//exports
//global
function User(name) {
  this.name = name;
}

User.prototype.hello = function (who) {
  console.log('Hello, ' + who.name);
};

console.log('user.js is required!');

exports.User = User;
global.User = User;