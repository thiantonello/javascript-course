'use strict' // Strict mode is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of "sloppy mode". Strict mode isn't just a subset: it intentionally has different semantics from normal code. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

// strict mode reserves some keywords for future use, so we can't use them as variable names

// strict mode forbids us to use undeclared variables

// strict mode shows us errors that would otherwise be silent

/*
console.log('Hello World!')

//----------------------------------------------------------------------------//
//Functions

function logger() {
  console.log('My name is Thiago')
}

//  calling / running / invoking the function === executing/using the function
logger()

// bellow apples and oranges are parameters
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`

  return juice
}

console.log(' ')

console.log(fruitProcessor(5, 3)) // here 5 and 3 are arguments
console.log(fruitProcessor(2, 5)) // here 2 and 5 are arguments

console.log(' ')

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

const brazil = describeCountry('Brazil', 214, 'Brasilia')
const usa = describeCountry('USA', 332, 'Washington')
const canada = describeCountry('Canada', 38, 'Ottawa')

console.log(brazil)
console.log(usa)
console.log(canada)


//----------------------------------------------------------------------------//
//Function Declarations vs. Expressions

//  Function declaration
//  we can call the function before the declaration because the function is already in the execution context
//  this happens because the function declaration is hoisted
const age1 = calcAge1(1996)
console.log(age1)

function calcAge1(birthYear) {
  return new Date().getFullYear() - birthYear
}

//  Function expression
//  we can't call the function before the declaration
//  const age2 = calcAge2(1996) // here we get an error because the function is not in the execution context

const calcAge2 = function (birthYear) {
  return new Date().getFullYear() - birthYear
}

const age2 = calcAge2(1996)
console.log(age1, age2)

console.log(' ')

//  Assignments:
//  LECTURE: Functions
//  1. Write a function called 'describeCountry' which takes three parameters:
//  'country', 'population' and 'capitalCity'. Based on this input, the
//  function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
//  2. Call this function 3 times, with input data for 3 different countries. Store the
//  returned values in 3 different variables, and log them to the console

//  object destructuring on parameters
const describeCountry = function ({ countryName, population, capitalCity }) {
  return `${countryName} has ${population} million people and its capital city is ${capitalCity}`
}

// const country0 = { name: 'Brazil', population: 214, capitalCity: 'Brasília' }
// const country1 = { name: 'Portugal', population: 33, capitalCity: 'Lisboa' }
// const country2 = { name: 'China', population: 1412, capitalCity: 'Beijing' }

// console.log(describeCountry(country0))
// console.log(describeCountry(country1))
// console.log(describeCountry(country2))

//  refactoring
const countries = [
  { countryName: 'Brazil', population: 214, capitalCity: 'Brasília' },
  { countryName: 'Portugal', population: 33, capitalCity: 'Lisboa' },
  { countryName: 'China', population: 1412, capitalCity: 'Beijing' },
]

countries.forEach((country) => console.log(describeCountry(country)))

console.log(' ')

//  LECTURE: Function Declarations vs. Expressions
//  1. The world population is 7900 million people. Create a function declaration
//  called 'percentageOfWorld1' which receives a 'population' value, and
//  returns the percentage of the world population that the given population
//  represents. For example, China has 1441 million people, so it's about 18.2% of the world population
//  2. To calculate the percentage, divide the given 'population' value by 7900
//  and then multiply by 100
//  3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
//  store the results into variables, and log them to the console
//  4. Create a function expression which does the exact same thing, called
//  'percentageOfWorld2', and also call it with 3 country populations (can be
//  the same populations)

const countries2 = [
  { countryName: 'Brazil', population: 214, capitalCity: 'Brasília' },
  { countryName: 'Portugal', population: 33, capitalCity: 'Lisboa' },
  { countryName: 'China', population: 1412, capitalCity: 'Beijing' },
]

//  function declaration hoisting in action
countries2.forEach((country) => console.log(percentageOfWorld1(country)))

//  function declaration
function percentageOfWorld1({ countryName, population }) {
  const worldPopulation = 7_900
  const percentage = (population * 100) / worldPopulation

  return `${countryName} has ${population}, so it's about ${percentage.toFixed(
    1
  )} of the world's population.`
}

console.log(' ')

//  countries2.forEach((country) => console.log(percentageOfWorld2(country))) can't be invoked here because percentageOfWorld2 was not initialized yet, there is no hoisting on function expression

//  function expression
const percentageOfWorld2 = function ({ countryName, population }) {
  const worldPopulation = 7_900
  const percentage = (population * 100) / worldPopulation

  return `${countryName} has ${population}, so it's about ${percentage.toFixed(
    1
  )} of the world's population.`
}

countries2.forEach((country) => console.log(percentageOfWorld2(country)))


//----------------------------------------------------------------------------//
//Arrow Functions
const birthYear = 1996

//  An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:
//    Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.

//    Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.

//    Arrow functions cannot use yield within their body and cannot be created as generator functions.

//    Rest parameters, default parameters, and destructuring within params are supported, and always require parentheses around the params.

//    Arrow functions are always unnamed. If the arrow function needs to call itself, use a named function expression instead. You can also assign the arrow function to a variable so it has a name.
const calcAge3 = (birthYear) => new Date().getFullYear() - birthYear

const age = calcAge3(birthYear)

console.log(calcAge3(birthYear))

const yearsUntilRetirement = (age, firstName) => {
  const yearsLeft = 65 - age

  const retirement =
    yearsLeft > 0
      ? `${firstName} retires in ${yearsLeft} years`
      : `${firstName} is ready to retire`

  return retirement
}

console.log(yearsUntilRetirement(25, 'John'))
console.log(yearsUntilRetirement(67, 'Mark'))


//  Assignments:
//  LECTURE: Arrow Functions
//  1. Recreate the last assignment, but this time create an arrow function called

const countries3 = [
  { countryName: 'Brazil', population: 214, capitalCity: 'Brasília' },
  { countryName: 'Portugal', population: 33, capitalCity: 'Lisboa' },
  { countryName: 'China', population: 1412, capitalCity: 'Beijing' },
]

//  arrow function
const percentageOfWorld3 = ({ countryName, population }) => {
  const worldPopulation = 7_900
  const percentage = (population * 100) / worldPopulation

  return `${countryName} has ${population}, so it's about ${percentage.toFixed(
    1
  )} of the world's population.`
}

countries.forEach((country) => console.log(percentageOfWorld3(country)))


//----------------------------------------------------------------------------//
//Functions Calling Other Functions

function cutFruitPieces(fruit) {
  return fruit * 4
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples)
  const orangePieces = cutFruitPieces(oranges)

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`

  return juice
}

console.log(fruitProcessor(2, 3))

console.log(' ')

//  Assignments:
//  LECTURE: Functions Calling Other Functions
//  1. Create a function called 'describePopulation'. Use the function type you
//  like the most. This function takes in two arguments: 'country' and

const countries = [
  { countryName: 'Brazil', population: 214, capitalCity: 'Brasília' },
  { countryName: 'Portugal', population: 33, capitalCity: 'Lisboa' },
  { countryName: 'China', population: 1412, capitalCity: 'Beijing' },
]

function percentageOfWorld(population) {
  const worldPopulation = 7_900
  const percentage = (population * 100) / worldPopulation

  return percentage
}

function describePopulation({ countryName, population }) {
  const percentage = percentageOfWorld(population)

  return `${countryName} has ${population} million people, which is about ${percentage.toFixed(
    1
  )}% of the world.`
}

countries.forEach((country) => console.log(describePopulation(country)))

*/
//----------------------------------------------------------------------------//
//Reviewing Functions

const calcAge = function (birthYear) {
  return new Date().getFullYear() - birthYear
}

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear)
  const yearsLeft = 65 - age

  if (yearsLeft > 0) {
    return `${firstName} retires in ${yearsLeft} years`
  } else {
    return `${firstName} is ready to retire`
  }
}

console.log(yearsUntilRetirement(1991, 'John'))
console.log(yearsUntilRetirement(1970, 'Mark'))
console.log(yearsUntilRetirement(1955, 'Paul'))

//  in short:
//  Function declaration is a function that is defined in the main body of the code. It is hoisted to the top of the code and can be called before it is defined.

//  Function expression is a function that is defined inside a variable. It is not hoisted to the top of the code and can't be called before it is defined.

//  Arrow function is a function that is defined using the arrow syntax. It is not hoisted to the top of the code and can't be called before it is defined. Great for one-liners and callbacks. Has no this keyword.

function calcAge1(birthYear) {
  return new Date().getFullYear() - birthYear
}

const calcAge2 = function (birthYear) {
  return new Date().getFullYear() - birthYear
}

const calcAge3 = (birthYear) => new Date().getFullYear() - birthYear

//  above three different ways to write the same function, but they all work in a similar way: receive input data, transform it, and return the output data.

//  Anatomy of a function:
//  1. The function keyword
//  2. The function name
//  3. The parameters
//  4. The function body
//  5. The return statement
