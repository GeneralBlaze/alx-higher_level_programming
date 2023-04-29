#!/usr/bin/node

exports.esrever = function (list) {
  if (list.length === 0) {
    return [];
  } else {
     return [list[list.length - 1], ...exports.esrever(list.slice(0, -1))];
  }
};
