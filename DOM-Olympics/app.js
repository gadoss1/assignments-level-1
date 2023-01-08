const h1 = document.createElement("h1");

h1.textContent = "JavaScript made this!!";

h1.className = "header";

h1.style.color = "gold";

document.getElementById("header").appendChild(h1);

document.getElementById("h1");

document.body.innerHTML += '<span class="name">Greg Doss</span>wrote the JavaScript!';

document.getElementByClass("name").style.textAlign = "center";

document.getElementById("h1").appendChild(subTitle);

const messages = document.getElementsByClassName("message");

messages[0].textContent = "you're great";
messages[1].textContent = "thanks!";
messages[2].textContent = "you're welcome";
messages[3].textContent = "you're great";
messages[4].textContent = "you're awesome!";
messages[5].textContent = "no, you're awesome!";

document.getElementsById("clear-button");
clear-button.addEventListner("click", function(){
    messages.textContent = "Redacted";
})

