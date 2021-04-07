// var -> function
// let  -> block
// const -> block cannot be reassigned
function sayHello() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

sayHello();

const x = 1;
// x  2; cannot reassign
console.log(x);

// objects
const person = {
  name: "Paul",
  walk: function () {},
  talk() {}, // dont need function
};

person.walk();
person.talk();
person["name"] = "Rory";

const targetMember = "name";
person[targetMember] = "Caitlin";

console.log(person);

// this
const dog = {
  name: "Barky",
  walk() {
    console.log(this);
  },
};

dog.walk();

const walk = dog.walk;
walk(); // gets window object - not what we want :)

// Binding this
const walk2 = dog.walk.bind(dog);
walk2();

const dog2 = dog;
dog2.name = "Woofy";
console.log(dog2.name);
dog2.walk();

// Arrow functions
// Old version
const square = function (number) {
  return number * number;
};
console.log(square(4));

// New version
const squareES6 = (number) => number * number;
console.log(squareES6(4));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

// Old
const activeJobs = jobs.filter(function (job) {
  return job.isActive;
});

// New
const activeJobs2 = jobs.filter((job) => job.isActive); // Active
const activeJobs3 = jobs.filter((job) => !job.isActive); // not active

console.log(activeJobs);
console.log(activeJobs2);
console.log(activeJobs3);

// Arrow functions and this
const human = {
  talk() {
    setTimeout(function () {
      console.log("this", this);
    }, 1000);
  },
};

human.talk();
