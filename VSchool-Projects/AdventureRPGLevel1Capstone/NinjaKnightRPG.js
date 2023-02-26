// Ninja Knight RPG //

// Constant to perform redline-sync in terminal node for JS commands //
const redlineSync = require("readline-sync");

const players = readline.question("How many players? ");
const name = readline.question("What is your name? " +  "What is your name? " + "What is your name? " + "What is your name? " );

console.log(`${players}`);
console.log(`Konichiwa & Hagimamashite, ${name} + ! + Time to fight like a Ninja Knight!`);

let hp = 100

function walk(){
    const willFight = prompt('(f) for fighting, (i) for checking inventory')
    if(willWalk === "f"){
        fight()
    } else if (willWalk === "i"){
        checkInventroy()
    } 
}

function fight(){
    const winner = selectWinner()
}

while(hp > 0){
    walk()
}