/**
 * Created by ����� on 03.11.2015.
 */
"use strict";

var leader = {
  name: "������� ��������"
};

var soldier = {
  name: "������"
};

// ��� ������� ��������� ���� �� �����!
leader.soldier = soldier;
soldier.leader = leader;

var team = [leader, soldier];

var str = JSON.stringify(team);
console.log(str);