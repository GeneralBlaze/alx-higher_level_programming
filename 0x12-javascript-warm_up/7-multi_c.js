#!/usr/bin/node

const repeat = parseInt(process.argv[2]);

if (process.argv[2] === undefined || isNaN(process.argv[2])) {
  console.log('Missing number of Occurences');
} else {
  for (let i = 0; i < repeat; i++) {
    console.log("C is fun"); }
}
