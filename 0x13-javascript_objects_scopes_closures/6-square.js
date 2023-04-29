#!/usr/bin/node

const SquareObj = require('./5-square');

class Square extends SquareObj {
  constructor (size) {
    super(size, size);
  }

  charPrint (c) {
    const firstRow = 'X'.repeat(this.width);
    if (c === undefined) {
      for (let i = 0; i < this.height; i++) {
        console.log(firstRow);
      }
    } else {
      const secondRow = c.repeat(this.width);
      for (let i = 0; i < this.height; i++) {
        console.log(secondRow);
      }
    }
  }
}

module.exports = Square;
