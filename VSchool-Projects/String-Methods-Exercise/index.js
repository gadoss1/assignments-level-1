// String Methods //

// capitalizeAndLowercase("HelLo") with concat // => "HELLOhello"
const hello = "HelLo"
var helloUpCase = hello.toUpperCase();
var helloLowCase = hello.toLowerCase();
console.log (helloUpCase);
console.log(helloLowCase);
var newHelloStr = helloUpCase.concat(helloLowCase);
console.log(newHelloStr);

// string as a parameter and returns a number that is half the string's length, rounded down => Math.floor()
var stringTest = "Repeats";
const strIndex1 = stringTest.indexOf("p"); // => 2
console.log(strIndex1);

// function that uses `[slice()] and the other functions you've written 
// to return the first half of the given string.
var str = "stupid monkey";
var newStr = str.slice(0,7);
console.log(newStr);

// function that takes a string as a parameter and returns that string where the first 
// half is capitalized, and the second half is lowercase.
const upDown = newStr.toUpperCase();
console.log(upDown);
const lows = str.slice(7);
const upsDowns = lows.toLowerCase();
console.log(upDown + upsDowns);