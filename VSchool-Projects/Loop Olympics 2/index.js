// Loop Olympics 2- Nested Loops Practice Exercise

// Preliminaries //

// Vars to make for loops
const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const numArray1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Reverse display const for numArray
const reversed = numArray1.reverse();

const fruit = ["banana", "orange", "apple", "kiwi"];

// For loops to console writes
for (var i = 0; i < numArray.length; i++){
    console.log(numArray[i]);

}

// Expected output display log [9-0]
for (var i = 0; i < reversed.length; i++){
    console.log(reversed[i]);

}

for (var i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}


// Bronze //

var numbers = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

var numbersArray =[];

const centNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
                10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
                30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
                40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
                50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
                60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
                70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
                80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
                90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

const fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"];

// For loops and pushes


for (var i = 0; i < centNums.length; i++) {
    if (centNums % 2 === 0);
    console.log(centNums[i]);
    
}

for (var i = 0; i < numbers.length; i++) {
    const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
    console.log(every_nth([numbers[i]], 2));

}

for (var i = 0; i < fruits.length; i++) {
    const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
    console.log(every_nth([fruits[i]], 1));

}

// Silver //

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
  // ["Harrison Ford", "Vladimir Putin"] // names
  // ["Singer", "Entertainer"] // occupations

  for (var i = 0; i < peopleArray.length; i++) {
        console.log (peopleArray[i].name);

}


// Gold //

var grid1 = [[0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]];

var grid2 = [[0, 0, 0],
            [1, 1, 1],
            [2, 2, 2]];

var grid3 = [[0, 0, 0],
            [1, 1, 1],
            [2, 2, 2]];

// For loops for matrix grid mimic in console log

for (var i = 0; i < grid1.length; i++) {
    for (var j = 0; j < grid1.length; j++) {
    console.log (grid1[i][j]);
    console.log (grid1[i][j]);
    console.log (grid1[i][j]);
    }
}

for (var i = 0; i < grid2.length; i++) {
    for (var j = 0; j < grid2.length; j++) {
    console.log (grid2[i][j]);
    }
}

for (var i = 0; i < grid3.length; i++) {
    for (var j = 0; j < grid3.length; j++) {
    console.log (grid3[i][j]);
    }
}
