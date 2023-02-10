const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
let f_index_a = arr.indexOf('a');
let f_index_b = arr.indexOf('b');
let f_index_c = arr.indexOf('c');

// find the last index of "a", "b", and "c"
let f_last_index_a = arr.lastIndexOf('a');
let f_last_index_b = arr.lastIndexOf('b');
let f_last_index_c = arr.lastIndexOf('c');

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"

while (f_index_a != f_last_index_a){
    console.log(f_last_index_a);
    arr.splice(f_last_index_a,1);
    f_last_index_a = arr.lastIndexOf('a');
}

console.log(arr)