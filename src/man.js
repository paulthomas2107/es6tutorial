export default class ManClass {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log("Walking..." + this.name);
  }
}
