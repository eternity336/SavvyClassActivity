// print the outer HTML of the navigation bar
console.log(document.querySelector('.nav-bar').outerHTML)
// print the inner HTML of the navigation bar
console.log(document.querySelector('.nav-bar').innerHTML)
// print the text content of the #class-schedule-list element
console.log(document.querySelector('#class-schedule-list').textContent)
classlist = document.querySelector('#class-schedule-list').childNodes
// select the classList for the first class-week, then add the class "week-1"
// select the img element and add a src attribute
document.querySelector('#dog-picture').src = 'http://cdn.akc.org/content/article-body-image/samoyed_puppy_dog_pictures.jpg'
// change the font color of the h1 element
document.querySelector('h1').style.color = 'blue';