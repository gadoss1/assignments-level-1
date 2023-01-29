// Constants for colors and list creation
const colors = ["red", "blue", "green"];
const list = document.querySelector("list");
const form = document.addList;

// Adding items from input and add item button
form.addEventListener("click", function(e) {
    e.preventDefault();
    
    const userInput = form.title.value;
    form.title.value = "";
    let newLi = document.createElement("li");
    let newDiv = document.createElement("div");

        //Add new item to list
        newDiv.textContent = userInput;
        newDiv.id = 'div';
        list.append(newLi);
        list.insertBefore(newLi,hr);
        newLi.append(newDiv);
    
})

document.getElementById("add").addEventListener("click", function(e){
    const subItem = createSubItem(e);
    document.getElementById("list").appendChild(subItem);
})

function createDropDown(){
    const dropDown = document.createElement("select");
    for (let i = 0; i < colors; i++){
        const option = createElement("option");
        label.style.color = colors;
        option.innerHTML = colors[i];
        option.value = colors[i];
        dropDown.append(option);
    }
    dropDown.addEventListener("change", function(e){
        e.target.parent.backgroundColor = e.target.value
    })
    return dropDown;
}

function createSubItem(e){
    const subItem = document.createElement("div");
    var subItemValue = document.getElementById("input");
    subItem.textContent = subItemValue;
    const dropDown = createDropDown();
    subItem.appendChild(dropDown);
    subItem.setAttribute("class", "subItem");
    return subItem;
}
