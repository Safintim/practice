/**
 * Created by Тимур on 31.10.2015.
 */
var ladder = {
  step: 0,
  up: function() { // вверх по лестнице
    this.step++;
    return this;
  },
  down: function() { // вниз по лестнице
    this.step--;
    return this;
  },
  showStep: function() { // вывести текущую ступеньку
    console.log( this.step );
  }
};

//ladder.up();
//ladder.up();
//ladder.down();
//ladder.showStep(); // 1


ladder.up().up().down().up().down().showStep(); // 1