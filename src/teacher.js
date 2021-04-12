import { ManClass } from "./man";

export class Teacher extends ManClass {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("I Teach..." + this.degree);
  }
}
