/**
 * Created by ����� on 03.11.2015.
 */
"use strict";
/** ������:
 var timerId = setInterval(function() {
  alert( "���" );
}, 2000);
 */

var timerId = setTimeout(function tick() {
  alert( "���" );
  timerId = setTimeout(tick, 2000);
}, 2000);

//����������� setTimeout ����������� ����� ����� ��������, setInterval � ���.