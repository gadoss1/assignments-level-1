// Ninja Knight RPG //

// Constant to perform redline-sync in terminal node for JS commands //
const redlineSync = require("readline-sync");

const players = readline.question("How many players? ");
const name = readline.question("What is your name? " +  "What is your name? " + "What is your name? " + "What is your name? " );

console.log(`${players}`);
console.log(`Konichiwa & Hagimamashite, ${name} + ! + Time to fight like a Ninja Knight!`);

let hp = 100

function choose(){
    const choice = readline.prompt('(c) for health points, (f) for fighting, (h) for heal, (i) for checking inventory, (p) for print, (r) for run, (w) for walk, ');
    console.log(choice);
    if(choose === "f"){
        fighting();
    } else if (choose === "i"){
        checkInventory();
    } else if (choose === "w"){
        walk();
    } else if (choose === "h"){
        heal();
    } else if (choose === "c"){
        hp();
    } else if (choose === "p"){
        print();
    } else if (choose === "r"){
    }else {
        walk ();
    }
}

function fight(){
    const winner = selectWinner()
    if(winner === "hero"){
        walk()
    }
}

walk()