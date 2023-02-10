// comparing and passing by reference and value
// ? determine whether each log will print true or false

console.log(4 === 4); // true
console.log("Hello, world" === "Hello, world"); // true

let x = false;
let y = x;
console.log(x === y); // true
x = !x;
console.log(x === y); // false

console.log([1, 2, "c"] === [1, 2, "c"]); // true
console.log({} === {}); // true

y = { id: 1 };
x = y;
console.log(x === y); // true
y.id += 1;
console.log(x.id === y.id); // true
//console.log(x.id, y.id);