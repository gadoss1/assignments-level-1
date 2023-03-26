// ### **1) Turn an array of numbers into a total of all the numbers**

const nums = [1,2,3]

const numSum = nums.reduce((total, amount) => total + amount)

console.log(numSum); // 6


// ### **2) Turn an array of numbers into a long string of all those numbers.**

const numsArr = [1,2,3]

const numStr = numsArr.reduce((accumulator, string) => {
    return accumulator += string
}, "")

console.log(numStr) // "123"

// ### **3) Turn an array of voter objects into a count of how many people voted**

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const amountVoted = voters.reduce(function(final, voters){
    if(voters.voted){
        final++
    }
    return final
}, 0)

console.log(amountVoted) // 7

// Note: You don't necessarily have to use reduce for this, so try to think of multiple ways you could solve this.

// ### **4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once**

let wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]

const shoppingSpree = wishlist.reduce((accumulator, wishListObject) => {
    return accumulator+= wishListObject.price
}, 0)

 console.log(shoppingSpree); // 227005

// ### **5) Given an array of arrays, flatten them into a single array**

const matrix = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

const newArray = matrix.reduce((accumulator, array) => {
    return accumulator += array
}, "" + [])

 console.log(newArray) // ["1", "2", "3", true, 4, 5, 6];

 // Note: Take a look at Array.concat() to help with this one

// ### **6) Given an array of potential voters, return an object representing the results of the vote**

// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

var voter = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const numYoungVotes = voter.reduce((accumlator, voter) => {
    if (voter.age <= (18, 25) && voter.voted === true){
        accumlator++
    }
    return accumlator
}, 0)

const numYoungPeople = voter.reduce((accumlator, voter) => {
    if (voter.age >= 18 && voter.age <= 25){
        accumlator++
    }
    return accumlator
}, 0)

const numMidVotes = voter.reduce((accumlator, voter) => {
    if (voter.age >= 26 && voter.age<= 35 && voter.voted === true){
        accumlator++
    }
    return accumlator
}, 0)

const numMidPeople = voter.reduce((accumlator, voter) => {
    if (voter.age >= 26 && voter.age <= 35){
        accumlator++
    }
    return accumlator
}, 0)

const numOldVotes = voter.reduce((accumlator, voter) => {
    if (voter.age >= 36 && voter.age <= 55 && voter.voted === true){
        accumlator++
    }
    return accumlator
}, 0)

const numOldPeople = voter.reduce((accumlator, voter) => {
    if (voter.age >= 36 && voter.age <= 55){
        accumlator++
    }
    return accumlator
}, 0)

const voterResults = ("\nVoter Results: " + "\n{" + "\nnumYoungVotes: " + numYoungVotes + "\nnumYoungPeople: " + numYoungPeople + "\nnumMidVotes: " + numMidVotes + "\nnumMidPeople: "+ numMidPeople + "\nnumOldVotes: " + numOldVotes + "\nnumOldPeople: " + numOldPeople + "\n}") 

console.log(voterResults) // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/