/**
 * Created by Тимур on 27.10.2015.
 */
//Пусть arr — массив строк.
//Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

function unique(arr) {
    var obj = {};

    for (var i = 0; i < strings.length; i++) {
        var str = arr[i];
        obj[str] = true;
    }
    return Object.keys(obj);


}

var strings = ["hi", "hi", "hare", "hare",
    "hare", "hare", "hi", "hi", "8-()"
];

console.log(unique(strings)); // кришна, харе, 8-()