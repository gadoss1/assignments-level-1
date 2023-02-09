// Array Methods //

// Vars to manipulate

var fruits = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// Remove the last item from the vegetable array.
vegetables.pop();
console.log(vegetables);

// Remove the first item from the fruit array.
fruits.shift();
console.log(fruits);

// Find the index of "orange."
var fruitsIndex = fruits.indexOf ("orange");
console.log(fruitsIndex);

// Add that number to the end of the fruit array.
fruits.push ("1");
console.log(fruits);

// Use the length property to find the length of the vegetable array.
console.log(vegetables.length);

// Add that number to the end of the vegetable array.
vegetables.push("3");
console.log(vegetables);

// Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruits.concat(vegetables);
console.log(food);

// Remove 2 elements from your new array starting at index 4 with one method.
var remFood = food.splice(4, 2,);
console.log(food);

// Reverse your array.
var revFoodLeft = food.reverse();
console.log(revFoodLeft);

// Turn array into a string and return it.
var remainArray = revFoodLeft;
var joinRemainArray = remainArray.join();
console.log(joinRemainArray);