/**
 * Created by Тимур on 29.10.2015.
 */
//В некоторых языках программирования существует объект «строковый буфер»,
// который аккумулирует внутри себя значения. Его функционал состоит из двух возможностей:
//
//  Добавить значение в буфер.
//  Получить текущее содержимое.
//  Задача — реализовать строковый буфер на функциях в JavaScript, со следующим синтаксисом:
//
//Создание объекта: var buffer = makeBuffer();.
//Вызов makeBuffer должен возвращать такую функцию buffer,
// которая при вызове buffer(value) добавляет значение в некоторое внутреннее хранилище,
// а при вызове без аргументов buffer() — возвращает его.
"use strict";

function makeBuffer() {
  var text = '';
  function buffer(value) {
    if(arguments.length == 0) {
      return text;
    }
    text += value;
  };

  buffer.clear = function() {
    text = "";
  };

  return buffer;
}

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
console.log( buffer() ); // Замыкания Использовать Нужно!
buffer.clear();
console.log('clear');
console.log( buffer() );


function inBetween(a, b) {

  return function (value) {
    return value >= a && value <=b;
  }
}