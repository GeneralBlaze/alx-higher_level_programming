#!/usr/bin/node

// class with constructor

class Rectangle {

  constructor(w, h) {
    this.width = w;
    this.height = h;

    if (w > 0 && h > 0) {
      const obj = {};
    }

   print () {
    const forRows = 'X'.repeat(this.width);
    for (let i = 0; i < this.height; i++) {
      console.log(forRows);
    }
  }
  }

}
module.exports = Rectangle;
