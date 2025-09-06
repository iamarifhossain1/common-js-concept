// All primitive values (number, string, boolean) always pass by value

function multiply(x, y) {
  x = x + 5;
  y = y + 5;
  const multi = x * y;
  return multi;
}

const a = 5;
const b = 7;
console.log("Before the function call", a, b);
const result = multiply(a, b);
console.log(result);
console.log("After the function call", a, b);

// non primitive values (object, array) are passed by reference
const manik = { name: "manik", balance: 5000 };
const roton = { name: "roton", balance: 40000 };

console.log("Before call", manik, roton);

function totalMoney(person1, person2) {
  person1.balance = 0;
  person2.balance = person2.balance / 2;
  const total = person1.balance + person2.balance;
  return total;
}

const balance = totalMoney(manik, roton);
console.log("Balance:", balance);

console.log("after function call", manik, roton);
