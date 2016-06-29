/**
 * Created by Тимур on 03.11.2015.
 */
"use strict";

//function formatDate(date) {
//  var year,month,day;
//  if(date.getTime) {
//
//      year = date.getYear() - 100,
//      month = date.getMonth() + 1,
//      day = date.getDate();
//
//  } else if(date.charAt) {
//
//      var split = date.split('-');
//      year = split[0].slice(-2);
//      month = split[1].slice();
//      day = split[2].slice(-1);
//
//  } else if(typeof date == 'number') {
//
  //      date = new Date(date * 1000);
//      year = date.getYear() - 100;
//      month = date.getMonth() + 1;
//      day = date.getDate();
//
//  } else if(Array.isArray(date)) {
//
//      year = ('' + date[0]).slice(-2);
//      month = date[1] + 1;
//      day = date[2];
//
//  }
//
//  if(year < 10 ) {
//    year = '0' + year;
//  }
//  if(month < 10 ) {
//    month = '0' + month;
//  }
//  if (day < 10 ){
//    day = '0' + day;
//  }
//
//  console.log(day + '.' + month + '.' + year );
//}


function formatDate(date) {
  if (date instanceof Date) {
    return date.toLocaleDateString()
  }
  if (typeof date == 'string') {
    return formatDate(new Date(Date.parse(date)))
  }
  if (typeof date == 'number') {
    return formatDate(new Date(date * 1000))
  }
  if (Array.isArray(date)) {
    return formatDate(new Date(date[0], date[1], date[2]))
  }
}

alert( formatDate('2011-10-02') ); // 02.10.11
alert( formatDate(1234567890) ); // 14.02.09
alert( formatDate([2014, 0, 1]) ); // 01.01.14
alert( formatDate(new Date(2014, 0, 1)) ); // 01.01.14