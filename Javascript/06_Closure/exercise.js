let printName = () => {
  let helloName = "Hello John";
  let inner = () => {
    console.log(helloName);
  };
  inner();
};

printName();
