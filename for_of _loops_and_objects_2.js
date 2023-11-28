//Advanced JavaScript Features
//for of loops and objects

//All JavaScript objects inherit properties and methods from a prototype.
const car = {
  engine: true,
  steering: true,
  speed: "slow",
};

const sportsCar = Object.create(car);

sportsCar.speed = "fast";

console.log("The sports Car object: ", sportsCar);

console.log("----- for-in is unreliable -----");

for (prop in sportsCar) {
  console.log(prop);
}

console.log("", "Iterating over object AND its prototype!");
console.log("for-of is reliable --- ");

for (prop of Object.keys(sportsCar)) {
  console.log(prop + ": " + sportsCar[prop]);
}

console.log("", "Iterating over object's OWN PROPERTIES only!");
