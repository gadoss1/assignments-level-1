// Wanted Functions with Divs and Forms
const add = document.getElementById("form1")
const subtract = document.getElementById("form2")
const multiply = document.getElementById("form3")

// Submit event

form.addEventListener("submit", function(event){
    event.preventDefault()
    
    // Add Numbers and Result Functions
    const adds = ([form1.num1.value], [form1.num2.value])
    const subtracts = ([form2.num1.value] - [form2.num1.value])
    const muliplying = ([form3.num1.value] * [form3.num2.value])
    form1.num1.value = ""
    form1.num2.value = ""
    form2.num1.value = ""
    form2.num2.value = ""
    form3.num1.value = ""
    form3.num2.value = ""
    let addResult = adds.value
    let subtractResult = subtracts.value
    let multiplyResult = muliplying.value
    console.log(addResult)
    console.log(subtractResult)
    console.log(multiplyResult)
    
    // Create h1
    const h1 = document.createElement('h1')
    // 2. Math Function Results
    h1.textContent = addResult, subtractResult, multiplyResult
    // 3. Append values to DOM body
    document.getElementsByTagName("body")[0].append(h1)
})