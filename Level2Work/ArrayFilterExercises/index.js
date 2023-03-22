//### **1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.**

const numArray = [3, 6, 8, 2]
const expectedResult = numArray.filter(numArray => numArray >= 5)

// test
console.log(expectedResult); /// [6, 8]


//### **2) Given an array of numbers, return a new array that only includes the even numbers.**
const numsArray = [3, 6, 8, 2]
const evensArr = numsArray.filter(numsArray => numsArray % 2 === 0)

// test
console.log(evensArr); /// [6, 8, 2]


//### **3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length**

const wordStrArr= ["dog", "wolf", "by", "family", "eaten", "camping"]

const fiveCharactersOrFewerOnly = wordStrArr.filter((wordStrArr) => wordStrArr.length <= 5)

// test
console.log(fiveCharactersOrFewerOnly); // ["by", "dog", "wolf", "eaten"]



// ### **4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.**

const memberList = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

const illuminatiMembers = memberList.filter (memberList => memberList.member === true)

// test
console.log(illuminatiMembers)
// =>
//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Paris Hilton', member: true },
//  { name: 'Bob Ziroll', member: true } ]



//### **5) Make a filtered list of all the people who are old enough to see *The Matrix* (older than 18)**

const movieCustomers = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
    ]

const ofAgeTheMatrix = movieCustomers.filter (movieCustomers => movieCustomers.age > 18)

  // test
console.log(ofAgeTheMatrix);
  // =>
  //[ { name: 'Angelina Jolie', age: 80 },
  //  { name: 'Bob Ziroll', age: 100 } ]