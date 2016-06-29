/**
 * Created by Тимур on 28.10.2015.
 */
//Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.
//  День нужно возвратить в европейской нумерации,
// т.е. понедельник имеет номер 1, вторник номер 2, …, воскресенье – номер 7.

function getLocalDay(date) {
  var day = date.getDay();

  if(day === 0){
    day = 7;
  }

  return day
}

var date = new Date(2015, 10, 1);
console.log( getLocalDay(date) );
