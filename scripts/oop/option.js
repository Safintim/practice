/**
 * Created by Тимур on 10.11.2015.
 */
"use strict";


function Menu(options) {
  options = Object.create(options);
  options.width = options.width || 300;

  // возьмёт width из наследника
  console.log(options.width);

  // возьмёт height из исходного объекта
  console.log(options.height);
}
