class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(obj) {
    if (obj instanceof Square) {
      return obj.side * obj.side;
    } else if (obj instanceof Rectangle) {
      return obj.height * obj.width;
    } else if (obj instanceof Circle) {
      return obj.radius * obj.radius * Math.PI;
    } else {
      console.log("Insert a correct class");
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
