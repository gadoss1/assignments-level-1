// Node JS Calculator Project //

// Constant to perform redline-sync in terminal node for JS commands //
const rS = require("readline-sync");

// Vars for number calculations //
var firstNumber = rS.questionInt("Please enter first number: ");
var secondNumber = rS.questionInt("Please enter second number: ");
var operationOption = rS.question("Please enter option needed: a, s, m, d ");

// Const, funcs, and logic to add, subtract, divide, and multiply set of numbers //

// Add //
function addNumbers(firstNumber, secondNumber){
    return firstNumber + secondNumber;
};

// Subtract //
function subtractNumbers(firstNumber, secondNumber){
    return firstNumber - secondNumber;
};

// Divide //
function divideNumbers(firstNumber, secondNumber){
    return firstNumber / secondNumber;
};

// Multiply //
function multiplyNumbers(firstNumber, secondNumber){
    return firstNumber * secondNumber;
};

// Operations funcs and logic and final answers //

calculator (firstNumber, secondNumber, operationOption);

function calculator(firstNumber, secondNumber, operationOption){
if (operationOption == "a"){
    console.log("The answer is sum of 2 numbers: ");
    addNumbers (firstNumber, secondNumber);

    } else if (operationOption == "s"){
        console.log ("The answer is result of a reduction: ")
        subtractNumbers (firstNumber, secondNumber);

    } else if(operationOption == "m") {
        console.log ("The answer is the product of 2 numbers: ")
        multiplyNumbers (firstNumber, secondNumber);

    } else if (operationOption == "d"){
        console.log ("The answer is the division of 2 numbers: ")
        divideNumbers (firstNumber, secondNumber);

    }

}

