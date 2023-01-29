form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const userInput = form.title.value;
    form.title.value = "";
    let newLi = document.createElement("li");
    let newDiv = document.createElement("div");
    
    //Add new item to list
    newDiv.textContent = userInput;
    newDiv.id = 'div';

    list.append(newLi);
    list.insertBefore(newLi, hr);
    newLi.append(newDiv);
    newLi.append(editButton);
    newLi.append(clearsButton);
