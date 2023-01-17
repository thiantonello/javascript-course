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


//----------------------------------------------------------------------------//
//Coding Challenge #1

//  Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
//  Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
//  A team only wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

//  1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
//  2. Use the function to calculate the average for both teams
//  3. Create a function 'checkWinner' that takes the average score of each team
//  as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to
//  the console, together with the victory points, according to the rule above.
//  Example: "Koalas win (30 vs. 13)"
//  4. Use the 'checkWinner' function to determine the winner for both Data 1
//  and Data 2
//  5. Ignore draws this time

//  TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
//  TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

const dolphinsGames = [
  [44, 23, 71],
  [85, 54, 41],
]
const koalasGames = [
  [65, 54, 49],
  [23, 34, 27],
]

let round

const calcAverage = function (games) {
  let score = 0

  games[round].forEach((game) => (score += game))

  return score / games.length
}

function checkWinner(roundNumber) {
  setRound(roundNumber)

  let avgDolphins = calcAverage(dolphinsGames)
  let avgKoalas = calcAverage(koalasGames)

  if (avgDolphins >= avgKoalas * 2) {
    return console.log(
      `Round ${round}, Dolphins wins (${avgDolphins} vs. ${avgKoalas})`
    )
  } else if (avgKoalas >= avgDolphins * 2) {
    return console.log(
      `Round ${round}, Koalas wins (${avgKoalas} vs. ${avgDolphins})`
    )
  } else {
    console.log(`Round ${round}, No winner`)
  }
}

function setRound(roundNumber) {
  round = roundNumber
}

checkWinner(0)
console.log(' ')
checkWinner(1)


//----------------------------------------------------------------------------//
//Introduction to Arrays

//  Arrays are a special type of object. They are used to store multiple values in a single variable. They are ordered, which means that the order of the elements in the array is the same as the order in which we specified them.

const friend1 = 'Michael'
const friend2 = 'Steven'
const friend3 = 'Peter'

//  above is a bad way to store a list of friends. It is not scalable. If we want to add more friends, we have to create more variables. If we want to remove a friend, we have to remove a variable. If we want to change the order of the friends, we have to change the order of the variables.

const friends = ['Michael', 'Steven', 'Peter']

//  above is a good way to store a list of friends. It is scalable. If we want to add more friends, we just add them to the array. If we want to remove a friend, we just remove it from the array. If we want to change the order of the friends, we just change the order of the elements in the array.

console.log(friends)

console.log(' ')

//  Arrays are zero-based, which means that the first element in the array is at position 0, the second element is at position 1, and so on.

const years = new Array(1991, 1996, 1984, 2008, 2020)
console.log(years)

console.log(' ')

console.log(friends[0])
console.log(friends[2])

console.log(' ')

console.log(friends.length) //  number of elements in the array

//  inside the position index we can also use expressions, not just numbers
console.log(friends[friends.length - 1]) //  last element in the array
//  we can't use statements inside the position index

friends[2] = 'Jay'
console.log(friends)

//  we used the const keyword to declare the array, but we can still change the elements inside the array. This is because arrays are mutable, which means that we can change the elements inside the array, but we can't change the array itself.

//  because arrays aren't primitive values, they are objects, and objects are mutable, we can also add new properties to the array.

//  const with primitive values can't be changed, but const with objects can be changed.

//  friends = ['Bob', 'Alice'] //  this will throw an error, because we can't change the array itself that was declared with const (we can't reassign it)

console.log(' ')

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends]
//  we can store different types of values inside the same array
//  we can use expressions inside the array because they are evaluated before the array is created
//  we can store arrays inside arrays

console.log(jonas)
console.log(jonas[jonas.length - 1])

console.log(' ')

//  Exercise
const calcAge = function (birthYear) {
  return new Date().getFullYear() - birthYear
}

const yearsFriends = [1990, 1967, 2002, 2010, 2018]

console.log(yearsFriends + 10) //  this will return the array as a string and add 10 to the end of the string

//  console.log(yearsFriends - 10) //  this will throw an error, because we can't subtract 10 from an array

console.log(' ')

const age1 = calcAge(yearsFriends[0])
const age2 = calcAge(yearsFriends[1])
const age3 = calcAge(yearsFriends[yearsFriends.length - 1])

console.log(age1, age2, age3)

//  we can use the calcAge function to calculate the ages of the friends and store them in an array, because the calcAge function is an expression and it returns a value

const ages = [
  calcAge(yearsFriends[0]),
  calcAge(yearsFriends[1]),
  calcAge(yearsFriends[yearsFriends.length - 1]),
]

console.log(ages)

*/
//  Assignments:
//  1. Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called 'populations'
//  2. Log to the console whether the array has 4 elements or not (true or false)
//  3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values

const countryPopulations = [33, 214, 332, 1412]

console.log(countryPopulations.length === 4)

const percentageOfWorld1 = function (populationList) {
  const percentages = []

  for (let i = 0; i < populationList.length; i++) {
    percentages.push(((populationList[i] / 7900) * 100).toFixed(1))
  }

  //  same as above, but using forEach
  // populationList.forEach((population) => {
  //   percentages.push(((population / 7900) * 100).toFixed(1))
  // })

  return percentages
}

console.log(percentageOfWorld1(countryPopulations))
