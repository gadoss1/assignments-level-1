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


// Label color change with option select
function changeColor() {
    var red = document.getElementById('red');
    var green = document.getElementById('green');
    var blue = document.getElementById('blue');

    if(e.target.value == red) {
      red.style.color = "red";
    } else if(e.target.value == green) {
      green.style.color = "green";
    } else if(e.target.value == blue) {
      blue.style.color = "blue";
    } else  {
      alert("There was an error!");
      }
  };

      <select onchange="changeColor();" class="colors" id="rgb">
        <option id="red" value="Red">Red</option>
        <option id="green" value="Green">Green</option>
        <option id="blue" value="Blue">Blue</option>
      </select>