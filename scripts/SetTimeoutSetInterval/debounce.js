/**
 * Created by ����� on 08.11.2015.
 */
"use strict";

function f() {

}

var f = debounce(f, 1000);

f(1); // ���������� ����� ��
f(2); // �����

setTimeout( function() { f(3) }, 100); // ����� (������ ������ 100��)
setTimeout( function() { f(4) }, 1100); // ����������
setTimeout( function() { f(5) }, 1500); // �����