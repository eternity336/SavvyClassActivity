/*
  3.2.3-Mutation#index.js
  ========================
*/

// us 'let' to assign values to 3 variables

let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};

console.log("before mutation x = " + x + ", y = " + y + " and z = " + z);

// reassign x, y, and z to FALSY values
x = null;
y = 0;
z = '';

// print x, y, and z
console.log("\n After mutation", x, y, z);

// us 'const' to assign values to 3 variables
const a = "name";
const b = [];
const c = {};

// print a, b, and c
console.log("\n Before mutation a, b, and c are ...", a, b, c);

// try to reassign a, b, and c to FALSY values
a = NaN;
b = false;
c = 0;

// using BRACKET NOTATION, assign a value to b
b[0] = 1;
console.log("\n b after mutation", b);

// using DOT NOTATION, assign a PROPERTY to c
c.good = "Time";
console.log("\n c after 1st mutation", c);

// using DOT NOTATION, assign a METHOD to c
c.greet = () => `Hello there!`;
console.log("\n c after 2nd mutation", c);

// using BRACKET NOTATION, call the method in c
console.log(c["greet"]());

// Bracket notation is horrible, this is simpler...
console.log("\n Simpler method call... ", c.greet());

// print a, b, and c again
console.log("\n a, b, and c after final mutations are ... ", a, b, c);

/*
  3.2.4-ReferenceAndValue.js
  =================================
*/

// comparing and passing by reference and value
// determine whether each log will print true or false

console.log(4 === 4);   // true

console.log("Hello, world" === "Hello, world");   // true

let x = false;
let y = x;
console.log("1st comparison... ", x === y);   // true

x = !x;
console.log("2nd comparison... ", x === y);   // false

console.log("Comparing like arrays... ", [1, 2, "c"] === [1, 2, "c"]);   // false

console.log("Comparing empty objects... ", {} === {});    // false

y = { id: 1 };
x = y;
console.log("3rd comparison... ", x === y);   // true
y.id += 1;
console.log("4th comparison... ", x.id === y.id);   // true