/**
 * Created by ����� on 11.11.2015.
 */
"use strict";

function Menu(state) {
  this._state = state || this.STATE_CLOSED;
}
Menu.prototype.STATE_OPEN = 1;
Menu.prototype.STATE_CLOSED = 0;

Menu.prototype.open = function() {
  this._state = this.STATE_OPEN;
};

Menu.prototype.close = function() {
  this._state = this.STATE_CLOSED;
};

Menu.prototype._stateAsString = function() {
  switch (this._state) {
    case this.STATE_OPEN:
      return '�������';

    case this.STATE_CLOSED:
      return '�������';
  }
};

Menu.prototype.showState = function() {
  alert(this._stateAsString());
};



function AnimatingMenu(options) {
  Menu.apply(this, arguments);
}
AnimatingMenu.prototype = Object.create(Menu.prototype);

AnimatingMenu.prototype.STATE_ANIMATING = 2;

AnimatingMenu.prototype.open = function() {
  var self = this;

  this._state = this.STATE_ANIMATING;

  this._timer = setTimeout(function() {
    Menu.prototype.open.call(self);
  }, 1000);
};

AnimatingMenu.prototype.close = function() {
  clearTimeout(this._timer);
  Menu.prototype.close.apply(this);
};

AnimatingMenu.prototype._stateAsString = function() {

  switch (this._state) {
    case this.STATE_ANIMATING:
      return '��������';

    default:
      return Menu.prototype._stateAsString.call(this);
  }
};

// ����, �������������..
var menu = new AnimatingMenu();

menu.showState(); // �������

menu.open();
menu.showState(); // ��������

setTimeout(function() { // ����� 1 �������
  menu.showState(); // �������

  menu.close();
  menu.showState(); // �������
}, 1000);