'use strict' // Strict mode is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of "sloppy mode". Strict mode isn't just a subset: it intentionally has different semantics from normal code. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

// strict mode reserves some keywords for future use, so we can't use them as variable names

// strict mode forbids us to use undeclared variables

// strict mode shows us errors that would otherwise be silent

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
