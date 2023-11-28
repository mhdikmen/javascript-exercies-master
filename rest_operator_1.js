const top7 = [
  "The Colosseum",
  "The Roman Forum",
  "The Vatican",
  "Trevi Fountain",
  "The Pantheon",
  "Piazza Venezia",
  "The Palatine Hill",
];
const [] = top7;
const [first, second, third, ...secondVisit] = top7;
console.log(first);
console.log(second);
console.log(third);
console.log(secondVisit);

function addTaxToPrices(taxRate, ...itemsBought) {
  return itemsBought.map((item) => taxRate * item);
}
let shoppingCart = addTaxToPrices(1.1, 46, 89, 35, 79);
console.log(shoppingCart); // [50.6, 97.9, 38.5, 86.9]
