/**
 * Undefined --> Not Defined
 */

let money;
// console.log(money);

function total(a, b) {
  //   console.log("Value of Parameters", a, b);
  const sum = a + b;
  //   console.log("Total is:", sum);
}

// total(1);
const result = total(5, 8);
// console.log("Value of function", result);

function total2(a, b) {
  //   console.log("Value of Parameters", a, b);
  if (a === undefined || b === undefined) {
    return;
  }
  if (a && b) {
    const sum = a + b;
    return sum;
  }
  console.log("Total is:", sum);
}

const result2 = total2(1);
// console.log("Result:", result2);

const phones = { brand: "Samsung", price: 12000 };
// console.log(phones.color);

const banks = ["Sonali", "Rupali", "Jamuna"];
// console.log(banks[3]);
delete banks[1];
// console.log(banks[1]);

console.log(typeof undefined);
