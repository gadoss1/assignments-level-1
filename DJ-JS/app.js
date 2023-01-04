//DJ-JS-Assignment

function myFunction(DJBlue){
    console.log("They changed to blue!");
}

document.getElementById("DJBlue").addEventListener('hover', function(color= blue){
    console.log("Hover Blue!");

})

function myFunction(DJRed){
    console.log("They changed to red!");
}

document.getElementById("DJRed").addEventListener('hold', function(color= red){
    console.log("Hold Red!");

})

function myFunction(DJYellow){
    console.log("They changed to yellow!");
}

document.getElementById("DJYellow").addEventListener('release', function(color= green){
    console.log("Released Yellow!");

})

function myFunction(DJGreen){
    console.log("Doubled up on green!");
}

document.getElementById("DJGreen").addEventListener('doubleclick', function(color= green){
    console.log("Clicked twice for Green!");

})

function myFunction(DJOrange){
    console.log("Scrolling up orange!");
}

document.getElementById("DJOrange").addEventListener('wheel', function(color= orange){
    console.log("Scrolling stroll for orange!");

})

function myFunction(DJLetter){
    console.log("Changed letter by first letter of color!");
}

document.getElementById("DJLetter").addEventListener('press', function(color= blue, red, yellow, green, orange){
    console.log("Color changed by color's first initial!");

})