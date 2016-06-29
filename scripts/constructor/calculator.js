/**
 * Created by Тимур on 02.11.2015.
 */

function Calculator() {
  var a = 0,
      b = 0;

  this.read = function() {
    a = +prompt('Первое число', a);
    b = +prompt('Второе число', b);
  };

  this.sum = function() {
    return a + b;
  };

  this.mul = function() {
    return a * b;
  };
}


var calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );