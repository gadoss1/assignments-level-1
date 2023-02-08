// Loop Olympics 2- Nested Loops Practice Exercise

// Preliminaries //

// Vars to make for loops
const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const fruit = ["banana", "orange", "apple", "kiwi"];

// For loops to console writes
for (var i = 0; i < numArray.length; i++){
    console.log(numArray[i]);

}

for (var i = 9; i < numArray.length; i++){
    console.log(numArray[i] <= 9);

}

for (var i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}


// Bronze //

var numbers = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

const centNums = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
                [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
                [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
                [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
                [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
                [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
                [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
                [80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
                [90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]];

const fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"];

var fruitArray = [];

// For loops and pushes

for (var i = 0; i < numbers.length; i++) {

}

for (var i = 0; i < centNums.length; i++) {
    for (var j = 0; j < centNums.length; j++){
    if (centNums[j] % 2 === 0);
    console.log(centNums[i][j]);
    }
}

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);

}