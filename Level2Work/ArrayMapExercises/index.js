// Double Numbers #1
const numbers = [2, 5, 10]

function doubleNumbers(numbers){
    
    let doubled = []
    let numDoubled = numbers.map(n => n*2)
    doubled.push(numDoubled)
    console.log(doubled)
    return doubled
    
}

  console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]


// Array of Numbers & make them strings #2

const nums = [2, 5, 100]

function stringItUp(nums){
    const numString = nums.map((String) => {
        return numString
}
    console.log(stringItUp) // ["2", "5", "100"]


// Capitalize first letter of names and lower case rest of letters #3
let names = ["john", "JACOB", "jinGleHeimer", "schmidt"]


  function capitalizeNames(names){
    let nameChanges = names.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()).join(' ')
    return nameChanges
}

  
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])) 
  
  // Output:
  // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// An Array of Strings of names #4

function namesOnly(arr){
    // your code here
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// Array of strings of names saying whether or not they can go to the Matrix #5

function makeStrings(arr){
    // your code here
  }
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]

// Array of names in h1s and ages in h2s

function readyToPutInTheDOM(arr){
    // your code here
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]