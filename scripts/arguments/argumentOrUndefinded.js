/**
 * Created by ����� on 28.10.2015.
 */
//��� � ������� �������� ������������� �������� �� undefined?

function f(x) {
    console.log(arguments.length ? 1 : 0);
}

f(undefined); // 1
f(); // 0