let clicks = 0; // counter 
let clickerStart = document.getElementById("startButton")

    // Time & stop time
    let timeInterval = setTimeout(function(){
        console.log('Times Up!');
    }, 10000);
    
     // 10 seconds later
    'Times Up!'
startButton.addEventListener("click", timeInterval)   


// Start
startButton.addEventListener("click", function(event){
    event.preventDefault()

    startButton.addEventListener("click", clickerStart)
    console.log(++clicks); // increment it

    clearInterval(timeInterval) // stops time interval
})

// To save this object to web storage:
//localStorage.user = JSON.stringify(clicks);

// To retrieve this object from web storage:
//let user = JSON.parse(localStorage.user);

const clickTotal = []
clickTotal.push(clicks)
totalClicks.textContent = "Total Clicks: " + clickTotal + " Clicked"
