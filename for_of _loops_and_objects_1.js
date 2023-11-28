//Advanced JavaScript Features
//for of loops and objects

/*
const car = {
  speed: 100,
  color: "blue",
};

for (prop of car) {
  console.log(prop);
}

Uncaught TypeError: car is not iterable
*/

/*
loop over array
const colors = ["red", "orange", "yellow"];
for (var color of colors) {
  console.log(color);
}
*/

/*
get properties of object
const car2 = {
  speed: 200,
  color: "red",
};
console.log(Object.keys(car2)); // ['speed','color']
*/

const car3 = {
  speed: 300,
  color: "yellow",
};
console.log(Object.values(car3)); // [300, 'yellow']

const car4 = {
  speed: 400,
  color: "magenta",
};
console.log(Object.entries(car4));
