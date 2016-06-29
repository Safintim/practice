/**
 * Created by Тимур on 09.11.2015.
 */
"use strict";

function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };
}

function CoffeeMachine(power, capacity) {
  // наследуем св-ва и методы от Machine
  Machine.apply(this, arguments);

  // приватная , для воды
  var waterAmount = 0;

  // const, приватная
  var WATER_HEAT_CAPACITY = 4200,
    self = this,
    //приват
    timerId;

  // время для готовки кофе
  function getBoilTime() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }
  // устан, кол-во воды
  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить больше, чем " + capacity);
    }

    waterAmount = amount;
  };
  // информ о кол-ве воды
  this.getWaterAmount = function() {
    return waterAmount;
  };

  // добав воды
  this.addWater = function(amount) {
    this.setWaterAmount(waterAmount + amount);
  };

  //информ о мощности
  this.getPower = function() {
    return power;
  };
  // сообщение о готовке
  function onReady() {
    console.log('Кофе готово!');
  }

  // новое сообщение о готовке
  this.setOnReady = function(newOnReady) {
    onReady = newOnReady;
  };

  // запустить кофеварку
  this.run = function() {
    if (!this._enabled) {
      throw new Error('Еще не включена');
    }
    timerId = setTimeout(function() {
      //if(!this._enabled) {
      //  this.stop();
      //}
      timerId = null;
      onReady();
    }, getBoilTime());
  };

  // остановить кофеварку
  this.stop = function() {
    clearTimeout(timerId);
  };

  // работает или нет
  this.isRunning = function() {
    return !!timerId;
  };

}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run(); // ...Кофе готов!
coffeeMachine.disable();



//this.waterAmount = function(amount) {
//
//  if(!arguments.length) return waterAmount;
//
//  if(amount < 0) {
//    throw new Error('Значение должно быть положительным');
//  }
//
//  if(amount > capacity) {
//    throw  new Error('Нельзя залить воды больше, чем ' + capacity);
//  }
//
//  waterAmount = amount;
//};
