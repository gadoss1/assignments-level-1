// DJ-JS-Assignment //

const square = document.querySelector(".square");

document.body.style.backgroundColor = "grey";

square.addEventListener("mouseover", function(){
    square.style.backgroundColor= "blue";
    console.log ("Back to original");
})

square.addEventListener("mousedown", function(){
    square.style.backgroundColor= "red";
    console.log ("DJ Red");
})
square.addEventListener("mouseup", function(){
    square.style.backgroundColor= "yellow";
    console.log ("DJ Yellow");
})
square.addEventListener("dblclick", function(){
    square.style.backgroundColor= "green";
    console.log ("DJ Green");
})
document.body.addEventListener("wheel", function(){
    square.style.backgroundColor= "orange";
    console.log ("DJ Orange");
})

square.addEventListener("mouseleave", function(){
    square.style.backgroundColor= "turquoise";
    console.log ("Original Color");
})

document.body.addEventListener("keydown", e => {
    if(e.key === 'r') {
        square.style.backgroundColor = 'red'
    } else if (e.key === 'g') {
        square.style.backgroundColor = 'green'
    } else if (e.key === 'o') {
        square.style.backgroundColor = 'orange'
    } else if (e.key === 'y') {
        square.style.backgroundColor = 'yellow'
    } else if (e.key === 'b') {
        square.style.backgroundColor = 'blue'
    }
    console.log ("Color Pressed");
})

document.body.addEventListener("keyup", e=> {
    square.style.backgroundColor= "turquoise";
    console.log ("Origin Color");
})