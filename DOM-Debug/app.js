// Constants for colors and list creation
let colors = ["red", "green", "blue"];
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
    let newH1 = document.createElement("h1");
    let selectOpt = document.createElement("select");

        //Add new item to list
        newDiv.textContent = userInput;
        newDiv.id = 'div';
        newH1 = userInput;
        selectOpt.textContent = "selectColor";
        
        // Loop to create and option with color change option
    for (let i = 0; i < colors.length; i++){
         const option = document.createElement("option");
         option.innerHTML = colors[i];
         option.value = colors[i];
         selectOpt.append(option);
        //  dropDown.addEventListener("change", function(e){
        //     e.target.parent.backgroundColor = e.target.value
    
        //  })
    
        //  return dropDown;

     }
        
        // Dropdown, div, h, and li appendings
        // const dropDown = createDropDown(selectOpt);
        // newDiv.append(dropDown);
        list.append(newLi);
        newDiv.append(selectOpt);
        newDiv.append(newH1);
        list.insertBefore(newLi,hr);
        newLi.append(newDiv);
    
})

// // Dropdown box option menu
// function createDropDown(selectOpt){
    
//     for (let i = 0; i < colors; i++){
//         const option = createElement("option");
//         option.innerHTML = colors[i];
//         option.value = colors[i];
//         selectOpt.append(option);
//     }
//     dropDown.addEventListener("change", function(e){
//         e.target.parent.backgroundColor = e.target.value

//      })

//      return dropDown;
// }

// // Label color change with option select
// function change(label) {
//     var red = document.getElementById('red');
//     var green = document.getElementById('green');
//     var blue = document.getElementById('blue');

//     if(e.target.value == red) {
//       red.style.color = "red";
//     } else if(e.target.value == green) {
//       green.style.color = "green";
//     } else if(e.target.value == blue) {
//       blue.style.color = "blue";
//   };
//     })

//     return dropDown;
// }

// // Creates subitem
// document.getElementById("add").addEventListener("click", function(e){
//     const subItem = createSubItem(e);
//     document.getElementById("list").appendChild(subItem);
// })


// // Create a submenu item
// function createSubItem(e){
//     const subItem = document.createElement("div");
//     var subItemValue = document.getElementById("input");
//     subItem.textContent = subItemValue;
//     const dropDown = createDropDown();
//     subItem.appendChild(dropDown);
//     subItem.setAttribute("class", "subItem");
//     return subItem;
// }
