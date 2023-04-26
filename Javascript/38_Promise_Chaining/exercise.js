const isLogged = true;

function firstPromise(result) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isLogged === true) {
        result = Math.random();
        resolve(result);
      } else {
        reject(new Error());
      }
    }, 500);
  });
}

function secondPromise(result) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (result > 0.5) {
        resolve(`{name: "John", age: 24}`);
      } else {
        reject(new Error("Number is smaller than 0.5"));
      }
    }, 1000);
  });
}

firstPromise()
  .then(secondPromise)
  .then((val) => console.log(val));
