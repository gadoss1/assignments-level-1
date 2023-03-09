var form = document.getElementById("airline-form")
var submit = document.getElementById("submit")

function formAlert() {
    console.log("submit")
    // Review to book flight
    let firstName = form["first-name"].value
    let lastName = form["last-name"].value
    let age = form["age"].value
    let gender = form["gender"].value
    let departing = form.elements["departing"].value
    let returning = form.elements["returning"].value
    let destination = form.elements["destination"].value
    let lastMeal = []

    if (form['The Hannibal Lecture'].checked) {
        lastMeal.push(document.getElementById('The Hannibal Lecture').value);
    }
    if (form['vegan'].checked) {
        lastMeal.push(document.getElementById('vegan').value);
    }
    if (form['Death by Wheat'].checked) {
        lastMeal.push(document.getElementById('gluten').value);
    }
    if (form['caveman'].checked) {
        lastMeal.push(document.getElementById('paleo').value);
    }
    if (form['The Willy Wonka'].checked) {
        lastMeal.push(document.getElementById('The Willy Wonka').value);
    }

    console.log(lastMeal)

    // Creates a confirmation form pop up box alert
    alert("Murderous Airlines" + "\nFirst Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nDeparting: " + departing + "\nReturning: " + returning + "\nDestination: " + destination + "\nLast Meal: " + lastMeal + "\nAwesome, now if you die, we know the information for your death certificate!")
}
submit.addEventListener("click", formAlert)