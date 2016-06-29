/**
 * Created by Тимур on 28.10.2015.
 */
//Напишите функцию getLastDayOfMonth(year, month), которая возвращает последний день месяца.
//
//  Параметры:
//
//year — 4-значный год, например 2012.
//month — месяц от 0 до 11.
//Например, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

function getLastDayOfMonth(year, month) {
  var date = new Date(year, month + 1, 0);
  console.log(date.getDate());
}

getLastDayOfMonth(2015, 9);