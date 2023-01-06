let js = 'amazing'
if (js === 'amazing') alert('Javascript is fun!!')

/*
console.log(40 + 8 + 23 - 10)

console.log(js)


//----------------------------------------------
//Values and Variables
const country = 'Brasil'
const continent = 'America'
let population = 220_000_000

console.log(country)
console.log(continent)
console.log(population)


//----------------------------------------------
//Data Types
//  JavaScript has a dynamic typing: We do not have to manually define the data type of the value stored in a variable. They are defined automatically

//  It's important to notice that the variable does not have a type. The VALUE stored inside the variable has a type.

const isIsland = false
let language

console.log(typeof isIsland)
console.log(typeof population)
console.log(typeof country)
console.log(typeof language)

language = true
console.log('the type of the data stored in language is', typeof language)
language = 12312
console.log('the type of the data stored in language is', typeof language)

//
//  There are seven primitive data types:
//    Number      (always floating point numbers)
//    String      (sequence of characters)
//    Boolean     (logical type == true or false)
//    Undefined   (value taken by a variable that is not defined)
//    Null
//    Symbol      (value that is unique and cannot be changed)
//    BigInt      (larger integers than the Number type can hold)
//


//----------------------------------------------
//let, const and var
language = 'Portuguese'
console.log(language)

//  if we try to set isIsland = true, the code will not work because isIsland is a const
//  const variables always demand an initial value
//  const variables are, like the name suggests, constants. Their values cannot be changed. If we try to change a const variable we gonna get the following error:  Uncaught TypeError: Assignment to constant variable.
//
//  var declarations are global or function-scoped while let and const are block-scoped
//  var and let variables can be redeclared and updated


*/
//----------------------------------------------
//Basic Operators
let population = 220_000_000

//  Math operators
console.log(population / 2)
console.log(population + 1)
console.log(population > 6)
console.log(population < 33)

const current_year = new Date().getFullYear()
console.log('The current year is', current_year)

const ageThiago = current_year - 1996
const ageJonas = current_year - 1991
console.log(`Thiago has ${ageThiago} and Jonas has ${ageJonas} years old.`)

console.log(3 ** 2) // 3 to the power of 2 = 9

firstName = 'Thiago'
lastName = 'Antonello Vargas'
fullName = firstName + ' ' + lastName

console.log('My name is' + ' ' + firstName + ' ' + lastName)
//  same as:
//  console.log(`My name is ${firstName} ${lastName}`)
//  console.log('My name is', firstName, lastName)
//  console.log(`My name is ${fullName}`)

console.log(`I'm ${ageThiago} years old`)

//  Assignment operators
let x = 10 + 5 // 15
x += 10 // x = x + 10 = 25     only works because we used a let variable
x *= 4 // x = x * 4 = 100
x++ // x = x + 1 = 101
x-- // x = x - 1 = 100
x /= 2 // x = x / 2 = 50
console.log(x)

//  Comparison operators
console.log(ageThiago > ageJonas) // false
console.log(ageThiago >= 18) // true
console.log(ageThiago <= 18) // false

//  Operator precedence
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

//  Math operators are higher precedence than comparison operators and execute from left to right, except for the exponentiation operator (**) which has the highest precedence and executes from right to left

//  assignment operators have the lowest precedence and execute from right to left

let y, z
y = z = 25 - 10 - 5 // z = 10, y = 10
console.log(y, z)

const averageAge = (ageThiago + ageJonas) / 2
// without parenthesis, the code divide ageJonas by 2 and then add the result to ageThiago
console.log(averageAge)
