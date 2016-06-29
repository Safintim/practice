/**
 * Created by Тимур on 28.10.2015.
 */
//Как в функции отличить отсутствующий аргумент от undefined?

function f(x) {
    console.log(arguments.length ? 1 : 0);
}

f(undefined); // 1
f(); // 0