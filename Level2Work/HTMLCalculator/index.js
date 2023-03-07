// Wanted Functions with Divs and Forms
const add = document["form1"]
const subtract = document["form2"]
const multiply = document["form3"]

// Submit event

form.addEventListener("submit", function(event){
    event.preventDefault()
        
    const adds = [form1.num1.value] + [form1.num2.value]
    const subtracts = [form2.num1.value] - [form2.num1.value]
    const muliplying = [form3.num1.value] * [form3.num2.value]
    form.num1.value = ""
    form.num2.value = ""
    let addResult = adds.value
    let subtractResult = subtracts.value
    let multiplyResult = muliplying.value
    
    // 1 . <h1></h1>
    const h1 = document.createElement('h1')
    // 2. <h1>Math Results</h1>
    h1.textContent = addResult, subtractResult, multiplyResult
    // 3. Append
    document.getElementsByTagName("body")[0].append(h1)
})