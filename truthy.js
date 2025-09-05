/**
 * Logical Not --> If the value is true, it will become false. If it’s false, it will become true.
 * Double Not --> If the value is false, using a single logical NOT (!) will make it true. If you add another logical NOT (!!), it will flip the value again, returning it to its original state as a Boolean.
 */

let data;
data = 0;
data = "";
data = " ";
data = "0";
data = false;
data = true;
data = null;
data = {};
data = [];
console.log("Value of Data:", data);

if (!data) {
  console.log("Value of data is truthy");
} else {
  console.log(data, "is falsy");
}
