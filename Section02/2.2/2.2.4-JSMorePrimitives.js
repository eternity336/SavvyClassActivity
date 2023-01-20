// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let var1 = 'Hello';
let var2 = true;
let var3 = 123;
let var4 = undefined;
let var5 = null;
// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof var1, typeof var3, typeof var2, typeof var4, typeof var5);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
let message = `${var1}, you are ${var3} days old!`;
// reassign the value of the variable that references "null"
var5 = "A good time!";
// print the value and its type
console.log(var5, typeof var5);
// print a variable that causes a ReferenceError
//console.log(var6);  The variable was never referenced so it throws a Reference Error
// alter the previous line to no longer cause a ReferenceError
let var6 = "fixed"
console.log(var6);
