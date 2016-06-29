/**
 * Created by Тимур on 28.10.2015.
 */
//new Date(year, month, date, hours, minutes, seconds, ms)
var data = new Date( 2012, 1, 20, 3, 12);
console.log(data);
//Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате 'пн', 'вт', … 'вс'.

//function getWeekDay(date) {
//  var days = ['вс', 'пн','вт','ср','чт','пт','сб'];
//  console.log(days[date.getDay()]);
//}
//
//var date = new Date(2012, 0, 3);
//
//getWeekDay(date);

var date = new Date(2014, 0, 3); // 3 января 2014
console.log( date.toLocaleString('ru', {weekday: 'short'}) ); // 'Пт'