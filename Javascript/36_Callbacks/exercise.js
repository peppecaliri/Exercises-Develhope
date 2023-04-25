let repeatHello = (callback) => {
  let interval = setInterval(() => {
    callback();
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
  }, 5000);
};

let sayHello = () => console.log("Hello");

repeatHello(sayHello);
