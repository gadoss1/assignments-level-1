//Function that takes num1 and num2 and returns whether num1 is divisible by num2.

function myFunction() {
    let a = Number(document.getElementById("txt1").value);
    let b = Number(document.getElementById("txt2").value);

    const isDivisible =
        (dividend, divisor) => dividend % divisor === 0;
    if (a % b === 0) {
        document.getElementById("divisible").innerHTML =
            a + " is divisible by " + b;
            console.log("Is divisible");
    } else {
        document.getElementById("divisible").innerHTML =
            a + " is not divisible by " + b;
            console.log("Isn't divisible");
    }
}