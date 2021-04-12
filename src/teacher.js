import ManClass from "./man";

export function promote() {
  console.log("I promote....");
}

export default class Teacher extends ManClass {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("I Teach..." + this.degree);
  }
}
