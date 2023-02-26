var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");
//var query = document.querySelector();

function formAlert() {
    console.log("submit");
    var firstName = form["first-name"].value;
    var lastName = form["last-name"].value;
    var age = form["age"].value;
    var gender = form["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = [];
    if (form['vegan'].checked) {
        diet.push(document.getElementById('vegan').value);
    }
    if (form['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }

    console.log(diet);

    // Creates a confirmation form pop up box alert
    alert("This Page Says:" + "First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}
submit.addEventListener("click", formAlert); //No pop up alert box. Need to fix.

