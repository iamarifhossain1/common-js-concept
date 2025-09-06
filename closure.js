// function counter() {
//   let count = 0;
//   const numbers = [];
//   const people = {};
//   function innerFunction() {
//     console.log("inside the inner function someone called me");
//   }
//   return innerFunction;
// }

// const output = counter();
// console.log(output());

function anotherCounter() {
  let count = 10;
  return function (user) {
    count = count + 1;
    console.log("inside the inner function", user, count);
  };
}

// const innerFunc = anotherCounter();
// innerFunc();
// innerFunc();
// innerFunc();

const arifCounter = anotherCounter();

arifCounter("Arif");
arifCounter("Arif");
arifCounter("Arif");
arifCounter("Arif");
console.log("---------------------");
const karimCounter = anotherCounter();
karimCounter("Karim");
arifCounter("Arif");

const jabberCounter = anotherCounter();
jabberCounter("Jabber");
karimCounter("Karim");
