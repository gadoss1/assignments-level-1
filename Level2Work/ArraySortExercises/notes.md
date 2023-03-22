# .forEach
    Returns: Undefined 
    Purpose: Used in place of a for-loop
        Caveat: For-loops allow you to customize where the loop starts, stops, and increments by.
                forEach will always loop the entire length of the array.
                
# .find()
    Returns: The first item it finds in the array that matches your criteria
    Purpose: Finding an item in an array
    
# .findIndex()
    Returns: The index number of the first item it finds in the array that matches your criteria
    Purpose: Finding the index number of an item in an array

const arr = [1, 2, 3, 4, 5, 6, 7, 8]



// .forEach
// const newArr = []

// arr.forEach(num => num % 2 === 0 && newArr.push(num))

// console.log(newArr)


// .find()
// const result = users.find(function(user){
//     if(user.name === "julie"){
//         return user
//     }
// })

// console.log(result)


const users = [
    { name: "joe" },
    { name: "julie" },
    { name: "rick" }
]

// .findIndex()
const userIndex = users.findIndex(function(user){
    if(user.name === "julie"){
        return true
    }
})

console.log(userIndex)

------------------------------------------------------------------------------------------------------------
# .some()
    Returns: Returns true if at least one item in the array matches your criteria, false otherwise
    Purpose: To see if something exists in an array
    

# .every()
    Returns: Returns true if EVERY item in the array matches your criteria, false otherwise.
    Purpose: To see if Everything in an array matches your criteria

const names = ["Jack", "John", "Jill", "Joseph", "Jackie", "Steve"]

// .some()
// const result = names.some(function(name){
//     if(name[0] === "S"){
//         return true
//     }
// })

// console.log(result)

// .every()
const result = names.every(name => name[0] === "J")

console.log(result)
-----------------------------------------------------------------------------------------------------------

# .sort()
    Returns: The array sorted but sort also mutates the original array, so capturing the returned value is not necessary.
    Purpose: To sort an unsorted array of items.
    
const arr = [34, 6, 22, 1, 6, 44, 3, 64, 234, 5]

// .sort()

arr.sort((a, b) => a - b)

console.log(arr)
