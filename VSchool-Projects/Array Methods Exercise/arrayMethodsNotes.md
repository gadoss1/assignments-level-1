// JS Array Methods

// Full list can be found here: https://www.w3schools.com/jsref/jsref_obj_array.asp


// push - adds item(s) to the end of the array
    // arrOfFoods.push("cereal")
    // console.log(arrOfFoods)

// pop - removes item from the end of the array
    // arrOfFoods.pop()
    // console.log(arrOfFoods)

// unshift - adds item(s) to the beginning of the array
    // arrOfFoods.unshift("cereal")
    
// shift - removes item from the beginning of the array
    // arrOfFoods.shift()
    // console.log(arrOfFoods)

// concat
    // var colors1 = ["blue", "green"]
    // var colors2 = ["purple", "red"]
    // var newArr = colors1.concat(colors2)
    // console.log(newArr)
    
// indexOf
    // var pizzaIndex = arrOfFoods.indexOf("popcicle")
    // console.log(pizzaIndex)

// slice
    // var newArr = arrOfFoods.slice(1, 3)
    // console.log(arrOfFoods)

// join - Turns an array into a string
    // var name = "steve"
    // var splitName = name.split("")
    // var joinedName = splitName.join("")
    // console.log(joinedName)

// reverse
    // var name = "rick" // kcir
    // var splitName = name.split("")
    // var reversedArr = splitName.reverse()
    // var reversedName = reversedArr.join("")
    
    // var allAtOnce = name.split("").reverse().join("")
    // console.log(allAtOnce)
    
// splice - change the orignal array
    //var arrOfFoods = ["pancake", "egg", "ice cream", "pizza", "hamburger"]
    
    //arrOfFoods.splice(2, 2, "bacon", "ice cream")
    //console.log(arrOfFoods)
    
Array Methods
Arrays have a lot of methods we can use to modify an array in one way or another. Below is a list with short explanations and examples of each method.
This list does not cover the array methods that use callback functions, such as .filter() or .sort(). For that list, check out the Array Methods Continued post.
.push(item[s])
Adds one or more elements to the end of an array and returns the new length of the array.
Every line builds on the previous lines of code.
var myArray = [];

myArray.push("apple");
console.log(myArray);  // ["apple"];

myArray.push("banana");
console.log(myArray);  // ["apple", "banana"];

// Can push multiple items at once
myArray.push(1, [], {});
console.log(myArray);  // ["apple", "banana", 1, [], {}];

________________________________________
.pop()
Removes the last element from an array and returns that element. This method changes the length of the array.
var myArray = ["Mario", "Luigi", "Peach", "Toad"];
var poppedItem = myArray.pop();
console.log(poppedItem);  // "Toad"
console.log(myArray);  // ["Mario", "Luigi", "Peach"]

________________________________________
.shift()
Removes the first element from an array and returns that element. This method changes the length of the array.
var myArray = ["Mario", "Luigi", "Peach", "Toad"];
var poppedItem = myArray.shift();

console.log(poppedItem);  // "Mario"
console.log(myArray);  // ["Luigi", "Peach", "Toad"]

________________________________________
.unshift()
Adds one or more elements to the beginning of an array and returns the new length of the array.
var veggies = ["Carrots"];
veggies.unshift("Tomatoes");
console.log(veggies);  // ["Tomatoes", "Carrots"]
veggies.unshift("Kale", "Lettuce");
console.log(veggies);  // ["Kale", "Lettuce", "Tomatoes", "Carrots"]

________________________________________
.splice(startingIndex, numberToRemove[, itemsToInsert])
Changes the contents of an array by removing existing elements and/or adding new elements.
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

// remove 1 element from index 2
var removed = myFish.splice(2, 1);
// myFish is ['angel', 'clown', 'sturgeon']
// removed is ['mandarin']

// remove 0 elements from index 2, and insert 'drum'
var removed2 = myFish.splice(2, 0, 'drum');
// myFish is ['angel', 'clown', 'drum', 'sturgeon']
// removed is [], no elements removed

// remove 1 element from index 2, and insert 'trumpet'
var removed3 = myFish.splice(2, 1, 'trumpet');
// myFish is ['angel', 'clown', 'trumpet', 'sturgeon']
// removed is ['drum']

// removes 2 elements starting from index 0, and inserts 'parrot', 'anemone' and 'blue'
var removed4 = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
// myFish is ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']
// removed is ['angel', 'clown']

________________________________________
.slice(startIndex [, endIndex])
Returns a shallow (non-destructive) copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.
The second parameter is optional. If omitted, endIndex defaults through the end of the array. If provided, it specifies the non-inclusive ending point of the slice. (The item at the index of endIndex will NOT be included in the new array).
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);  // ["Orange", "Lemon"]
var citrusToEnd = fruits.slice(1);  // ["Orange", "Lemon", "Apple", "Mango"]

________________________________________
.indexOf(item)
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
var myArray = ["grape", "orange", "banana", "orange", "apple"];
var index = myArray.indexOf("orange"));
console.log(index);  // 1

var notFoundItemIndex = myArray.indexOf("kiwi");
console.log(notFoundItemIndex);  // -1

________________________________________
.lastIndexOf(item[, fromIndex])
Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex (or the end of the array if fromIndex is omitted).
var myArray = ["grape", "orange", "banana", "orange", "apple"];
var index = myArray.lastIndexOf("orange"));
console.log(index);  // 3

________________________________________
.join(separator)
Joins all elements of an array into a string and returns that string, separated by separator (or commas if separator is omitted).
var captainPlanet = ["Earth", "Fire", "Wind", "Water", "Heart"];
captainPlanet.join(" ");  // "Earth Fire Wind Water Heart"
captainPlanet.join("-");  // "Earth-Fire-Wind-Water-Heart"
captainPlanet.join();  // "Earth,Fire,Wind,Water,Heart"

________________________________________
.concat(array[s])
Used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias","Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3); // Concatenates arr1 with arr2 and arr3
console.log(myChildren);  // ["Cecilie", "Lone", "Emil", "Tobias", "Linus", "Robin", "Morgan"]

________________________________________
.reverse()
Reverses the elements in an array in place, modifying the original array.
var fruits = ["apple", "banana", "kiwi", "orange"];
fruits.reverse();

console.log(myArray);  // ["orange", "kiwi", "banana", "apple"];

________________________________________

