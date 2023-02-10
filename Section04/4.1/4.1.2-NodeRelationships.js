// select the root node
let root = document.querySelector("html");
console.log(root);
// select the last child of the root node
console.log(root.lastElementChild);
// select all the children of the body element
let body = document.querySelector('body');
console.log(body.children);
// select the next sibling of the h2 node
let h2 = document.querySelector('h2');
console.log(h2.nextElementSibling);
// select the parent element of the h1 node
let h1 = document.querySelector('h1');
console.log(h1.parentElement);