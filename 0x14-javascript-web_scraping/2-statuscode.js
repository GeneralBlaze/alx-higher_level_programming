#!/usr/bin/node
// Displays the status code of a GET request
// in js

const request = require('request');
const url = process.argv[2];

request.get(url, (error, response) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log('code: ' + response.statusCode);
});
