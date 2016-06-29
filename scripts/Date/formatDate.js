/**
 * Created by Тимур on 28.10.2015.
 */
//Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг:
//
//Например:
//
//  var d = new Date(2014, 0, 30); // 30 января 2014
//alert( formatDate(d) ); // '30.01.14'
//P.S. Обратите внимание, ведущие нули должны присутствовать, то есть 1 января 2001 должно быть 01.01.01, а не 1.1.1.
"use strict";

function formatDate(d) {
  var year = d.getYear() - 100,
      month = d.getMonth() + 1,
      date = d.getDate();
  if(year < 10 ) {
    year = '0' + year;
  }
  if(month < 10 ) {
    month = '0' + month;
  }
  if (date < 10 ){
    date = '0' + date;
  }

  console.log(date + '.' + month + '.' + year );
}

var d = new Date(2000, 0, 30);
formatDate(d);