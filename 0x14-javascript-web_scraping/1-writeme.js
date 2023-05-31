#!/usr/bin/node
// script that writes a string to a file
// in js

const file = process.argv[2];
const string = process.argv[3];
const fs = require('fs');

fs.writeFile(file, string, 'utf-8', (error) => {
  if (error) {
    console.log(error);
  }
});
