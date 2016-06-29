/**
 * Created by Тимур on 02.11.2015.
 */
"use strict";

function Article() {
  this.created = new Date();
  Article.counter++;
  Article.last = this.created;
}

Article.counter = 0;

Article.showStats = function () {
  console.log( 'Всего: ' + this.counter + ', Последняя: ' + this.last );
};

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)