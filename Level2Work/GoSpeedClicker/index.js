let clicks = 0; // counter 
let clickerStart = document.getElementById("startButton")
let timeStart = document.getElementById("computerMouse")
let countdown = 10 //Time Count

    // Time & stop time
    let timeInterval = setInterval(function(){
        
        countdown--
        //computerMouse.addEventListener("mouseover", timeInterval)
        console.log(countdown)
        
        if (countdown <= 0)  {
            clearInterval(timeInterval)

            console.log('Times Up!');
        }

    }, 1000);



// Start
clickerStart.addEventListener("click", async function(event){
    event.preventDefault()

    clickerStart.addEventListener("click", function(){

        console.log(clicks); // increment it

        clicks = clicks + 1
        totalClicks.textContent = "Total Clicks: " + clicks + " Clicked"

    })
})

// To save this object to web storage:
//localStorage.user = JSON.stringify(clicks);

// To retrieve this object from web storage:
//let user = JSON.parse(localStorage.user);
