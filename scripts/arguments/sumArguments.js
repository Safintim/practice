/**
 * Created by Тимур on 28.10.2015.
 */

function sumArguments(){
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum +=arguments[i];
  }

  console.log(sum);
}

sumArguments() // 0
sumArguments(1) //1
sumArguments(1, 2) // 3
sumArguments(1, 2, 3) // 6
sumArguments(1, 2, 3, 4) // 10