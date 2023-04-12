#!/usr/bin/node

function factorial (num) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
}

const arg1 = process.argv[2];
if (arg1) {
  const res = factorial(arg1);
  console.log(res);
} else if (isNaN) {
  console.log(1);
}
