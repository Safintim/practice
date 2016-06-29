/**
 * Created by Тимур on 31.10.2015.
 */

var calculator = {
  a : 0,
  b : 0,

  read : function () {
    this.a = +prompt('первое число', this.a);
    this.b = +prompt('второе число', this.b);
  },

  sum: function () {
    return this.a + this.b;
  },

  mul : function () {
    return this.a * this.b;
  }

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );