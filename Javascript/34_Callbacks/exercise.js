let printAsyncName = (callback, nome) => {
  let func = setInterval(() => {
    callback();
  }, 1000);

  setTimeout(() => {
    clearInterval(func);
  }, 1000);

  let name = setInterval(() => {
    console.log(nome);
  }, 2000);

  setTimeout(() => {
    clearInterval(name);
  }, 2000);
};

let printHello = () => console.log("Hello");

printAsyncName(printHello, "Peppe");
