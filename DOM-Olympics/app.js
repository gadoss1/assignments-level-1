// Qualifier //

// Access the header element and add the required text
document.getElementById("header").style.textAlign = "center"
document.getElementById("header").style.fontSize = "50px"
let header = document.getElementById("header");
header.innerHTML = "JavaScript made this!!";
let topHeader = document.querySelector("header#header");
topHeader.innerHTML += "</br><span id='firstSpan'> Greg Doss </span><span id='secondSpan'>made this JavaScript!</span>"
document.getElementById("firstSpan").style.color = "gold";
document.getElementById("firstSpan").style.fontSize = "30px";
document.getElementById("secondSpan").style.fontSize = "30px";
body.style.color = "black";

// Bronze level //

// Write some custom JavaScript to automatically change the words of the conversation to something fun and good.
// Write some JavaScript that will wait until the user clicks the "clear" button, and then clears out all conversation.
let conversation = document.querySelectorAll("div.messages > div");
console.log(conversation);
// This changes the text by editing the text content of the div (with class "messages") as an array
conversation[0].textContent = "Hey, Howz it?"
conversation[1].textContent = "I'm good, how you bruh?"
conversation[2].textContent = "Raving like one wave"
conversation[3].textContent = "You like go catch some waves?"
conversation[4].textContent = "Shoots bruh, let's go ova to Pipeline!"
conversation[5].textContent = "Jump in da kawela and we go!"

//This clears the chat
let clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click", clearMessages)
function clearMessages(){
    let messages = document.querySelector("div.messages");
    messages.innerHTML = "";
}

// Silver //
//let theme = document.querySelector("theme-drop-down");

// Change the theme color
//theme.addEventListener("change", function(){
    //let select = e.target;
    //let value = theme.select.input;
    //body.label.select.style.color = value;
    //console.log(value);
//});

// Gold Level //

// Allows adding of new messages via send button function
let messages = document.querySelector("div.messages")

function sendMessage(event){
        event.preventDefault();
        var addMessage = document.createElement("div");
        addMessage.setAttribute("class", "message left");
        messages.append(addMessage);
        let userMessage = document.getElementById("input").value;
        addMessage.append(userMessage);
        document.getElementById("input") = "";
    }

var form = document.querySelector("[name='message']");
form.addEventListener("submit", sendMessage)