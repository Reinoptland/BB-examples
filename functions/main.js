// * Function syntax *

// keyword: function
// function name: greet
// parameters inside paranthesis (): person, age
// function body (a block): {}
// inside the function body: console.log()
// function call: greet()
// 

// start function declaration
function greet(person, age) {
    console.log('Hello Class')
}
// end function declaration

// greet()
// greet()
// greet()

// This code is hard to change

// console.log('Hello Class')
// console.log('Hello Class')
// console.log('Hello Class')

// * Function, y tho * 

// - Reuse blocks code -> call the function multiple times
// - Avoiding repetition -> repetition makes code hard to change
// - By giving function good names -> make the easier to read
// - Declare function, execute it later 
// - Publish function as a library 

// * Reusing Function, like a pro * 

// Parameters & Arguments:
// define a function with parameters
function congratulate(name, age){
    console.log(`Congratulations ${name}, you have become ${age}!`)
}

// pass in arguments when we call the function
congratulate('Rein', 32)
// the order matters
congratulate(32, 'Rein')

// Returning Values:

// Always console.logs, hard to reuse
// function bmi(heightInM, weightInKg){
//     console.log(weightInKg / (heightInM * heightInM))
// }

// returns the value, you can use it in many different ways
function bmi(heightInM, weightInKg){
    return weightInKg / (heightInM * heightInM)
}

// Value is returned from the function call, we assign it to a variable
const reinsBMI = bmi(1.79, 83)

console.log(reinsBMI)

// or console.log directly
console.log(bmi(1.79, 83))

// Alternate ways of declaring functions

// declare variable, assign it an anonymous function
// sayHi is the name of the function

const sayHi = function(){ 
    const hello = 'world'
    console.log('hi') 
    console.log('hi') 
    console.log('hi') 
    console.log('hi') 
    console.log('hi') 
}

sayHi()

// const sayHiArrow = () => {
//     console.log('I am an arrow function')
// }

// sayHiArrow()

// Function body is optional
// If you have no function body:
// - 1 function call
// - return 1 expression
const sayHiArrow = (name) => console.log('I am an arrow function ' + name)
const add = (number1, number2) => number1 + number2

sayHiArrow('Rein')

const four = add(2, 2)











