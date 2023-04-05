function multiplyByTwo(value) {
  let number = 2;
  let inner = () => {
    return value * number;
  };
  return inner;
}

console.log(multiplyByTwo(4)());
