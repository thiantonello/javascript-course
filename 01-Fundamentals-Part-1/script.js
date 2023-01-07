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


//----------------------------------------------
//Coding Challenge #1
//  Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

//  Tasks:
//  1. Store Mark's and John's mass and height in variables
//  2. Calculate both their BMIs using the formula (you can even implement both versions)
//  3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

//  Test data:
//  Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
//  Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// const markMass = 78
// const markHeight = 1.69

// const johnMass = 92
// const johnHeight = 1.95

const markMass = 95
const markHeight = 1.88

const johnMass = 85
const johnHeight = 1.76

const markBMI = markMass / markHeight ** 2
console.log(markBMI.toFixed(2))

const johnBMI = johnMass / (johnHeight * johnHeight)
console.log(johnBMI.toFixed(2))

const markHigherBMI = markBMI > johnBMI
console.log('Is Mark higher than John?', markHigherBMI)

*/
//----------------------------------------------
//Strings and Template Literals

function calculateAge(birthDate, otherDate) {
  birthDate = new Date(birthDate)
  otherDate = new Date(otherDate)

  var years = otherDate.getFullYear() - birthDate.getFullYear()

  if (
    otherDate.getMonth() < birthDate.getMonth() ||
    (otherDate.getMonth() == birthDate.getMonth() &&
      otherDate.getDate() < birthDate.getDate())
  ) {
    years--
  }

  return years
}

const firstName = 'Thiago'
const job = 'software developer'
const birthDate = '1996-03-28'
const currentYear = new Date()
const age = calculateAge(birthDate, currentYear)

const phrase = `My name is ${firstName}. I'm a ${job} and I was born in ${
  birthDate.split('-')[0]
}. I'm currently ${age} years old.
`
console.log(phrase)
console.log(phrase.replace(/\./g, '\n'))

console.log(
  'String \n\
with \n\
multiple \n\
lines'
)
//  same as bellow
console.log(`String
with
multiple
lines`)
