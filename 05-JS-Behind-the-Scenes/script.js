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

The global execution context is the default execution context. It is created when the JS engine starts the execution of the code. It is the outermost execution context. It executes top-level code which is not inside any function. It is associated with the global object. In the browser, the global object is the window object. In Node.js, the global object is the global object itself. No matter how large the code is, there is only one global execution context.

Then the top-level code is executed line by line. If the top-level code contains a function declaration, then a new execution context is created for that function. This is called function execution context. It is created when the function is called. It is associated with the function object. It is created every time the function is called. It is destroyed when the function returns. No matter how many times the function is called, there is only one function execution context.

The function execution context is created when a function is called. The function execution context is pushed on top of the call stack. The call stack is a data structure that records where in the program we are. The JS engine executes the functions from top to bottom. When a function returns, it is removed from the stack and the execution continues in the previous function. The function execution context is destroyed when the function returns. There is only one execution context per function call.

Variable Environment: It stores all the variables that are defined in the current scope. It also stores the function declarations. It is created in two phases: creation phase and execution phase. In the creation phase, the variable environment is set up. In the execution phase, the code is executed line by line.


*/
