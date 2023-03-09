// Wanted Functions with Divs and Forms
const addBtn = document.getElementById("addBtn")
const subtractBtn = document.getElementById("subtractBtn")
const multiplyBtn = document.getElementById("multiplyBtn")

addBtn.addEventListener("click", function(event){
    event.preventDefault()    

        //grab the value of the inputs
        const num1 = document.getElementById("num1")
        const num2 = document.getElementById("num2")

        //use parseInt to change the string into a number
        //add the numbers together
        const addNum = parseInt(num1.value) + parseInt(num2.value)
        console.log(addNum, "adding")
        //append it

        // Create h1
        const h1 = document.createElement('h1')
        // Math Function Results
        h1.textContent = addNum
        // Append values to HTML DOM body
        document.getElementsByTagName("body")[0].append(h1)
})

subtractBtn.addEventListener("click", function(event){
    event.preventDefault()

//grab the value of the inputs
const num3 = document.getElementById("num3")
const num4 = document.getElementById("num4")

//use parseInt to change the string into a number
//add the numbers together
const subtractNum = parseInt(num3.value) - parseInt(num4.value)
console.log(subtractNum, "subtracting")
//append it

// Create h1
const h1 = document.createElement('h1')
// Math Function Results
h1.textContent = subtractNum
// Append values to HTML DOM body
document.getElementsByTagName("body")[0].append(h1)
})   

multiplyBtn.addEventListener("click", function(event){
    event.preventDefault()
//grab the value of the inputs
const num5 = document.getElementById("num5")
const num6 = document.getElementById("num6")

//use parseInt to change the string into a number
//add the numbers together
const multiplyNum = parseInt(num5.value) * parseInt(num6.value)
console.log(multiplyNum, "multiplying")
//append it

// Create h1
const h1 = document.createElement('h1')
// Math Function Results
h1.textContent = multiplyNum
// Append values to HTML DOM body
document.getElementsByTagName("body")[0].append(h1)

})
    