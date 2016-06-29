/**
 * Created by Тимур on 28.10.2015.
 */
//Напишите функцию getSecondsToday() которая возвращает, сколько секунд прошло с начала сегодняшнего дня.
//
//  Например, если сейчас 10:00 и не было перехода на зимнее/летнее время, то:
//getSecondsToday() == 36000 // (3600 * 10)
//Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты

function getSecondsToday () {
  var now = new Date();

  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  var diff = now - today;

  console.log(Math.round(diff/1000));
}
getSecondsToday();