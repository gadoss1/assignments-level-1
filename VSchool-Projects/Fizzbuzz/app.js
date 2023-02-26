function fizzBuzz() {
    let arrOfObj = [];
    let fizzBuzzTally = 0;
    let fizzTally = 0;
    let buzzTally = 0;
    
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
        fizzBuzzTally++
      } else if (i % 3 === 0) {
        console.log('Fizz')
        fizzTally++
      } else if (i % 5 === 0) {
        console.log('Buzz')
        buzzTally++
      } else {
        console.log(i);
      }
    }
    arrOfObj.push({ 
                    FizzBuzz: `${fizzBuzzTally}`, 
                    Fizz: `${fizzTally}`, 
                    Buzz: `${buzzTally}` 
                  });
    
    
    return arrOfObj;
  }
  
  console.log(fizzBuzz());