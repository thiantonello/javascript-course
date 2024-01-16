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
