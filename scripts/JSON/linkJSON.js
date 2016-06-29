/**
 * Created by Тимур on 03.11.2015.
 */
"use strict";

var leader = {
  name: "Василий Иванович"
};

var soldier = {
  name: "Петька"
};

// эти объекты ссылаются друг на друга!
leader.soldier = soldier;
soldier.leader = leader;

var team = [leader, soldier];

var str = JSON.stringify(team);
console.log(str);