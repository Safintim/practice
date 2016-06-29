/**
 * Created by Тимур on 10.11.2015.
 */
"use strict";

function Watch(options) {
  this._template = options.template;
}

Watch.prototype._render = function() {
  var date = new Date();

  var hours = date.getHours();
  if(hours < 10) hours = '0' + hours;

  var min = date.getMinutes();
  if(min < 10) min = '0' + min;

  var sec = date.getSeconds();
  if(sec < 10) sec = '0' + sec;

  var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

  console.log(output);
};


Watch.prototype.stop = function () {
  clearInterval(this._timer);
};

Watch.prototype.start = function () {
  this._render();
  var self = this;
  this._timer = setInterval(function() {
    self._render();
  }, 1000);
};

var clock = new Watch({
  template: 'h:m:s'
});
clock.start();