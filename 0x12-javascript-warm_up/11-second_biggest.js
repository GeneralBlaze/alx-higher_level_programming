#!/usr/bin/node

function secondLargest (num) {
  const max = Math.max(...num);
  let min = Math.min(...num);
  for (const i of num) {
    if (i > min && i < max) {
      min = i;
    }
  }
  return min;
}
const args = process.argv.slice(2);
if (args.length === 0 || args.length === 1) {
  console.log(0);
} else {
  console.log(secondLargest(args));
}
