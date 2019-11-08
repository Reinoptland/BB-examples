console.log('hello');

// User interactions and events

// Steps
// - Create an HTML element
// - define a javascript function (an event handler)
// - add an event listener to our HTML element, pass it the event handler
// - test
// - Make your event handler do something you want

// Create an HTML element
// In your HTML
// <button>CLICK ME</button>

// define a javascript function (to test first)
// This will be our ... event handler
// function greetPerson() {
//     console.log('I got clicked')
// }

// add an event listener to our HTML element, 
// pass it the event handler (in your html)
// <button onclick="greetPerson()">CLICK ME</button>

// test
// Click the button, check the console

// - Make your event handler do something you want
function greetPerson(person) {
    console.log('I got clicked')
    const greeting = document.createElement('h1')
    greeting.innerText = `Hello ${person}`
    const content = document.getElementById('content')
    content.appendChild(greeting)
}

// Get input
function getInput(){
    // console.log(document.getElementById('name'))

    // - select the input field
    const inputfield = document.getElementById('name')
    // - get the value from input field
    const name = inputfield.value
    console.log(name);
    // - call greetPerson with the name the user typed in
    greetPerson(name)
    
}

// Pitfall with getElementsByClassName

console.log(document.getElementsByClassName('greetBtn'))

const greetButtons = document.getElementsByClassName('greetBtn')

// will not work
// greetButtons.innerText = 'hihihi'

greetButtons[0].innerText = 'hihihi'



