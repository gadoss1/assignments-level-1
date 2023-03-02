// Ninja Knight RPG //

// Constant to perform redline-sync in terminal node for JS commands //
const readlineSync = require("readline-sync");

// Game start information
const name = readlineSync.question("Please enter a name: " );
console.log(`Konichiwa & Hagimamashite, brave ${name}! Time to fight like a couragous Ninja Knight!`);

//Press start.
const start = readlineSync.keyIn(`${name} please press 1 to start.`, {limit: '$<1>'});
let pressStart = false;
if (start == 1)
{
    console.log("------------------------------------ \nIt is a stormy and dreary night. You're standing on a dimly lit road between two villages. Dangerous enemies plague this area! Be careful!");
    pressStart = true;
}

let qi = 100

function game()
{
    while (pressStart == true && qi > 0)
    {

//RPG Variables
const enemies = ["ronin", "ninja", "henchman", "daimyo", "sumo", "archer", "shogun boss", "emperor", "police officer", "onna-musha", "possessed warrior monk"];
const treasure = ["Satchel of Mon", "Gold", "Potion", "Lucky Charm", "Set of Dice", "Enchanted Shamisen", "Magical Hand Fan"];
const weapons = ["Kunai", "Tanto", "Bo", "Shiba Inu", "Sword", "Wakazashi", "Sai", "Explosives", "Smoke Bomb", "Bow with Flaming Arrows"];
let inventory = [];
let hasHealed = false;
let killNum = 0;

//Randomized Variables.
let pickUp = treasure[(Math.floor(Math.random() * treasure.length))];
let weapon = weapons[(Math.floor(Math.random() * weapons.length))];
let enemyHealth = Math.floor(Math.random() * 200);
const attackPower = Math.floor(Math.random() * (30 + 15 - 3) + 15);
const enemy = enemies[Math.floor(Math.random() * enemies.length)];
const enemyPower = Math.floor(Math.random() * (20 + 20 - 2) + 12);
const heal = Math.floor(Math.random() * 70 + 1);


// Action Choices
        //Action Options.
        const perform = readlineSync.keyIn("What would you like to do? \nPress 'W' to walk. \nPress 'H' to heal. \nPress 'C' to choose your weapon. \nPress 'P' to print stats. \nPress 'X' to exit the game.", {limit: '$<w, h, c, p, x>'});

        //Game Mechanics.
        if (perform == 'x')
        {
            console.log(`------------------------------------ \n~~ ${name}'s Final Stats ~~ \nName: ${name} \nHealth: ${qi} \nKills: ${killNum} \nWeapon ${weapon} \nItems:${inventory} \n------------------------------------`);
            return(qi = 0);
        }
        else if (perform == 'p')
        {
            console.log(`------------------------------------ \n~~ ${name}'s Final Stats ~~ \nName: ${name} \nQi: ${qi} \nKills: ${killNum} \nItems:${inventory} \n------------------------------------`);
        } 
        else if (perform == 'c')
        {
            console.log(`That \n~~ ${weapon} may cause your death.`);
        }
        else if (perform == 'h')
        {
            if (qi < 100 && hasHealed == false)
            {
                qi += heal;
                console.log(`------------------------------------ \nYou healed for ${heal} hit points!`);
                hasHealed = true;
                if (qi > 100)
                {
                    qi = 100;
                }
            }
            else if (qi < 100 && hasHealed == true)
            {
                console.log(`------------------------------------ \nYou have already healed! - Qi: ${qi}`)
            }
            else if (qi >= 100)
            {
                console.log(`------------------------------------ \nYour qi is full! - Qi: ${qi}`)
            }
        }
        else if (perform == 'w')
        {
            hasHealed = false;
            let randomize = Math.random();
            if (randomize >= 0.26)
            {
                console.log("------------------------------------ \nYou are walking down the path...");
            }
            else if (randomize <= 0.25)
            {
                console.log(`------------------------------------ \nOh no! A ${enemy} just appeared! Time to fight for your life`);
                while (qi > 0 && enemyHealth > 0)
                {
                    const actions = readlineSync.keyIn("What would you like to do? \nPress 'R' to run away. \nPress 'A' to attack.", {limit: '<r, a>'});
                    if (actions == 'r')
                    {
                        const run = Math.random();
                        if (run <= 0.5)
                        {
                            console.log(`------------------------------------ \nYou couldn't get away! The ${enemy} attacks you for ${enemyPower} damage!`);
                            qi -= enemyPower;
                            if (qi <= 0)
                            {
                                console.log(`The ${enemy} has slain you! ${name} is dead!`);
                                console.log(`------------------------------------ \n~~ ${name}'s Final Stats ~~ \nName: ${name} \nQi: ${qi} \nKills: ${killNum} \nItems:${inventory} \n------------------------------------`);
                                break;
                            }
                        }
                        else if (run >= 0.51)
                        {
                            console.log("------------------------------------ \nYou got away safely!")
                            break;
                        }
                    }
                    else if (actions == 'a')
                    {
                        enemyHealth -= attackPower;
                        console.log(`------------------------------------ \nYou attacked the ${enemy} for ${attackPower} damage!`);
                        qi -= enemyPower;
                        console.log(`The ${enemy} attacked you for ${enemyPower} damage!`);
                        if (enemyHealth <= 0)
                        {
                            console.log(`You successfully killed the ${enemy}! You are a heroic and brave Ninja Knight!`);
                            killNum += 1;
                            let treasure = Math.random();
                            if (treasure <= 0.25)
                            {
                                console.log(`You found a ${pickUp} on the dead ${enemy}!`);
                                inventory.push(" " + pickUp);
                            }
                        }
                        if (qi <= 0)
                        {
                            console.log(`The ${enemy} has slain you! ${name} is dead! GAME OVER!.....`);
                            console.log(`------------------------------------ \n~~ ${name}'s Final Stats ~~ \nName: ${name} \nQi: ${qi} \nKills: ${killNum} \nItems:${inventory} \n------------------------------------`);
                            break;
                        }
                    }
                }
            }
        }
    }
}

game();