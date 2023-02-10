// create an Array using an Array literal
let a = [1,2,3,4,5,6];
// access the 1st item in the Array
console.log(a[0]);
// access the last item in the Array
console.log(a[5]);
// print the length of the Array
console.log(a.length);
// use the length property to access the last item in the Array
console.log(a[a.length-1]);
// with for...of, loop over the Array, modify the value and add to a different Array
let b  = [];
for (let item of a) {
    b.push(item + 1);
};
console.log(b);

for (let item of a) {
    if (item === 2){
        a[item] = 99
        console.log(a[item], item)
    }else{
        console.log(a[item], item)
    }
};
console.log(a)

