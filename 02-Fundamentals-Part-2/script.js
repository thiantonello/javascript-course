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

//  Assignments:
//  LECTURE: Introduction to Arrays
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


//----------------------------------------------------------------------------//
//Basic Array Operations (Methods)

const friends = ['Michael', 'Steven', 'Peter']

//  add elements to the array
friends.push('Jay') //  adds element to the end of the array
//    push returns the new length of the array

friends.unshift('John') //  adds element to the beginning of the array
//    unshift returns the new length of the array

console.log(friends)

//  remove elements from the array
friends.pop() //  removes last element from the array
//    pop returns the removed element
const poppedFriend = friends.pop()

console.log(poppedFriend)
console.log(friends)

const shiftedFriend = friends.shift() //  removes first element from the array
//    shift returns the removed element
console.log(shiftedFriend)
console.log(friends)

console.log(' ')

//  indexOf method uses strict equality operator (===), which means that it does not do type coercion
//  indexOf method returns the position of the element in the array or -1 if the element is not in the array
friends.push(46)
console.log(friends.indexOf('Michael')) //  returns the position of the element in the array
console.log(friends.indexOf('Bob')) //  returns -1 if the element is not in the array
console.log(friends.indexOf('46')) //  returns -1 because it does not do type coercion
console.log(friends)

console.log(' ')

//  includes method uses strict equality operator (===), which means that it does not do type coercion
//  includes method returns a boolean value
friends.push(23)
console.log(friends.includes('Steven')) //  returns true if the element is in the array
console.log(friends.includes('Bob')) //  returns false if the element is not in the array
console.log(friends.includes('23')) //  returns false because it does not do type coercion
console.log(friends)

console.log(' ')

//  includes method is a better way to check if an element is in an array than using indexOf method, because it is more readable and returns a boolean value
if (friends.includes('Steven')) {
  console.log('You have a friend called Steven')
}

//  Assignments:
//  LECTURE: Basic Array Operations (Methods)
//  1. Create an array containing all the neighboring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbors. Store the array into a variable called 'neighbors'

//  2. At some point, a new country called 'Utopia' is created in the neighborhood of your selected country. So add it to the end of the 'neighbors' array

//  3. Unfortunately, after some time, the new country is dissolved. So remove it from the end of the array

//  4. If the 'neighbors' array does not include the country ‘Germany’, log to the console: 'Probably not a central European country :D'

// 5. Change the name of one of your neighboring countries. To do that, find the index of the country in the 'neighbors' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

const country = 'Italy'

const neighbors = [
  'Slovenia',
  'Austria',
  'Switzerland',
  'France',
  'San Marino',
  'Vatican City',
]

const newCountry = 'Utopia'

neighbors.push(newCountry)

console.log(neighbors)

neighbors.pop()

console.log(neighbors)

if (!neighbors.includes('Germany')) {
  console.log('Probably not a central European country :D')
}

neighbors[neighbors.indexOf('San Marino')] = 'Brazil'

console.log(neighbors)


//----------------------------------------------------------------------------//
//Coding Challenge #2

//  Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

//  Your tasks:
//  1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100

//  2. And now let's use arrays! So create an array 'bills' containing the test data below

//  3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before

//  4. Bonus: Create an array 'total' containing the total values, so the bill + tip

//  Test data: 125, 555 and 44

const bills = [100, 125, 555, 44]

const total = []

const tips = []

function calcTip(bills) {
  bills.forEach((bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
    tips.push(Number(tip.toFixed(2)))

    total.push(Number((bill + tip).toFixed(2)))
  })
}

calcTip(bills)

console.log(bills)
console.log(tips)
console.log(total)


//----------------------------------------------------------------------------//
//Introduction to Objects

//  object literal syntax (curly braces {} are used)
const myCountry = {
  country: 'Italy',
  capital: 'Rome',
  language: 'Italian',
  population: 60,
  neighbors: [
    'Slovenia',
    'Austria',
    'Switzerland',
    'France',
    'San Marino',
    'Vatican City',
  ],
}

//  just like arrays, we use objects to store data

//  objects are used to store data in key-value pairs, where the key is a string and the value can be any data type

//  unlike arrays objects are unordered, which means that the order in which we write the key-value pairs does not matter

//----------------------------------------------------------------------------//
//Dot vs. Bracket Notation

const thiago = {
  firstName: 'Thiago',
  lastName: 'Antonello Vargas',
  age: new Date().getFullYear() - 1996,
  job: 'Software Engineer',
  friends: ['Ryan', 'Gabriel', 'Guilherme', 'Heitor', 'Atila'],
}

//  Dot notation
console.log(thiago.firstName)

//  Bracket notation
console.log(thiago['firstName'])

//  we can use either dot or bracket notation to access the values of an object

const nameKey = 'Name'
console.log(thiago['last' + nameKey])
console.log(thiago['first' + nameKey] + ' ' + thiago['last' + nameKey])

console.log(thiago)

//  when we need to first compute the property name, we use bracket notation

//  in general, use dot notation

//  we can use the prompt method to ask the user what information he wants to know about the object
const interestedIn = prompt(
  'What do you want to know about Thiago? Choose between firstName, lastName, age, job and friends'
)

//  then use the bracket notation to access the value of the property that the user wants to know
if (thiago[interestedIn]) {
  console.log(thiago[interestedIn])
} else {
  console.log('Please enter a valid property')
}

//  same as above but using the logical NOT operator (!)
//  if the user enters a property that does not exist in the object it will return undefined therefore a falsy value, so we could have used the logical NOT operator (!) to check if the property does not exist
// else if (!thiago[interestedIn]) {
//   console.log('Please enter a valid property')
// }

//  we can also use the prompt method to add new properties to the object
thiago.location = prompt('Where is Thiago?')
console.log(thiago)

//  we can also use the prompt method to change the value of a property
thiago.job = prompt("What is Thiago's job?")
console.log(thiago)

//  we can also use the prompt method to delete a property from the object
delete thiago.age
console.log(thiago)

//  Challenge:
//  "Thiago has 3 friends, and his best friend is called Ryan"

//  write the sentence above using the object properties, without hard-coding the values

console.log(
  `${thiago.firstName} has ${thiago.friends.length} friends and his best friend is ${thiago.friends[0]}`
)

//  Assignments:
//  LECTURE: Dot vs. Bracket Notation

//  1. Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million people, their mother tongue is Finnish, they have 3 neighboring countries and a capital called Helsinki.'

//  2. Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation.

const myCountry = {
  country: 'Italy',
  capital: 'Rome',
  language: 'Italian',
  population: 60,
  neighbors: [
    'Slovenia',
    'Austria',
    'Switzerland',
    'France',
    'San Marino',
    'Vatican City',
  ],
}

console.log(
  `${myCountry.country} has ${myCountry.population} million people, their mother tongue is ${myCountry.language}, they have ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`
)

myCountry.population += 2
console.log(myCountry.population)

*/
//----------------------------------------------------------------------------//
//Object Methods

const thiago = {
  firstName: 'Thiago',
  lastName: 'Antonello Vargas',
  birthDate: '1996-03-28',
  job: 'Software Engineer',
  friends: ['Ryan', 'Gabriel', 'Guilherme', 'Heitor', 'Atila'],
  hasDriversLicense: true,

  //  we can also add functions to objects, this is called a method

  //  we can use the this keyword to access the properties of the object inside the method

  //  this keyword is a special variable that points to the object that is calling the method

  // calcAge: function () {
  //   this.age = new Date().getFullYear() - 1996
  //   return this.age
  // },

  calcAge: function () {
    const birthDate = new Date(this.birthDate)
    const currentDate = new Date()

    let years = currentDate.getFullYear() - birthDate.getFullYear()

    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() == birthDate.getMonth() &&
        currentDate.getDate() < birthDate.getDate())
    ) {
      years--
    }

    //  we can also add a new property to the object using the this keyword inside the method and assigning it the value of the variable age
    this.age = years

    return years
  },

  //  we could also have used calcAge: () {} instead of calcAge: function () {}

  getAllData() {
    console.log(this)
  },

  getSummary() {
    return `${this.firstName} is a ${this.age} year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
  },
}

console.log(thiago.calcAge())
console.log(thiago['calcAge']())

thiago.getAllData()

console.log(' ')

//  Challenge:
//  "Thiago is a 26 year old Software Engineer, and he has a driver's license"

//  write the sentence above using the object properties, without hard-coding the values

console.log(thiago.getSummary())
