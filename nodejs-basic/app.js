const coffee = require("./lib/coffee");
const { firstName, lastName } = require("./lib/user");
const http = require("http");

 
console.log(coffee);
console.log(firstName, lastName);

/**
 * node app.js
 *
 * output:
 * { name: 'Tubruk', price: 15000 }
 */