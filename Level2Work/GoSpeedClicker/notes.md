// Web Storage //

// Local Storage
// Session Storage

// JSON - Javascript Object Notation
    // JSON.stringify => turning JS into JSON
    // JSON.parse => Turns JSON into JS

// Setter - Save data in local storage (key = value pairs)
localStorage.setItem("name", "steve")
localStorage.setItem("age", 10)
localStorage.setItem("isAlive", true)
localStorage.setItem("friends", JSON.stringify(["mark", "tina", "jay"]))
localStorage.setItem("adress", JSON.stringify({street: "123 street", city: "SLC" }))


// Getter
const name = localStorage.getItem("name")
const age = localStorage.getItem("age")
const isAlive = localStorage.getItem("isAlive")
const friends = JSON.parse(localStorage.getItem("friends"))
const address = JSON.parse(localStorage.getItem("add"))
console.log(address)

// Remove
// localStorage.removeItem("age")

localStorage.dinosaur = "T-rex"
console.log(undefined)

In just about any *useful* application you'll make, you'll need a way to persist (keep) data. Otherwise, every time you refresh the page, close the browser, etc. you will lose everything you put into the application. Which obviously makes for a pretty terrible application...

There are a number of options you have when it comes to persisting data:

- **Cookies**: Cookies are stored in your browser, and are typically meant to store some kind of information about any of your HTTP requests. They are sent in the headers of every single HTTP request your browser makes. They are also very limited in size (4 KB!). One thing that can be useful about cookies that you don't get with localStorage is the ability to set an expiration on the cookie, so it simply "dies" on the specified expiration date/time.

You won’t use these at V School, but may be quizzed about them in an assessment

- **Database**: This is a very robust option, in that it can definitely store any information you need it to store. The downside here is that it will require a lengthy database and server setup process. You'll likely need a database to do any kind of real web application development, but for small and simple data storage tasks, it may be overkill
- **Local Storage**: Your browser is able to actually store basic key: value pairs with data in them to your hard drive. This storage, called local storage because it is only stored locally on your machine, can hold basically as much data as you want to put into it, and it will not go away unless you specifically clear it out manually. Oftentimes this is good for things like saving a user's customized settings, for example.
- **Session Storage**: Pretty much identical to Local Storage, except that it only persists while the browser session is active. If you close the browser or the tab you're saving things to Session Storage on, it will clear out and your data will be removed. This is nice because it won't take up hard drive space, as long as you're not saving any information you need to persist between sessions. An example of how this might be useful is if the user has more than one window of your application open and they need to have data shared between the windows.

### **How to use Web Storage (localStorage and sessionStorage)**

*Note: We'll be referring to Local Storage only from here on out, but if you want to use Session Storage instead, just replace any instances of `localStorage` with `sessionStorage`.*

If you think of Local Storage simply as a key: value paired object, it should be easy to grasp. `localStorage` is built into JavaScript, and doesn't necessarily need any other dependencies for it to work.

There are two ways to add, access, and remove data from localStorage and sessionStorage.

# **1. Using the built-in methods `setItem`, `getItem`, and `removeItem`**

In just about any *useful* application you'll make, you'll need a way to persist (keep) data. Otherwise, every time you refresh the page, close the browser, etc. you will lose everything you put into the application. Which obviously makes for a pretty terrible application...

There are a number of options you have when it comes to persisting data:

- **Cookies**: Cookies are stored in your browser, and are typically meant to store some kind of information about any of your HTTP requests. They are sent in the headers of every single HTTP request your browser makes. They are also very limited in size (4 KB!). One thing that can be useful about cookies that you don't get with localStorage is the ability to set an expiration on the cookie, so it simply "dies" on the specified expiration date/time.

You won’t use these at V School, but may be quizzed about them in an assessment

- **Database**: This is a very robust option, in that it can definitely store any information you need it to store. The downside here is that it will require a lengthy database and server setup process. You'll likely need a database to do any kind of real web application development, but for small and simple data storage tasks, it may be overkill
- **Local Storage**: Your browser is able to actually store basic key: value pairs with data in them to your hard drive. This storage, called local storage because it is only stored locally on your machine, can hold basically as much data as you want to put into it, and it will not go away unless you specifically clear it out manually. Oftentimes this is good for things like saving a user's customized settings, for example.
- **Session Storage**: Pretty much identical to Local Storage, except that it only persists while the browser session is active. If you close the browser or the tab you're saving things to Session Storage on, it will clear out and your data will be removed. This is nice because it won't take up hard drive space, as long as you're not saving any information you need to persist between sessions. An example of how this might be useful is if the user has more than one window of your application open and they need to have data shared between the windows.

### **How to use Web Storage (localStorage and sessionStorage)**

*Note: We'll be referring to Local Storage only from here on out, but if you want to use Session Storage instead, just replace any instances of `localStorage` with `sessionStorage`.*

If you think of Local Storage simply as a key: value paired object, it should be easy to grasp. `localStorage` is built into JavaScript, and doesn't necessarily need any other dependencies for it to work.

There are two ways to add, access, and remove data from localStorage and sessionStorage.

# **1. Using the built-in methods `setItem`, `getItem`, and `removeItem`**

```
// Save something to web storage:
localStorage.setItem("keyName", "value");

// Get something from web storage that  was previously saved:
var myValue = localStorage.getItem("keyName");

// Remove an key/value pair from localStorage:
localStorage.removeItem("keyName");

```

# **2. Treating `localStorage` and `sessionStorage` like objects**

```
// Save something to web storage:
localStorage.keyName = "value";

// Get something from web storage that  was previously saved:
var myValue = localStorage.keyName;

// Remove an key/value pair from localStorage:
delete localStorage.keyName;

```

It's important to keep in mind that web storage only stores strings of data. So if you need to store or retrieve more complex data types, you can use `JSON.stringify()` to turn complex data into a string before saving it to web storage or `JSON.parse()` to turn something back into a complex data type before trying to display or manipulate it.

```
var obj = {
    name: "Billy",
    age: 45,
    cars: [
        {
            year: 2002,
            make: "Toyota",
            model: "Camry"
        },
        {
            year: 2018,
            make: "Tesla",
            model: "Roadster"
        }
    ]
}

// To save this object to web storage:
localStorage.user = JSON.stringify(obj);

// To retrieve this object from web storage:
var user = JSON.parse(localStorage.user);

```

One final thing to note: you'll oftentimes see `window.localStorage` while searching around on the web. Just know that `localStorage` is basically set up like a shortcut for saying `window.localStorage`, so unless you set your own variable called `localStorage` (probably not a good idea anyway), you're fine just using `localStorage`. Same goes with `sessionStorage` vs. `windows.sessionStorage`. Here's a [stackoverflow.com post](http://stackoverflow.com/questions/12660088/is-there-any-difference-between-window-localstorage-and-localstorage) for reference.And that's it! You're all set with everything you need in order to start using web storage. This can be a great solution to use while you're testing front-end applications before having the chance to build up a database for storing data.

### Images missing from Scrimba

![Screen Shot 2021-09-14 at 9.12.43 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/11e38a97-d524-4627-a4dd-66b1fa8d96f6/Screen_Shot_2021-09-14_at_9.12.43_AM.png)

![Screen Shot 2021-09-14 at 9.12.09 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4d2cb6fc-50ac-4b82-8824-87b1d64c83a3/Screen_Shot_2021-09-14_at_9.12.09_AM.png)

-------------------------------------------------------------------------------------------------------

// setTimeout and setInterval //
# setTimeout and setInterval

![https://coursework.vschool.io/content/images/size/w2000/2018/05/alp-studio-426760-unsplash.jpg](https://coursework.vschool.io/content/images/size/w2000/2018/05/alp-studio-426760-unsplash.jpg)

`setInterval` and `setTimeout` are two of the higher order functions in Javascript. Higher order functions take a function as one of their arguments like we see below:

```
setTimeout(function(){});

```

`setInterval` and `setTimeout` provide a way for you to tell your program to run a function or evaluate an expression after a specified amount of time has passed. While the first argument is setting what should happen, the second argument is for setting the time.

```
// setTimeout(arg1, arg2)

setTimeout(function(){}, 1000)

```

The time argument is set in an amount of milli-seconds, meaning 1000 = 1 second. The `setTimeout` above will run that function after 1 second has passed. Let's see an example of this:

```
setTimeout(function(){
   console.log('hello!');
}, 1000);

// 1 second later
'hello!'

```

Set Timeout is great for having your program run a function once, but what if you needed your function to occur every 1 second on a repeated basis? You would use the other method `setInterval()`.

```
setInterval(function(){
   console.log('hello');
}, 1000)

// 1 second
'hello!'
// 2 seconds
'hello!'

```

Now that you have your function running on a specified interval, how do you then tell your program to stop that interval? For this, you will need to first adjust your original setInterval call and store it in a variable:

```
var intervalID = setInterval(function(){
   console.log('hello!')
}, 1000)

```

The variable you assign to setInterval will store the ID for that interval. You can think about the ID being like the off switch for the interval or timeout you set. When you need to have an interval or timeout stopped, you call the `clearInterval(intervalID)` or `clearTimeout(timeoutID)` and pass in the ID of the one you need stopped. Here is a *sudo* example of an interval running for 2 seconds, and then it is cleared with `clearInterval`.

```
var intervalID = setInterval(function(){
   console.log('hello!')
}, 1000);

// 1 second
'hello!'

// 2 seconds
'hello!'

clearInterval(intervalID)

```

Now with those basics let's write a function that outputs some text to the console, and then pass that into setInterval to run on a reoccurring basis.

```
function sayHello(){
   console.log("Hello!");
}

var intervalID = setInterval(sayHello, 1000);

```

This would do the exact same thing as our setInterval from before, but we just wrote the function before calling set interval and then passed the function into it.

> Remember, you would not want to use the ( ) after putting sayHello as the first argument (ex: sayHello( )). Using the ( ) calls a function, and that would tell your program to run that function immediately rather than on the interval you are setting.
> 

**Practice**

Now let's use setInterval and setTimeout together to have a function run every second for 5 seconds, and then have it cleared.

```
function sayHello(){
   console.log('hello!');
}

function stopSayingHello(){
   clearInterval(intervalID)
}

var intervalID = setInterval(sayHello, 1000);

setTimeout(stopSayingHello,  6000)

```

> setTimeout can also be set to a variable if you need to have the setTimeout stop before it executes the function you gave it. Ex: var timeoutID = setTimeout(arg1, arg2). If you did this, you would use the clearTimeout(timeoutID) method instead of clearInterval(setIntervalID)
> 

**Even more practice**

Now that we have a handle on the basics, let's see a practical use of this to make a clock using Javascripts's Date constructor.

```
<body>
    <div>
        <h1 id="time-display"></h1>
    </div>

    <script>
        var display = document.getElementById('time-display');

        function getTime(){
            var now = new Date();
            var hour = now.getHours();
            var min = now.getMinutes();
            var sec = now.getSeconds();

            display.textContent = `${hour}:${min}:${sec}`}

        setInterval(getTime, 1000)
    </script>
</body>

```

If you are following along, you'll notice that when the seconds, minutes, or hours are less than 10, the time looks like this:8:5:2

To fix this, we just need to add a little more logic to our function to tell it to add a '0' before the number if it's less than 10.

```
<body>
    <div>
        <h1 id="time-display"></h1>
    </div>
    <script>

        var display = document.getElementById('time-display');

        function getTime(){
            var now = new Date();
            var hour = now.getHours();
            var min = now.getMinutes();
            var sec = now.getSeconds();
            if(hour < 10){
                hour = `0${hour}`;
            }
            if(min < 10){
                min = `0${min}`;
            }
            if(sec < 10){
                sec = `0${sec}`;
            }

            display.textContent = `${hour}:${min}:${sec}`;
        }

        setInterval(getTime, 1000);
    </script>
</body>

```

More on setInterval and setTimeout can be found [here](https://www.w3schools.com/jsref/met_win_setinterval.asp).