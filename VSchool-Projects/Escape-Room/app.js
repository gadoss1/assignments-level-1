// Escape Room Assignment //

//Intro and require readline-sync.
const readline = require("readline-sync");
const name = readline.question("What is your name? ");

console.log(`Welcome, ${name}, to your doom in the Ripper's Escape Room!`);

//Boolean flags tells when the player is dead, has found keys, and has pressed 1 to start. Variable for the room #.
let isAlive = true;
let hasKeys = false;
let pressStart = false;
let room = 1;
const start = readline.keyIn("Please press 1 to start!", {limit: '$<1>'});
if (start == 1)
{
    console.log("You awaken in a strange room. There is a small hole in the wall big enough for your hand. \nThe door is locked. There is a pantry at the back wall. \nWhat would you like to do?");
    pressStart = true;
}

//While loop for Room #1.
while (isAlive == true && pressStart == true && room == 1)
{
    const optionID = readline.keyIn("Press 1 to put your hand in the hole. \nPress 2 to search the pantry. \nPress 3 to open the door.", {limit: '$<1-3>'});
    if (optionID == 1)
    {
        console.log("SOMETHING PUNCTURES YOUR HAND AND YOU BLEED OUT! YOU DIED!");
        isAlive = false;
    }
    else if (optionID == 2)
    {
        if (hasKeys == true)
        {
            console.log("THERE IS NOTHING ELSE IN THE PANTRY. QUIT WASTING TIME AND SNACKING!");
        }
        else if (hasKeys == false)
        {
            console.log("YOU FOUND KEYS IN THE PANTRY!");
            hasKeys = true;
        }
    }
    else if (optionID == 3)
    {
        if (hasKeys == false)
        {
            console.log("YOU SHOULD TRY TO FIND THE KEYS FIRST!");
        }
        else if (hasKeys == true)
        {
            console.log("You find yourself in a new room. There is a purple glass door directly across from you. \nThe door has a mail slot in it. There is a pen and paper on a table in the center of the room. \nWhat would you like to do?");
            room = 2;
            break;
        }
    }
}

//While loop for room #2. --$143 to leave
while (isAlive == true && room == 2)
{
    let hitOne = false;
    let hitTwo = false;
    let hitThree = false;
    const optionID = readline.keyIn("Press 1 to look at the pictures. \nPress 2 to look at the statue. \nPress 3 to try to open the door.", {limit: '$<1-3>'});
    if (optionID == 1)
    {
        console.log("FROM LEFT TO RIGHT THE PICTURES ARE A STAR, A REVOLVER, A TIGER, A PAW PRINT.");
    }
    else if (optionID == 2)
    {
        let lookAt = true;
        console.log("At the base of the statue is a compass. An engraving on the statue's base says \n'Point me in the direction and I'll show you the door. Steer me wrong and I'll show you the floor.' \nWhat would you like to do?");
        while (lookAt == true)
        {
            const optionID2 = readline.keyIn("Press 1 to turn the statue north. \nPress 2 to turn the statue south. \nPress 3 to turn the statue east. \nPress 4 to turn the statue west. \nPress 5 to go back.", {limit: '$<1-5>'});
            if (optionID2 == 1)
            {
                if (hitOne == false && hitTwo == false && hitThree == false)
                {
                    console.log("YOU HEAR A CLICK!");
                    hitOne = true;
                }
                else
                {
                    console.log("THE STATUE EXPLODES! RIP!");
                    isAlive = false;
                    break;
                }
            }
            else if (optionID2 == 2)
            {
                if (hitOne == true && hitTwo == true && hitThree == true)
                {
                    console.log("YOU HEAR A FINAL CLICK AS THE DOOR OPENS TO THE OUTSIDE! \nCONGRATULATIONS! YOU'RE FREE!");
                    room = 4;
                    break;
                }
                else
                {
                    console.log("THE STATUE EXPLODES! RIP!");
                    isAlive = false;
                    break;
                }
            }
            else if (optionID2 == 3)
            {
                if (hitOne == true && hitTwo == true && hitThree == false)
                {
                    console.log("YOU HEAR A CLICK!");
                    hitThree = true;
                }
                else
                {
                    console.log("THE STATUE EXPLODES! RIP!");
                    isAlive = false;
                    break;
                }
            }
            else if (optionID2 == 4)
            {
                if (hitOne == true && hitTwo == false)
                {
                    console.log("YOU HEAR A CLICK!");
                    hitTwo = true;
                }
                else
                {
                    console.log("THE STATUE EXPLODES! RIP!");
                    isAlive = false;
                    break;
                }
            }
            else if (optionID2 == 5)
            {
                console.log("YOU STEP AWAY FROM THE STATUE. IT STARTS CLICKING AS IT RESETS ITSELF!");
                lookAt = false;
            }
        }
    }
    else if (optionID == 3)
    {
        console.log("THE DOOR IS LOCKED! YOU ARE FOREVER ENTOMBED AND DOOMED!");
    }
}