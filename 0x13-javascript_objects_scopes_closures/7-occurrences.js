#!/usr/bin/node

// print number of occurences

exports.nb0ccurences = function (list, searchElement) {
  let numOccurrences = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === searchElement) {
      numOccurrences++;
    }
  }
  return numOccurrences;
};
