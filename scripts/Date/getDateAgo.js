/**
 * Created by Тимур on 28.10.2015.
 */
//Создайте функцию getDateAgo(date, days), которая возвращает число, которое было days дней назад от даты date.
//P.S. Важная деталь: в процессе вычислений функция не должна менять переданный ей объект date.

var date = new Date(2015, 0, 2);

function getDateAgo(date, days) {
  var newDate = new Date(date);

  newDate.setDate(newDate.getDate() - days);
  return newDate.getDate();

}

console.log( getDateAgo(date, 1) );
console.log( getDateAgo(date, 2) );
console.log( getDateAgo(date, 365) );
console.log( date);


