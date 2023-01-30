// Constants for colors and list creation
let colors = ["red", "blue", "green"];
const list = document.getElementById("list");
const form = document.getElementById("addList");
const hr = document.getElementById("hr");

// Adding items from input and add item button
form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Save data to new list item
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

// Creates subitem
document.getElementById("add").addEventListener("click", function(e){
    const subItem = createSubItem(e);
    document.getElementById("list").appendChild(subItem);
})

// Dropdown box option menu
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

// Create a submenu item
function createSubItem(e){
    const subItem = document.createElement("div");
    var subItemValue = document.getElementById("input");
    subItem.textContent = subItemValue;
    const dropDown = createDropDown();
    subItem.appendChild(dropDown);
    subItem.setAttribute("class", "subItem");
    return subItem;
}
