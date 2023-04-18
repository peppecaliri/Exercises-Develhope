function sum(...args) {
  return args.reduce((a, b) => a + b);
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));
