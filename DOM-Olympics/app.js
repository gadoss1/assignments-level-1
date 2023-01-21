// Access the header element and add the required text
let header = document.getElementById("header")
header.innerHTML = "JavaScript made this!!<br><span>Troy</span> wrote this JavaScript"; 

// Add the CSS style classes
document.querySelector("#header").classList.add("header");
document.querySelector("span").classList.add("name");

// variable for the messages DIVs
let msg = document.getElementsByClassName("message");

// Change the conversation
msg[0].textContent = "you're great",
msg[1].textContent = "thanks!",
msg[2].textContent = "you're welcome",
msg[3].textContent = "you're great",
msg[4].textContent = "you're awesome!",
msg[5].textContent = "no, you're awesome!",

// clears the chat
let clear = document.getElementById("clear-out");
clear.addEventListener("click", function(){
    let msgs = document.getElementsByClassName("messages");
    msgs[0].innerHTML = "";
});

// Change the theme
let theme = document.getElementById("theme-drop-down")
theme.addEventListener("change", function(){
    var select = e.target;
    var value = select.value;
    console.log(value);
});

// Make a new div with the input in the form box
let newMsg = document.getElementById("input").value;
let sent = document.getElementById("send-button");
form.addEventListener("send", function(event){
    event.preventDefault()
})
sent.addEventListener("click", function(){
    /*let div = document.createElement('div')
    div.textContent = newMsg;
    div.className = "message left";
    document.getElementsByClassName('messages').appendChild(div); */
    console.log('sent');
})
