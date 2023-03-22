# .reduce()
    Returns: Whatever you want it to! (See video for explanation)
    Purpose: Take an array of data and Reduce it into a smaller or completely different data set.

// .reduce()

// 1 - reduce the array of numbers into a sum of all the numbers
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result1 = nums.reduce(function(final, num){
//     final += num
//     return final
// })

// console.log(result1)


// 2 - reduce the users to an array of strings of the user's first and last names
const users = [
    { fName: "joe", lName: "smithy" },
    { fName: "tina", lName: "johnson" },
    { fName: "rick", lName: "sanchez" }
]

// ["joe smithy", "tina johnson", "rick sanchez"]

// const result = users.reduce(function(final, user){
//     final.push(user.fName + " " + user.lName)
//     return final
// }, [])

// console.log(result)




// 3 - reduce the array into a count of how many people voted
const voters = [
    { name: "steve", voted: true },
    { name: "janet", voted: true },
    { name: "rebecca", voted: false },
    { name: "harvey", voted: true },
]

// const voteCount = voters.reduce(function(final, voter){
//     if(!voter.voted){
//         final++
//     }
//      return final
// .reduce()

// 1 - reduce the array of numbers into a sum of all the numbers
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result1 = nums.reduce(function(final, num){
//     final += num
//     return final
// })

// console.log(result1)


// 2 - reduce the users to an array of strings of the user's first and last names
const users = [
    { fName: "joe", lName: "smithy" },
    { fName: "tina", lName: "johnson" },
    { fName: "rick", lName: "sanchez" }
]

// ["joe smithy", "tina johnson", "rick sanchez"]

// const result = users.reduce(function(final, user){
//     final.push(user.fName + " " + user.lName)
//     return final
// }, [])

// console.log(result)




// 3 - reduce the array into a count of how many people voted
const voters = [
    { name: "steve", voted: true },
    { name: "janet", voted: true },
    { name: "rebecca", voted: false },
    { name: "harvey", voted: true },
]

// const voteCount = voters.reduce(function(final, voter){
//     if(!voter.voted){
//         final++
//     }