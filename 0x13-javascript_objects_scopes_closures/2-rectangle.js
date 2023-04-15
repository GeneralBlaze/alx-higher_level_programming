#!/usr/bin/node

// class with constructor

class Rectangle {
  constructor (w, h) {
    this.width = w;
    this.height = h;

    if (w > 0 && h > 0) {
      this.width = w;
      this.height = w;
    }
  }
}
module.exports = Rectangle;
