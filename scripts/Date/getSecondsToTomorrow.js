/**
 * Created by Тимур on 28.10.2015.
 */
//Напишите функцию getSecondsToTomorrow() которая возвращает, сколько секунд осталось до завтра.
//Например, если сейчас 23:00, то:
//getSecondsToTomorrow() == 3600
//P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToTomorrow() {
  var now = new Date();
  var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  var diff = Math.round(tomorrow - now) / 1000;
  console.log(now);
  console.log(tomorrow);
  console.log(diff);
}

getSecondsToTomorrow();