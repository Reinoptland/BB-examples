console.log('hello');

// Creating elements

// Steps:
// - create a new element 
// - store it in a variable
// - change some of its properties
// - "append" the new element on the page
//     - Select an existing element
//     - Append the new element to the existing one

// Create a new element 
// and check
console.log(document.createElement('h1'))

// Store it in a variable
const newTitle = document.createElement('h1')
console.log(newTitle);

// Change some of its properties
newTitle.innerText = "Born to be alive!"
console.log(newTitle);

// Select element
// Add id in HTML: <body id="content">
const content = document.getElementById("content")
console.log(content);

// Append the new element to the existing one
content.appendChild(newTitle)




