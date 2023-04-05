const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon";

console.log(person1);
console.log(person2);

/* By writing const person2 = person1, we are creating a copy that is strictly related and linked to person1, so that every change will take place in both objects,
to resolve this, we should first create a separate clone, example: Object.assign({}, person1) and then assign the value that we want.*/
