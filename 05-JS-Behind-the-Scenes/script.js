"use strict";
/*
//----------------------------------------------------------------------------//
// Compilation vs Interpretation
Compilation and Interpretation are the two ways of converting a program in a high-level language to a low-level language that the computer can understand.

Compilation: Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer. It generates a single executable file that can be executed multiple times whenever needed. It takes a lot of time to analyze the source code but the overall execution time is comparatively faster.

Interpretation: Interpreter runs through the source code and executes it line by line. The code is read and executed line by line. It does not generate an intermediary code. It takes less amount of time to analyze the source code but the overall execution process is much slower.

Just-In-Time (JIT) Compilation: It is a combination of both interpretation and compilation. Here, the code is interpreted first and if the same code is used again then it is compiled. It takes medium amount of time to analyze the source code and the overall execution time is medium too.


*/
//----------------------------------------------------------------------------//
/* JS Engine, web APIs and callback queue

The JS engine is a program that executes JS code. The JS engine consists of a call stack and a heap.

Call Stack: It is a data structure which records where in the program we are. If we call a function from another function, the current function is added on top of the call stack. The JS engine executes the functions from top to bottom. When a function returns, it is removed from the stack and the execution continues in the previous function.

Heap: Objects are stored in the heap. It is an unstructured memory pool which stores all the objects that our application needs.

Web APIs: It is a set of functionalities that the browser exposes so that we can build web applications. It is not part of the JS language itself. It is provided to the engine via the global window object. It is not written in JS but in a lower level language like C++. Some examples of web APIs are DOM, AJAX, setTimeout, HTTP request, etc.

Callback Queue: It is a data structure that contains all the callback functions that are ready to be executed. A callback function is a function that is passed to another function as an argument and is executed after some operation has been completed. For example, the callback function of setTimeout is executed after the timer has finished. The callback queue is also called the message queue. The event loop takes the callback functions from the callback queue and puts them in the call stack for execution.

Event Loop: It is a functionality in the JS engine that checks the callback queue and the call stack. If the call stack is empty, it takes the first callback function from the callback queue and puts it in the call stack for execution. If the call stack is not empty, it waits until the call stack is empty and then takes the first callback function from the callback queue and puts it in the call stack for execution.


*/
//----------------------------------------------------------------------------//
/* Execution Contexts and the Call Stack

Execution Context: It is an environment in which a piece of JS code is executed. It stores all the necessary information for the execution of the code. It consists of the variable environment, scope chain and the this keyword.

THE GLOBAL EXECUTION CONTEXT is the default execution context. It is created when the JS engine starts the execution of the code. It is the outermost execution context. It executes top-level code which is not inside any function. It is associated with the global object. In the browser, the global object is the window object. In Node.js, the global object is the global object itself. No matter how large the code is, there is only one global execution context.

Then the top-level code is executed line by line. If the top-level code contains a function declaration, then a new execution context is created for that function. This is called function execution context. It is created when the function is called. It is associated with the function object. It is created every time the function is called. It is destroyed when the function returns. No matter how many times the function is called, there is only one function execution context.

THE FUNCTION EXECUTION CONTEXT is created when a function is called. The function execution context is pushed on top of the call stack. The call stack is a data structure that records where in the program we are. The JS engine executes the functions from top to bottom. When a function returns, it is removed from the stack and the execution continues in the previous function. The function execution context is destroyed when the function returns. There is only one execution context per function call.


// WHAT IS INSIDE THE EXECUTION CONTEXT???
The execution context consists of the variable environment, scope chain and the this keyword.

Variable Environment: It stores all the variables that are defined in the current scope. It also stores the function declarations. It is created in two phases: creation phase and execution phase. In the creation phase, the variable environment is set up. In the execution phase, the code is executed line by line.

Scope Chain: It is used to resolve variables that are not defined in the current scope. It is created during the creation phase. It consists of the variable environment of the current execution context and the variable environment of its parent execution context. It is used to resolve variables that are not defined in the current scope. It is created during the creation phase. It consists of the variable environment of the current execution context and the variable environment of its parent execution context.

This Keyword: It is a special variable that is created for every execution context. It takes the value of the owner of the function in which the this keyword is used. If the function is called normally, the this keyword takes the value of the global object. If the function is called as a method of an object, the this keyword takes the value of the object itself. If the function is called using the new operator, the this keyword takes the value of the newly created object.


The Call Stack is a data structure that records where in the program we are. The JS engine executes the functions from top to bottom. When a function returns, it is removed from the stack and the execution continues in the previous function. The call stack is a data structure that records where in the program we are. The JS engine executes the functions from top to bottom. When a function returns, it is removed from the stack and the execution continues in the previous function.

The code runs inside execution contexts that are placed on top of each other in a data structure called the call stack. The call stack has the following rules:

1. The call stack is processed from top to bottom.

2. The execution context at the top of the stack is the one that is currently running.

3. When a execution context is finished running, it is removed/popped from the stack and the execution context below it resumes execution.

4. The call stack is empty when the JS engine first starts up.

5. The call stack is empty when the JS engine is done executing our script.

//----------------------------------------------------------------------------//
// Scoping and the Scope Chain

Lexical Scoping: It is a way of scoping in which the scope of a variable is determined by its position inside the source code. It is also called static scoping. It is the most common way of scoping. It is used by most programming languages. It is used by JS.

Scope: Is the place or environment in which a certain variable is declared. It is the current context of execution. It is a region of the code where a variable can be accessed. It is a set of rules for storing variables in some location and for finding those variables at a later time. It is a space or environment in which a variable is declared. In JS we have three types of scope: global scope, function scope and block scope.

Scope of a variable: It is the region of the code where a variable can be accessed.

Global Scope: In JavaScript, global scope is the widest scope available. Variables declared in global scope are accessible from anywhere in your code, whether it's inside functions, conditional statements, loops, or other blocks of code.

Function Scope: Variables declared inside a function are in the function scope. They are accessible only inside the function. They are not accessible outside the function. They are also called local variables.

Block Scope: Variables declared inside a block are in the block scope. They are accessible only inside the block. They are not accessible outside the block. They are also called local variables.
  Only variables created with let and const are block scoped. Variables created with var are function scoped.
  Since ES6 we have block scope in JS. Before ES6 we only had global scope and function scope.

Strict mode guarantees that that all functions are block scoped. It is a special mode that we can activate in JS. It is used to write secure JS code. It is used to avoid accidental errors.

After ES6, we have block scope in JS. Before ES6, we only had global scope and function scope. One example of that is a for loop. It is not a function, but creates a scope inside its block (curly braces)

Every scope has access to all the variables from all its outer scopes. This is called lexical scoping. It is also called static scoping. It is the most common way of scoping. It is used by most programming languages. It is used by JS.

Variable lookup: It is the process of looking for a variable in the scope chain. It starts from the current scope and goes up the scope chain until it finds the variable. If the variable is not found, it throws a reference error. There is no look down in the scope chain.

const myName = "Jonas";

// Example 1
  function first() {
    const age = 27;

    if (age >= 20) {
      const decade = 2;
      var millennial = true;
    }

    function second() {
      const job = "software engineer";
      console.log(`${myName} is a ${age} year old ${job}`);
    }

    second();
  }

  first();
//

In the example above, because of lexical scoping, we can see that the second function has access to the variables in the first function. And both functions have access to the global variable myName.

Furthermore, the second function has access to the if block millennial variable because it is declared with var. If it was declared with let or const, it would not be accessible outside the if block. Being declared with var make it available in the whole function scope (first function).

SCOPE CHAIN is the order in which functions are written lexically in the code. It is used to resolve variables that are not defined in the current scope. It is created during the creation phase. It consists of the variable environment of the current execution context and the variable environment of its parent execution context.

// Example 2
  const a = 'Thiago!';
  first();

  function first() {
    const b = 'Hello!';
    second();

    function second() {
      const c = 'Hi!';
      third();
    }
  }

  function third() {
    const d = 'Hey!';
    console.log(d + c + b + a);
  }
//

The Call Stack of the code above goes like this:

|----------------|
|   third()      |
|   second()     |
|    first()     |
| global scope   |
|----------------|
|   CALL STACK   |


We get a reference error because the third function only has access to the global scope and its own scope.

THE ORDER THAT FUNCTIONS ARE CALLED DOES NOT AFFECT THE SCOPE CHAIN. The scope chain is determined by the order that functions are written lexically in the code.

When the third function is called, it is placed on top of the call stack. The third function has access to the global scope and its own scope. It does not have access to the first and second functions scope. It does not have access to the variables b and c. It only has access to the variable a.

In JavaScript, we have lexical scoping, so the rules of where we can access variables are based on exactly where in the code functions and blocks are written;

Every scope always has access to all variables from all its outer scopes. This is the scope chain! When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it's looking for. This is called variable lookup;

The scope chain is a one-way street: a scope will never, ever have access to the variables of an inner scope;

The scope chain in a certain scope is equal to adding together all the variable environments of all the parent scopes;

The scope chain has nothing to do with the order in which functions were called. It does not affect the scope chain at all!
*/

//----------------------------------------------------------------------------//
/*
// Scoping and the Scope Chain in Practice
function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    let output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millennial = true;
      // Creating NEW variable with same name as outer scope's variable
      // const firstName = "Steven";
      // js would use the variable in the current scope, not the outer scope. Because it first looks at the current scope, and only if it does not find the variable, it looks at the outer scope.
      const str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      const output = "NEW OUTPUT!"; // this variable is in the block scope of the if statement, so it is not the same as the output variable in the printAge function scope.
    }
    // console.log(str);
    // str is not defined because it is block scoped.

    // console.log(millennial) works because var is function scoped and makes the variable available in the whole function scope.
    console.log(millennial);

    // console.log(add(2, 3)); // in strict mode this throws a ReferenceError because we are trying to access a function that is block scoped.
    // without strict mode, it would work because the function add would be function scoped.

    console.log(output); // this is the output variable in the printAge function scope. It is not the same as the output variable in the if statement block scope.
  }

  printAge();

  return age;
}

const firstName = "Thiago";
calcAge(1996);

*/
//----------------------------------------------------------------------------//
/* Hoisting and TDZ (temporary dead zone) in JavaScript

Hoisting: Makes some types of variables accessible/usable in the code before they are actually declared. "Variables lifted to the top of their scope".

Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object.

Hoisting works in a different way for function declarations, var variables, leet and const variables and function expressions.

IN STRICT MODE they work like this before execution phase:

function declarations:
  Hoisted?
    YES
  Initial value:
    Actual function
  Scope:
    Block

var variables:
  Hoisted?
    YES
  Initial value:
    undefined
  Scope:
    Function

let and const variables:
  Hoisted?
    NO
  Initial value:
    <uninitialized>, TDZ (temporal dead zone)
  Scope:
    Block

function expressions and arrows functions created with var:
  Hoisted?
    NO
  Initial value:
    undefined
  Scope:
    Block

function expressions and arrows functions created with let and const:
  Hoisted?
    NO
  Initial value:
    <uninitialized>, TDZ (temporal dead zone)
  Scope:
    Block


variables in the TDZ (temporal dead zone) cannot be accessed before they are declared. They are in a TDZ from the start of the scope until the line where they are declared.

// Example of TDZ

const myName = "Thiago";

if (myName === "Thiago") {
  console.log(`Thiago is a ${job}`);
  // ReferenceError: Cannot access 'job' before initialization

  const age = 2024 - 1996;
  console.log(age);

  const job = "software engineer";

  console.log(x);
  // Reference Error: x is not defined
}

WHY TDZ???
Makes it easier to avoid and catch erros: accessing variables before declaration is bad practice and should be avoided.

Makes const variables actually work as they should (they should be only assigned when execution reaches declaration and should not be able to be reassigned).

The TDZ ends when the variable is declared.
*/

//----------------------------------------------------------------------------//
// Hoisting and TDZ (temporary dead zone) in Practice
/*
// console.log(me);
// -> undefined
// this is because variables declared with var are hoisted to the top of their scope. They are set to undefined in the creation phase. They are not in the TDZ.

// console.log(job);
// -> ReferenceError: Cannot access 'job' before initialization
// this is because variables declared with let and const are not hoisted to the top of their scope. They are in the TDZ until declared.

// console.log(year);
// -> ReferenceError: Cannot access 'year' before initialization
// same as job explanation.

var me = "Thiago";
let job = "software engineer";
const year = 1996;

// functions
// console.log(addDecl(2, 3));
// -> 5

// console.log(addExpr(2, 3));
// -> ReferenceError: Cannot access 'addExpr' before initialization

// console.log(addArrow(2, 3));
// -> ReferenceError: Cannot access 'addArrow' before initialization

console.log(addExpr2);
// -> undefined // because it is a variable declared with var. It is hoisted to the top of the scope and set to undefined in the creation phase.

console.log(addExpr2(2, 3));
// -> TypeError: addExpr2 is not a function // same explanation as above

// the only function we can use before declaration is a function declaration.

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

var addExpr2 = function (a, b) {
  return a + b;
};


// Example
console.log(numProducts);
// -> undefined

if (!numProducts) deleteShoppingCart();
// -> All products deleted! // because numProducts is undefined, and undefined is a falsy value. So !numProducts is true.

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted!`);
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
// -> true

console.log(y === window.y);
// -> false

console.log(z === window.z);
// -> false

// that happens because variables created with var are attached to the window object. Variables created with let and const are not attached to the window object.

*/
//----------------------------------------------------------------------------//
// The this Keyword
/*
// this keyword is a special variable that is created for every execution context (every function). It takes the value of (points to) the "owner" of the function in which the this keyword is used.

this is NOT static. It depends on how the function is called, and its value is only assigned when the function is actually called.

Where this points to if inside a...:

  Method -> this = <Object that is calling the method>

  Simple function call -> this = undefined (in strict mode) or window object (not in strict mode)

  Arrow function -> this = <this of surrounding function (lexical this)> // arrow functions do not get their own this keyword. They use the this keyword of the  function they are written in, the outer lexial scope (lexical this).

  Event listener -> this = <DOM element that the handler is attached to>

Important to note that this keyword will never point to a function itself, and it also does not point to the variable environment of the function.
*/
//----------------------------------------------------------------------------//
// This keyword in practice
/*
console.log(this);
// -> Window object

const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this);
  // -> undefined // because it is a simple function call, not a method call. In strict mode, this would be undefined. In non-strict mode, this would be the window object (another reason we should not use non-strict mode, aka sloppy mode).
};

calcAge(1996);

const calcAgeArrow = (birthYear) => {
  console.log(2024 - birthYear);
  console.log(this);
  // -> Window object // because arrow functions do not get their own this keyword. They use the this keyword of the function they are written in, the outer lexial scope (lexical this).
};

calcAgeArrow(1996);


const thiago = {
  year: 1996,
  calcAge: function () {
    console.log(this);
    // -> thiago object // because it is a method call. this points to the object that is calling the method.
    console.log(2024 - this.year);
  },
};

thiago.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = thiago.calcAge; // method borrowing
// this is called method borrowing because we are borrowing a method from another object. We are not calling the method here, we are just copying it, that is why we do not use parentheses.

matilda.calcAge();
// -> matilda object // because it is a method call. this points to the object that is calling the method.

// This keyword is not static. It depends on how the function is called, and its value is only assigned when the function is actually called.

const f = thiago.calcAge;
// f is now just a regular function, not a method. It is a simple function call.

f();
// -> Cannot read properties of undefined (reading 'year')
//      at calcAge (script.js:421:29)
//      at script.js:442:1
// undefined because it is a simple function call, not a method call. In strict mode, this would be undefined. In non-strict mode, this would be the window object (another reason we should not use non-strict mode, aka sloppy mode).
*/

//----------------------------------------------------------------------------//
// Regular Functions vs. Arrow Functions
/*
const thiago = {
  firstName: "Thiago",
  year: 1996,

  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

thiago.greet();
// -> Window object // because arrow functions do not get their own this keyword. They use the this keyword of the function they are written in, the outer lexial scope (lexical this).
// -> Hey undefined // In this case, the outer scope is the global scope, so this.firstName is undefined. Thiago object doest not create its own scope.
*/

//----------------
// var firstName = "Matilda"; // lets suppose we have this variable in the global scope.

// thiago.greet();
// -> Hey Matilda // because arrow functions do not get their own this keyword. They use the this keyword of the function they are written in, the outer lexial scope (lexical this). In this case, the outer scope is the global scope, so this.firstName in the global scope is Matilda.
//----------------

// NEVER EVER USE ARROW FUNCTIONS AS METHODS!!!!!
// NEVER EVER USE ARROW FUNCTIONS AS METHODS!!!!!
// NEVER EVER USE ARROW FUNCTIONS AS METHODS!!!!!
// NEVER EVER USE ARROW FUNCTIONS AS METHODS!!!!!
// NEVER EVER USE ARROW FUNCTIONS AS METHODS!!!!!
// NEVER EVER USE ARROW FUNCTIONS AS METHODS!!!!!

/*
const thiago = {
  firstName: "Thiago",
  year: 1996,

  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);

    const isMillenial = function () {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

thiago.greet();
// -> { firstName: 'Thiago', year: 1996, calcAge: 𝑓, greet: 𝑓}
// -> Hey Thiago // because it is a method call. this points to the object that is calling the method.

thiago.calcAge();
// -> { firstName: 'Thiago', year: 1996, calcAge: 𝑓, greet: 𝑓}
// -> 28
// -> Uncaught TypeError: Cannot read properties of undefined (reading 'year')
//      at isMillenial
//      at Object.calcAge
//      at script.js
// That happens because isMillenial is a regular function, not a method. So it is a simple function call. this points to the global object, which is undefined in strict mode. So this.year is undefined. It is like the function is outside of the method calcAge.

// It is a clear rule that a regular function call has the this keyword set to undefined. It does not matter if the function is inside a method. It is still a regular function call.

There are 2 solutions to this problem:

// Solution 1 - create a variable (self or that) and store this in it

The first solution is to use an extra variable that we usually call self. It is a common practice to use self or that to store the this keyword. Then we can use self or that inside the regular function. It is a workaround, not a solution.

  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);

    const self = this; // now self is the thiago object
    const isMillenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },

now when we call
thiago.calcAge();
// -> { firstName: 'Thiago', year: 1996, calcAge: 𝑓, greet: 𝑓}
// -> 28
// -> true

// This is a pre ES6 solution. It is a workaround, not a solution.


// Solution 2 - use an arrow function

  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);

    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

thiago.calcAge();
// -> { firstName: 'Thiago', year: 1996, calcAge: 𝑓, greet: 𝑓}
// -> 28
// -> true

// Arrow functions do not get their own this keyword. They use the this keyword of the function they are written in, the outer lexial scope (lexical this). In this case, the outer scope is the calcAge method, so this points to the thiago object.
*/

/*
// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
// -> Arguments(2) [2, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// we can see the two arguments that we passed in
// -> 7

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5);
// -> ReferenceError: arguments is not defined
// arrow functions do not get their own arguments keyword.

// arguments keyword is a special variable that exists in regular functions but not in arrow functions.
*/
