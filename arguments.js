function add(a, b) {
  console.log(arguments);
  const param = [...arguments];
  console.log(param);
}

add(20, 5, 10, 30);
