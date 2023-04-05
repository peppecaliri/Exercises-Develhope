const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

// Print values of person using Object.keys
console.log(Object.keys(person));

// To complete this exercise, a better solution is to use Object.entries, Object.keys only returns keys and not values
console.log(Object.entries(person));
