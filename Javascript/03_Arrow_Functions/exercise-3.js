const sum = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const log = function (value) {
  console.log(value);
};

/*  -------------------------------------------  */

let sum2 = (a, b) => a + b;
let subtract2 = (a, b) => a - b;
let multiply2 = (a, b) => a * b;
let divide2 = (a, b) => a / b;
let log2 = (value) => console.log(value);

log2(divide2(subtract2(multiply2(sum2(2, 4), sum2(5, 2)), 2), 5));
