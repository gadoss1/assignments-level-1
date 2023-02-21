// Escape Room Assignment //

// Consts for Escape Room
const readline = require("readline-sync");
const name = readline.question("Welcome to your doom in the Ripper's escape room! What is your name? ");
const age = readline.question("${name}, are you 17 yrs old and older to play? Y/N: ")
const death = readline.question("Did you know you need the keys? Y/N: ");
const keys = readline.question("Do you have the keys? Y/N: ");
const spikeHandHole = readline.question("Would you like to put your hand in the hole? Y/N: ")
const door = readline.question("Do you want to open the door? Y/N: ");
const escape = "Welcome to your freedom! Game Over!";
const playAgain = readline.question("Play again? Y/N: ");
const escapeRoom = ();

// Printed Outputs
console.log(name);
console.log(age);
console.log(spikeHandHole);
console.log(keys);
console.log(death);
console.log(door);

// Inputs and Logic
while (escapeRoom){

if (age = 'Y'){
    console.log("Please start the game.");
    else if (age == 'N') {
        console.log("You are not old enough to play.");
    }

}

if (spikeHandHole == 'Y'){
    console.log("Time to die and bleed out! Muhahah!" + playAgain);
    else if (spikeHandHole == 'N'){
        console.log("Good choice! Now go get the keys!");
    }
}

if (keys == 'Y');
    console.log("Please proceed to the door.");
    else if (keys = 'N' && door == 'Y'){
    console.log("You shall not pass!");
    }

if (door = 'Y' + keys == 'Y'){
    console.log(escape && playAgain);
    else if (door = 'N' && keys == 'N'){
    console.log("You need the key to escape your doom!");
    }
}
}
