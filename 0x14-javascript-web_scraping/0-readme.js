#!/usr/bin/node
// script that prints the content of a file

const fs = require('fs');
const file = process.argv[2];

fs.readFile(file, 'utf-8', (error, content) => {
  if (error) {
    console.log(error);
  } else {
    console.log(content);
  }
});
