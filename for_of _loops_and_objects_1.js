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

/*
get values of properties of object
const car3 = {
  speed: 300,
  color: "yellow",
};
console.log(Object.values(car3)); // [300, 'yellow']
*/

/*
get keys and values from object via Object.entries
const car4 = {
  speed: 400,
  color: "magenta",
};
console.log(Object.entries(car4));

for (const prop of Object.entries(car4)) {
  const key = prop[0];
  const value = prop[1];
  console.log(key, value);
}
*/

var clothingItem = {
  price: 50,
  color: "beige",
  material: "cotton",
  season: "autumn",
};

for (const key of Object.keys(clothingItem)) {
  console.log(key, ":", clothingItem[key]);
}

function testBracketsDynamicAccess() {
  var dynamicKey;
  if (Math.random() > 0.5) {
    dynamicKey = "speed";
  } else {
    dynamicKey = "color";
  }

  var drone = {
    speed: 15,
    color: "orange",
  };

  console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();
