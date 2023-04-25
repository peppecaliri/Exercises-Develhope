// Non ho capito bene la consegna, ho fatto l'esercizio in 2 modi diversi

let repeatHello = (callback) => {
  setInterval(() => {
    callback();
  }, 1000);
};

let sayHello = () => console.log("Hello");

/* ------------------------------------------------------------- */

let repeatHello2 = (callback) => {
  setInterval(() => {
    callback();
  }, 1000);

  let sayHello = () => console.log("Hello - 2");
  callback = sayHello;
};

repeatHello(sayHello);
repeatHello2();
