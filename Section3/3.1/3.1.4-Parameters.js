// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function new_function(var1, var2){
    console.log("Var1", var1);
    console.log("Var2", var2);
    return var1 + var2;
};

// invoke the function and pass in two numbers
console.log(new_function(1, 2));

// invoke the function and pass in more than two numbers
console.log(new_function(1, 2, 3));

// invoke the function and pass in only one number
console.log(new_function(1));

// change the function to set default values for the parameters
function new_function(var1 = 1, var2 = 1){
    console.log("Var1", var1);
    console.log("Var2", var2);
    return var1 + var2;
};

// again, invoke the function and pass in only one number
console.log(new_function(2));

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function new_function(var1 = 1, var2 = 1, ...theRest){
    console.log("Var1", var1);
    console.log("Var2", var2);
    console.log("theRest", theRest);
    return var1 + var2;
};

// again, invoke the function and pass in more than two numbers
console.log(new_function(1, 2, 3));
