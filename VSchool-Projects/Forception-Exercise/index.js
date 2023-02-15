// Forception Exercise //

const people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
const alphabet = "abcdefghijklmnopqrstuvwxyz"

//Function for loop nesting and concat-join-split-forcechangeproperty
function forception(people, alphabet) {
  let newArr = []; //creates new empty array
  for (var i = 0; i < people.length; i++) {
    let modPeople = (people[i] + ":").split().join(); //concats-splits-joins people at [i]
    newArr.push(modPeople);
    for (var j = 0; j < alphabet.length; j++) {
      //mods css style, splits-joins people at [j]
      let modifiedAbet = alphabet[j].toUpperCase().split().join();
      newArr.push(modifiedAbet); //pushes new alphabet mod into new array
    }
  }
  console.log(newArr);
}

console.log(forception(people, alphabet));