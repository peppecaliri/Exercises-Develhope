const number = 15;

let myPromise = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve(number);
  } else {
    reject(number);
  }
});

myPromise
  .then((val) => console.log(val))
  .catch(() => console.error("Number is smaller than 10"));
