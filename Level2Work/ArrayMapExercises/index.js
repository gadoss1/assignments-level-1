// 1. Double Numbers
const numbers = [2, 5, 10]

function doubleNumbers(numbers){
    
    let doubled = []
    let numDoubled = numbers.map(n => n*2)
    doubled.push(numDoubled)
    console.log(doubled)
    return doubled
    
}

  console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]


//*** // 2. Array of Numbers & make them strings

const nums = [2, 5, 100]

function stringItUp(numsArray){
    //let numString = numsArray.map(nums=>nums.toString())
    //return numString
    return numsArray.map(nums=>nums.toString())
}

console.log(stringItUp(nums)) // ["2", "5", "100"]


// 3. Capitalize first letter of names and lower case rest of letters
let names = ["john", "JACOB", "jinGleHeimer", "schmidt"]


  function capitalizeNames(names){
    let nameChanges = names.map(s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()).join(' ')
    return nameChanges
}

  
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])) 
  
  // Output:
  // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// 4. An Array of Strings of names

const nameAgeArr = [{
    name: "Angelina Jolie",
    age: 80,
},
{    name: "Eric Jones",
    age: 2,
},
{
    name: "Paris Hilton",
    age: 5,
},
{
    name: "Kayne West",
    age: 16,
},
{
    name: "Bob Ziroll",
    age: 100,
}]

// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

const namesOnly = nameAgeArr.map(namesObject => namesObject.name)

    console.log(namesOnly) 

// 5. Array of strings of names saying whether or not they can go to the Matrix

const matrixMovieCustomers = [{
    name: "Angelina Jolie",
    age: 80,
},
{    name: "Eric Jones",
    age: 2,
},
{
    name: "Paris Hilton",
    age: 5,
},
{
    name: "Kayne West",
    age: 16,
},
{
    name: "Bob Ziroll",
    age: 100,
}]

function matrixMovieLimit(matrixLimit){

    matrixLimit.map(function(person){
                
        if (person.age >= 17){
            console.log(`${person.name} can go to The Matrix`)
        } else if (person.age <= 16){
            console.log(`${person.name} is under age!!`)
        }
    
    })

    /*for (let i = 0; i < matrixLimit.length; i++){
        
        if (matrixLimit[i].age >= 17){
            console.log(`${matrixLimit[i].name} can go to The Matrix`)
        } else if (matrixLimit[i].age <= 16){
            console.log(`${matrixLimit[i].name} is under age!!`)
        }
    }*/

}

console.log(matrixMovieLimit(matrixMovieCustomers))

  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]

// 6. Array of names in h1s and ages in h2s

const nameAgeArray = [{
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
]




function readyToPutInTheDOM(arrayOfNameAges){
    
    const names = arrayOfNameAges.map(namesObject =>{

        return "<h1>" + namesObject.name + "</h1>" + "<h2>" + namesObject.age + "</h2>" + ","
        
    })
    
    return names

}

console.log(readyToPutInTheDOM(nameAgeArray))

  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]