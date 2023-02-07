// Loops and Arrays exercise //

// Constant to perform redline-sync in terminal node for JS commands //
// const redlineSync = require("readline-sync");

// Computer for loop search with console log //
var officeItems = ["stapler", "monitor", "computer", 
"desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var computers = 0;

// Count how many computers there are in array of object

for (var i = 0; i < officeItems.length; i++){
    if (officeItems[i] === "computer") { 
    console.log ("I have many computers!");
    }
    else if (officeItems[i] != "computer") {
        console.log ("I have other office items.")
    }

};

// Object loop //
var custsForMadMax = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

// Person old enough to see Mad Max Fury Road //
  for (i = 0; i < custsForMadMax.length; i++) {
    if (custsForMadMax[i].age >= 18) {
        console.log (custsForMadMax[i].name + " is old enough to see Mad Max Fury Road." + " They are " + custsForMadMax[i].age + " years old.");
      } 
      else if (custsForMadMax[i].age <= 18) {
        console.log (custsForMadMax[i].name + " isn't old enough to see Mad Max Fury Road." + " They are " + custsForMadMax[i].age + " years old.");
      }
}

//### **Optional bonus challenges for this problem**

//**#1**

//Log to the console a personalized message like:

//`Mike is not old enough to see Mad Max`

//or

//`Madeline is old enough to see Mad Max.`**#2**