let printName = () => {
  let helloName = "Hello John";
  let inner = () => {
    console.log(helloName);
  };
  setTimeout(() => {
    inner();
  }, 1000);
};

printName();
