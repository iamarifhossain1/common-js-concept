const name = "Arif Hossain";

if (true) {
  const data = 58;
  console.log(data, name);
  doMath(88, 12);
}

// console.log(data);

for (const num of [1, 2, 3, 4, 5, 6]) {
}

// Function Scope or Local Scope

function doMath(a, b) {
  console.log(a, b);
  const sum = a + b;
  const total = sum + 10;
  function doubleIt(x) {
    return x * 2;
  }
  console.log(doubleIt(450));
}
