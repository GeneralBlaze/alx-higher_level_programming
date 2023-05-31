#!/usr/bin/node
// uses the star wars api to print out an episode name
// based on the argument entered in the terminal
// 

const api = 'https://swapi-api.alx-tools.com/api/films/';
const request = require('request');
const id = process.argv[2];

request.get(api + id, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log(JSON.parse(body).title);
});
