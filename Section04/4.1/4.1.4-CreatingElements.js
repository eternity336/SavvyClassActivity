// create a new unordered list (ul) element
let ulist = document.createElement('ul');
// remove the paragraph element in the nav-bar
document.querySelector('.nav-bar > p').remove();
// add your new ul element to the nav-bar
document.querySelector('.nav-bar').appendChild(ulist);
// create two new list item (li) elements, and add some text to them
let li1 = document.createElement('li');
let li2 = document.createElement('li');
li1.textContent = "item1";
li2.textContent = "item2";
// add the li elements to the ul in the nav-bar
document.querySelector('.nav-bar > ul').appendChild(li1);
document.querySelector('.nav-bar > ul').appendChild(li2);
