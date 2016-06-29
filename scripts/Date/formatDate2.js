/**
 * Created by Тимур on 28.10.2015.
 */
"use strict";
//Напишите функцию formatDate(date), которая форматирует дату date так:
//
//  Если со времени date прошло менее секунды, то возвращает "только что".
//  Иначе если со времени date прошло менее минуты, то "n сек. назад".
//  Иначе если прошло меньше часа, то "m мин. назад".
//  Иначе полная дата в формате "дд.мм.гг чч:мм".

function formatDate(date) {
  var diff = new Date() - date;

  if(diff < 1000) {
    return 'Только что' ;
  }

  var sec = Math.floor(diff/1000);
  if (sec < 60) {
    return ( sec + ' n сек. назад');
  }

  var min = Math.floor(diff/60000);
  if (min < 60) {
    return (min + ' m мин. назад');
  }

  var d = date;
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
  ];
  for (var i = 0; i < d.length; i++) {
    d[i] = d[i].slice(-2);
  }

  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');

}

formatDate(new Date(new Date - 1));
formatDate(new Date(new Date - 30 * 1000));
formatDate(new Date(new Date - 5 * 60 * 1000));
formatDate(new Date(new Date - 86400 * 1000));