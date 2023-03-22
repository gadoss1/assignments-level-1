// ### **1) Sort an array from smallest number to largest**

const numArr = [1, 3, 5, 2, 90, 20]

const leastToGreatest = numArr.sort((a, b) => a - b)

console.log(leastToGreatest); // [1, 2, 3, 5, 20, 90]



// ### **2) Sort an array from largest number to smallest**

const numsArr = [1, 3, 5, 2, 90, 20]

const greatestToLeast = numArr.sort((a, b) => b - a)

console.log(greatestToLeast); // [90, 20, 5, 3, 2, 1]


// ### **3) Sort an array from shortest string to longest**

const wordStrArr = ["dog", "wolf", "by", "family", "eaten"]

const lengthSort = wordStrArr.sort ((a,b) => a.length - b.length)

console.log(lengthSort); // ["by", "dog", "wolf", "eaten", "family"]


// ### **4) Sort an array alphabetically**
const wordArr = ["dog", "wolf", "by", "family", "eaten"]

const alphabetical = wordArr.sort()

console.log(alphabetical); // ["by", "dog", "eaten", "family", "wolf"]


// ### **5) Sort the objects in the array by age**

const objectArr = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

const byAge = objectArr.sort ((a, b) => a.age - b.age)

    console.log(byAge);
  // => [ { name: 'Misunderstood Observer', age: 2 },
  //  { name: 'Quiet Samurai', age: 22 },
  //  { name: 'Unlucky Swami', age: 77 },
  //  { name: 'Arrogant Ambassador', age: 100 } ]