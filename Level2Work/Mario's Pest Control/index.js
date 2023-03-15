// Global Constants
const form = document.pestControl
const grandTotal = document.getElementById("totalCost")
const grandTotalBtn = document.getElementById("submit")

// Invoice/Quote Grand Total
grandTotalBtn.addEventListener("click", function(event){
    event.preventDefault() 
    console.log(form)

    // Goombas
    let goombaAmount = form.elements["goombaQty"].value
    let goombaTotal = goombaAmount * 5
    console.log(goombaTotal)

    // Bob-Ombs
    let bobombsAmount = form.elements["bobombsQty"].value
    let bobombsTotal = bobombsAmount * 7
    console.log(bobombsTotal)

    // Cheep-Cheeps
    let cheepCheepAmount = form.elements["cheepCheepQty"].value
    let cheepCheepTotal = cheepCheepAmount * 11
    console.log(cheepCheepTotal)


    totalCost.textContent = "Total: " + (goombaTotal + bobombsTotal + cheepCheepTotal) + " Coins"
})
