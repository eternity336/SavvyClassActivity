// bracket and dot notation
const key = "1";
const obj = {
  key: console.log("the key is 'key'"),
  1: console.log("the key is 1"),
};

// what will the following lines print?
// obj[key];   // Won't work undefined
// obj.key;    // Won't work undefined
// obj["key"]; // Won't work undefined

// Create an object with at least four properties, each with a different data type.
// Name one of the four properties "collection" and set its value to an Array or Object.
const col = {
  old_enough: true,
  name: "James",
  age: 25,
  collection: ['basketball','football']
}
// Access a value in the "collection" property
console.log(col.collection[1]);
// Practice with nested Arrays and Objects
const keys = ["key", "1", "method", "favorites", "list"];

// Add a method to an Object
obj.method = function() {
  return "the key is 'method' and it calls refers to a function";
};
console.log(obj.method())
// Fill in your favorite movie, number and color below
obj["favorites"] = {
  movie: "Star Wars",
  number: 5,
  color: "blue"
};

// Add a list (a.k.a array) to an Object
obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];

// Using the 'for...in' loop to iterate over 'obj' object ...
// how many lines will the following statement print?
// what do you expect to see on each line?
for (let key in keys) {  // 5 Lines it will show the index and value but value is not defined
  console.log(`Key is: ${key} and value is: ${obj[key]}`);
}

// Use a template literal to print a sentence about your favorite things
console.log(`My favorite movie is ${obj["favorites"].movie}`);
// Access the values "b", 4, and 6 from obj.list
console.log(obj.list[1], obj.list[4][1], obj.list[5].f)
