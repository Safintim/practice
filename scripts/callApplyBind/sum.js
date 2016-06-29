/**
 * Created by Тимур on 02.11.2015.
 */
"use strict";

function sumArgs() {

  //arguments.reduce = [].reduce;
  //var sum = arguments.reduce( function(a,b) {
  //  return a + b;
  //});
  //console.log(sum);

  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}
sumArgs(1, 2, 3);