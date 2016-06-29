/**
 * Created by Тимур on 10.11.2015.
 */
"use strict";

function CoffeeMachine(power) {
  this._waterAmount = 0;
  this._power = power;
}
CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;

CoffeeMachine.prototype._getTimeToBoil = function() {
  return this._waterAmount * this._WATER_HEAT_CAPACITY * 80 / this._power;
};
CoffeeMachine.prototype.run = function() {
  setTimeout(function() {
    console.log( 'Кофе готов!' );
  }, this._getTimeToBoil());
};

CoffeeMachine.prototype.setWaterAmount = function(amount) {
  this._waterAmount = amount;
};

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();