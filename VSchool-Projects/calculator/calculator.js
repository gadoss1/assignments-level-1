// Node JS Calculator Project //

// Constant to perform redline-sync in terminal node for JS commands //
const redlineSync = require("readline-sync");

// Vars for number calculations //
var num1 = redlineSync.questionInt("Please enter first number: ");
var num2 = redlineSync.questionInt("Please enter second number: ");
var operationOption = redlineSync.question("Please enter option needed: add, sub, mul, div ");

// Const, funcs, and logic to add, subtract, divide, and multiply set of numbers //

// Add //
function addNumbers(num1, num2){
    return num1 + num2;
};

// Subtract //
function subtractNumbers(num1, num2){
    return num1 - num2;
};

// Divide //
function divideNumbers(num1, num2){
    return num1 / num2;
};

// Multiply //
function multiplyNumbers(num1, num2){
    return num1 * num2;
};

// Operations funcs and logic and final answers //

    // Function to make calculator work //
calculator (num1, num2, operationOption);


    // Operations option selection for answer //
function calculator(num1, num2, operationOption){
if (operationOption == "add"){
    const answer = addNumbers (num1, num2);
    console.log("The answer is sum of 2 numbers: " + answer);

    } else if (operationOption == "sub"){
        const answer = subtractNumbers (num1, num2);
        console.log ("The answer is result of a reduction: " + answer);
        
    } else if(operationOption == "mul") {
        const answer = multiplyNumbers (num1, num2);
        console.log ("The answer is the product of 2 numbers: " + answer);
        

    } else if (operationOption == "div"){
        const answer = divideNumbers (num1, num2);
        console.log ("The answer is the division of 2 numbers: " + answer);

    }

}