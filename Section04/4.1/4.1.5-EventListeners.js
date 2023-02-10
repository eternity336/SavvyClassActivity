// add an event listener to the dog picture that listens for a "click" and gives an alert
document.querySelector("#dog-picture").addEventListener("click", () => console.log("Dog was clicked!"));

// add an event listener to the list items in the class schedule that listens for a "mouseover" event and changes its background color
document.querySelector("#class-schedule-list").addEventListener("mouseover", (event) => {
    if(event.fromElement.localName == "li"){
        event.target.style.backgroundColor = "red";
    }
    
});
document.querySelector("#class-schedule-list").addEventListener("mouseout", (event) => {
    if(event.fromElement.localName == "li"){
        event.target.style.backgroundColor = null;
    }
    
});
// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed
document.querySelector('html').addEventListener("keydown", (event) => (console.log(event.keyCode)));
