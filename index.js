// const { generateRandomNumber, celToFahr } = require("./utils");

// console.log(`Random Number: ${generateRandomNumber()}`);

// console.log(`Celcius to fahrenheit: ${celToFahr(0)}`);

import getPost, { getPostLength } from "./postController.js";

console.log(getPost());
console.log(`Post length: ${getPostLength()}`);
