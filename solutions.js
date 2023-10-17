"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

// 1. Define a function named isTrue
function isTrue(input) {
    return input === true;
}

// 2. Define a function named isFalse
function isFalse(input) {
    return input === false;
}

// 3. Define a function named 'not' that returns the boolean opposite of input
function not(input) {
    return !input === true;
}

// 4. Define a function named 'addOne' that takes number and returns value plus 1.
function addOne(num) {
    return parseFloat(num) + 1;
}

// 5. Define a function named 'isEven' and returns true if even
function isEven(num) {
    return num % 2 === 0
}

// 6. Define a function named 'isIdentical'
function isIdentical(input, input2) {
    return input === input2;
}

// 7. Define a function named 'isEqual'
function isEqual(input, input2) {
    return input == input2;
}

// 8. Define a function name 'or'
function or(input, input2) {
    return input || input2;
}

// 9. Define a function named 'and'
function and(input, input2) {
    return input && input2;
}

// 10. Define a function named concat
function concat(input, input2) {
    return `${input}` + `${input2}`;
}