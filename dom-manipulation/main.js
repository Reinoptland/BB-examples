// Check if script is loaded
console.log('Hello');


// CHANGING EXISTING ELEMENTS

// Steps
// - Select the element we want to change
// - store it in a variable
// - Change it 

// Selecting element: 
// - give an id to the element you want to change (inside HTML)
//  <h1 id="big-title">Hello World</h1>

// Select the element we want to change
// - check if works
console.log(document.getElementById('big-title'))

// Store it in a variable
const title = document.getElementById('big-title')
console.log(title);

// Change it 

// Access a property:
console.log(title.innerText)
console.log(title.style)

// Reassign the property
title.innerText = "Hello Class"
title.style.color = "hotpink"



