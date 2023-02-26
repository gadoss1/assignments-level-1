//Function that takes an array of words and a character
//and returns each word that has that character present.

function lettersWithStrings(arr, char) {
    let stringsWithLetters = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].includes(char)) {
        stringsWithLetters.push(arr[i]);
      }
    }
    return stringsWithLetters;
  }
  
   console.log(lettersWithStrings(['$hello!', '%%^%%', 'test!'], '!'));