/**
 * Created by Тимур on 10.11.2015.
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


function Fridge(power) {
  // унаследовать
  Machine.apply(this, arguments);

  // приватное свойство
  var food = [];

  // публичный метод
  this.addFood = function () {
    // если выключен, то нельзя добавить еду
    if(!this._enabled) throw new Error('Холодильник выключен');
    // если заполнен, то ошибка.
    if(food.length + arguments.length >= this._power/100) throw new Error('Холодильник полон');

    for(var i = 0; i < arguments.length; i++){
      // добавляем еду в холодильник
      food.push(arguments[i]);
    }
  };

  this.getFood = function () {
    // копируем свойство без возможности его модификаций
    return food.slice();
  };

  this.filterFood = function (filter) {
    return food.filter(filter);
  };

  this.removeFood = function (item) {
    var index = food.indexOf(item);
    if(index != -1) food.splice(index, 1);
  };

  var parentDisable = this.disable;
  this.disable = function () {
    if(food.length){
      throw new Error('в холодильнике есть еда');
    }
    parentDisable();
  }
}


var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
  title: "котлета",
  calories: 100
});
fridge.addFood({
  title: "сок",
  calories: 30
});
fridge.addFood({
  title: "зелень",
  calories: 10
});
fridge.addFood({
  title: "варенье",
  calories: 150
});

var dietItems = fridge.filterFood(function(item) {
  return item.calories < 50;
});

fridge.removeFood("нет такой еды"); // без эффекта
alert( fridge.getFood().length ); // 4

dietItems.forEach(function(item) {
  alert( item.title ); // сок, зелень
  fridge.removeFood(item);
});

alert( fridge.getFood().length ); // 2
alert(fridge.disable());