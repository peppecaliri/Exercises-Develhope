class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set changeName(newName) {
    this.firstName = newName;
  }

  get greetName() {
    return `Hi ${this.firstName}`;
  }

  get getLastName() {
    return `${this.firstName}'s last name is ${this.lastName}`;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
console.log(person.greetName);
