//Working with arrays in JavaScript

//forEach method
const fruits = ["kiwi", "mango", "apple", "pear"];
function appendIndex(fruit, index) {
  console.log(`${index}. ${fruit}`);
}
fruits.forEach(appendIndex);

const veggies = ["onion", "garlic", "potato"];
veggies.forEach(function (veggie, index) {
  console.log(`${index}. ${veggie}`);
});

//filter method
const nums = [0, 10, 20, 30, 40, 50];
const filteredNums = nums.filter(function (num) {
  return num > 20;
});
console.log(filteredNums);

//The map method
const mappedArray = [0, 10, 20, 30, 40, 50].map(function (num) {
  return num / 10;
});
console.log(mappedArray);
