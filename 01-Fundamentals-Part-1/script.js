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


//----------------------------------------------
//Taking Decisions: if / else Statements

const age = 26
const person = 'Thiago'

function ableToDrive(age) {
  if (age >= 18) {
    return 'Yes'
  } else {
    return `No, ${person} is too young to drive`
  }
}

console.log(`Is ${person} old enough to drive? ${ableToDrive(age)}.`)

const birthYear = 1996

//  if we want to use a variable outside of the if statement, we need to declare it outside of the if statement
let century

if (birthYear <= 2000) {
  century = 20
} else {
  century = 21
}

//  a variable that is declared inside of an if statement is only available inside of the if statement

console.log(century)


//----------------------------------------------
//Coding Challenge #2

//  Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

//  Tasks:
//  1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
//  2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

//  Hint: Use an if/else statement 😉

const markMass = 95
const markHeight = 1.88

const johnMass = 85
const johnHeight = 1.76

const markBMI = markMass / markHeight ** 2

const johnBMI = johnMass / (johnHeight * johnHeight)
johnBMI

const higherBMI = markBMI > johnBMI

if (higherBMI) {
  console.log(
    `Mark's BMI (${markBMI.toFixed(
      1
    )}) is higher than John's (${johnBMI.toFixed(1)})!`
  )
} else {
  console.log(
    `John's BMI (${johnBMI.toFixed(
      1
    )}) is higher than Mark's (${markBMI.toFixed(1)})!`
  )
}


//----------------------------------------------
//Type conversion and coercion

//  Type conversion
//  is when we manually convert from one type to another
const inputYear = '1996'
console.log(Number(inputYear), inputYear)
console.log(typeof Number(inputYear), typeof inputYear)
console.log(Number(inputYear) + 18, inputYear + 18)

console.log(Number('Thiago'))
//  whenever we try to convert a string to a number and the string is not a number, we get NaN
//  NaN = Not a Number

//  Type coercion
//  is when JS automatically converts types for us
console.log('I am ' + 26 + ' years old')
//  whenever there is the plus operator and a string and a number, JS converts the number to a string

console.log('23' - '10' - 3)
//  the minus operator converts the strings to a number

let n = '1' + 1 // '11'
n = n - 1 // the minus operator converts the strings to a number
console.log(n)


//----------------------------------------------
//Truthy and Falsy Values

//  JS has only 5 falsy values:
//    0,
//    '',
//    undefined,
//    null,
//    NaN

//  that means they will become false when converted to a boolean
console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(NaN))

//  all other values are truthy

// in practice, the conversion to boolean is always implicit, in other words, always type coercion. It happens when we use logical operators or in a logical context like an if statement

const money = 0 // 0 is falsy
if (money) {
  console.log("Don't spend it all ;)")
} else {
  //  else is executed because 0 is falsy
  console.log('You should get a job!')
}

let car
if (car) {
  console.log('You have a car')
} else {
  //  else is executed because car is undefined (falsy)
  console.log("You don't have a car")
}

//  we can find a problem when the value is 0, because 0 is falsy, but it is a valid value
let height = 0
if (height) {
  console.log('Yay! Height is defined')
} else {
  //  else is executed because height is 0 (falsy)
  console.log('Height is undefined')
}


//----------------------------------------------
//Equality Operators: == vs. ===

const age = '18'

//  Strict Equality Operator (===) does not do type coercion
console.log(age === 18) // false because 18 is a number and age is a string

//  Loose Equality Operator (==) does type coercion
console.log(age == 18) // true because 18 is converted to a string and then compared to age

const favorite = Number(prompt("What's your favorite number?"))
//  the prompt function always returns a string
//  we can convert the string to a number using the Number function
console.log(favorite)
console.log(typeof favorite)

if (favorite === 28) {
  console.log('Cool! 28 is an amazing number!')
} else if (favorite === 5) {
  console.log('5 is also a cool number')
} else {
  console.log('Number is not 28 or 5')
}

if (favorite !== 28) {
  console.log('Why not 28?')
}


//----------------------------------------------
//Logical Operators

const hasDriversLicense = true // A
const hasGoodVision = true // B

//  AND operator (&&)  //  both values need to be true
console.log(hasDriversLicense && hasGoodVision)

if (hasDriversLicense && hasGoodVision) {
  console.log('Sarah is able to drive')
}

//  OR operator (||)  //  at least one of the values needs to be true
console.log(hasDriversLicense || hasGoodVision)

//  NOT operator (!)  //  inverts the boolean value
console.log(!hasDriversLicense)

const isTired = false // C

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive')
} else {
  console.log('Someone else should drive...')
}

//  the NOT operator has precedence over the AND and OR operator

*/
//----------------------------------------------
//Coding Challenge #3

//  There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

//  Tasks:
//  1. Calculate the average score for each team, using the test data below

//  2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

//  3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks

//  4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

//  Test data:  Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

//  Test data Bonus 1:  Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

//  Test data Bonus 2:  Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
