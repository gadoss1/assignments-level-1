// Variables //
const custInvoice = document.getElementById("invoice")
const grandTotal = document.getElementById("grandTotal")
const goombaPrice = document.getElementById


function formAlert() {
    console.log("submit")
    // Invoice-Quote
    let dateOfService = invoice.elements["dateOfService"].value
    let name = invoice["name"].value
    let address = {Street: invoice["street"].value,
                   Location:invoice["location"].value,
                    }
    let email = invoice["email"].value
    let phoneNumber = invoice["phone"].value
    let destination = invoice.elements["destination"].value
    let lastMeal = []

    // Creates a confirmation form pop up box alert
    alert("Mario's Pest Control" +  "\nDate of Service: " + dateOfService + "\nName: " + name + "\nAddress: " + address + "\nEmail Address: " + email + "\nPhone #: " + phoneNumber + "\nGoomba Total Price: " + goombaTotal + "\nBob-Ombs Total Price: " + bobOmsTotal + "\nCheep Cheep Total Price: " + cheepCheepTotal + "\nInvoice/Quote Grand Total: "+ grandTotal + "\nThank you for allowing Mario's Pest Service to take care of your pests!")
}
grandTotal.addEventListener("click", formAlert)