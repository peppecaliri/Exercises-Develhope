const user = {
  id: 1,
  name: "John",
  age: 25,
};

let storage = (obj) => {
  localStorage.setItem("id", user.id);
};
