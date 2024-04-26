class Circle {
  constructor(radius = 1.0, color = "red") {
    this.radius = radius;
    this.color = color;
  }

  getRadius() {
    return this.radius;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  toString() {
    return `Circle[radius=${this.radius}, color=${this.color}]`;
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

const myCircle = new Circle();
// Creates a circle with default radius (1.0) and color ("red")
console.log(myCircle.toString());
// Output: Circle[radius=1, color=red]
console.log("Area:", myCircle.getArea());
// Output: Area: 3.141592653589793
console.log("Circumference:", myCircle.getCircumference());
// Output: Circumference: 6.283185307179586

myCircle.setRadius(2.5);
// Sets the radius to 2.5
myCircle.setColor("blue");
// Sets the color to "blue"
console.log(myCircle.toString());
// Output: Circle[radius=2.5, color=blue]
