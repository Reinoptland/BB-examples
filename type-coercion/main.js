// add numbers: + is addition 
const four = 2 + 2

// console.log(four) // 4

// adding strings (concatenation)
const greeting = 'hello ' + 'world'

// console.log(greeting) // hello world

// using + operator with 2 different datatypes
// in this example js turns 2 into a string 
// and concatenates '2' and 'cheese'
// this is "type coercion"
const nonsense = 2 + '2'

// console.log(nonsense)

// type coercion can give you unexpected results
// convert your data into the correct datatype first:

const number1 = 2
const number2 = '2'
const convertedNumber2 = parseInt(number2)

console.log(number1 + number2) // wrong 22
console.log(number1 + convertedNumber2) // 4

// const evenMoreNonsense = 15 / undefined

// console.log(evenMoreNonsense)

// if you convert empty string : ''
// into a boolean
// will be true or false
const input = []

// input gets coerced into true or false
if(input.length !== 0){
    console.log('We have some input')
} else {
    console.log('No input');
}

const same = '2' === 2




