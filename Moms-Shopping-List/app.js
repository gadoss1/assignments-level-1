// Constants to add item to list
const form = document.addItem;
const list = document.getElementById("list");
const hr = document.getElementById("hr");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const userInput = form.title.value;
    form.title.value = "";
    let newLi = document.createElement("li");
    let newDiv = document.createElement("div");
    let editButton = document.createElement("button");
    let clearsButton = document.createElement("button");
    
    //Add new item to list
    newDiv.textContent = userInput;
    editButton.textContent = "edit";
    clearsButton.textContent = "X",
    clearsButton.style.marginLeft = "5px";

    list.append(newLi);
    list.insertBefore(newLi, hr);
    newLi.append(newDiv);
    newLi.append(editButton);
    newLi.append(clearsButton);

    // Removes item from list
    clearsButton.addEventListener("click", () => {
        newLi.removeChild(newDiv);
        newLi.removeChild(editButton);
        newLi.removeChild(clearsButton);
    })

    // Save button upon edit input changes
    editButton.addEventListener("click", () => {
        newDiv.innerHTML += "<input name = 'newInput'/><button id = 'save'>save</button>";
        
        let saveButton = document.getElementById("save-button");
        
        saveButton.addEventListener("click", () => {
            let updatedDiv = document.createElement("div");
            updatedDiv.textContent = newDiv;
            input.oninput = function () {
                li.innerHTML = input.value;
            };
        })
    }) 
})
