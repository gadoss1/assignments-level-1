// DJ-JS-Assignment //

const square = document.querySelector(".square");

document.body.style.backgroundColor = "grey";

square.addEventListener("mouseover", function(){
    square.style.backgroundColor= "turquoise";
    console.log ("Back to original");
})

square.addEventListener("click", function () {
square.style.backgroundColor = "blue";
console.log ("DJ Blue");
})

square.addEventListener("mousedown", function(){
    square.style.backgroundColor= "red";
    console.log ("DJ Red");
})

square.addEventListener("mouseleave", function(){
    square.style.backgroundColor= "yellow";
    console.log ("DJ Yellow");
})

square.addEventListener("dblclick", function(){
    square.style.backgroundColor= "green";
    console.log ("DJ Green");
})

document.body.addEventListener("scrollover", function(){
    square.style.backgroundColor= "orange";
    console.log ("DJ Orange");
})


document.body.addEventListener("keyDown", e => {
    if(e.key === "r") {
        square.style.backgroundColor = "red"
    } else if (e.key === "g") {
        square.style.backgroundColor = "green"
    } else if (e.key === "o") {
        square.style.backgroundColor = "orange"
    } else if (e.key === "y") {
        square.style.backgroundColor = "yellow"
    } else if (e.key === "b") {
        square.style.backgroundColor = "blue"
    } else if (e.key === "t") {
        square.style.backgroundColor = "turquoise"
    }
    console.log ("Color Pressed");
})