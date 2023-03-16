// Forms Part 1 //

The standard way to take user input using HTML and Javascript is by using the input HTML element.  
The HTML form element can be wrapped around a group of inputs to create a form the user can type in and submit, such as a login or signup form on a website.

The "submit" event is used on forms as it allows the user to either click the submit button or press "enter" to submit the information.

Submit events refresh the website by default, so this needs to prevented as soon as the submit event occurs to maintain the information.

<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        
        <h1> Forms Part 1 </h1>
        
        <form name="my-form"> 
            <input type="text" name="firstName"/>
            <input type="text" name="lastName"/>
            <button>Submit</button>
        </form>
        
        
        <script src="index.js"></script>
    </body>
</html>

const form = document["my-form"]

// Submit event

form.addEventListener("submit", function(event){
    event.preventDefault()
    
    const firstName = form.firstName.value
    const lastName = form.lastName.value
    form.firstName.value = ""
    form.lastName.value = ""
    
    // 1 . <h1></h1>
    const h1 = document.createElement('h1')
    // 2. <h1>Harry Potter</h1>
    h1.textContent = firstName + " " + lastName
    // 3. Append
    document.getElementsByTagName("body")[0].append(h1)
})

### **Tags**

---

The HTML `<form>` element defines a form that is used to collect user input:

```
<form></-- input tags and variations of input tags --></form>
```

`<form>` wraps all your inputs.

A simple form in HTML would look like:

```
<form>
    First Name: <input/></from>
```

And look like this in the browser:

First Name:  ___
It is wise to give each of your forms a `name` attribute.
`<form name="user-info">`
**Attributes**
There's many different kinds of input fields, and most of them still use the `<input/>` tag, but can be used by giving `<input/>` different **attributes**.
The big one is `type`
`type` defaults to `text`. So our "First Name" input box is already `<input type="text"/>`
There are many other types, and we'll talk about most of them in Part 2. You should be excited for that.
The different types gives the input boxes cool tools to help your user give the type of input.
For example:
Number restricts the inputs to numbers, and give you up and down arrows to increment or decrement it.Number:  ___
Number also has more attributes to help you control how the input box behaves.
For `type="number"` the common ones are: min, max, step
Min and max are exactly what the sound like. They restrict the minimum and the maximum value of the input box.
Step controls how much the up and down arrow move our number. Play around with this input box `Number: <input step="10" type="number"/>`:Number:  ___
Your step can also be decimals.
Here is a list of just some of the other attributes you can give your input box:
• `name` - Important for naming and using your input boxes. Similar to `id`
• `value` - Value gives your input and initial value
• `placeholder` - Placeholder gives your user an example or hint of what belongs in an input box
• `required` - From will not submit if you have this attribute in an empty input box
Many of these attributes are using by your browser to help with autofill. Especially the `name` attribute. If you say `name="firstname"`, Chrome can autofill that for your user.
**Using JavaScript to get values from your form**
Because JavaScript is JavaScript and HTML is HTML there are many different ways to get the value from an input box.
**By id**
The strategies that we will go over now are:
• With the `id` attribute of the input box
• With the `name` attribute of the form, and the `name` attribute of the input box
We know that we can select anything in our HTML (more accurately the DOM) with the `id`:

`<div id="first-name">Georgette</div>`

`document.getElementById("first-name")`

Once we've selected that element, we can look at it's attributes. Using the above example:

`document.getElementById("first-name").innerHTML //=> Georgette`

We can do this same sort of thing with `.value`. We are going to select the input box by it's id and then get the value from it.

`<input id="first-name"/>`

`document.getElementById("first-name").value`

**By name**Any form that we've named becomes part of the document. So we can select this form:

`<form name="info"><input name="age"/></form>`
as easily as:

`document.info`

and any input in that form as easily as:

`document.info.age`

and it's value like so:

`document.info.age.value`

**Example**
Follow along as we create a little mad lib game. If you haven't played mad libs before, we will have the user pick a noun and a verb and put those into a potentially silly sentence.
First, our HTML form. It will have an input for a noun, a verb, and an adjective.

`<form name="words"><input name="noun" placeholder="noun"/><input name="adverb" placeholder="adverbe"/><input name="verb" placeholder="verb"/></form>`
We would love to be able to grab the values from each of those input boxes and then print our silly sentence. Let's `alert()` it now, for simplicity.
It would be nice if we could just:

`var noun = document.words.noun.value
var adverb = document.words.adverb.value
var verb = document.words.verb.value

alert("The " + noun + " did " + adverb + " " + verb + " in it's home")`

But, if you try this out, the alert happens right away and all these variables are empty strings. This is because we haven't given our user any time to type in their response.
The appropriate user experience should be: they type their response, and then click a button.
For that, we'll add a button to our HTML and some event listener stuff.

`<form name="words"><input name="noun" placeholder="noun"/><input name="adverb" placeholder="adverb"/><input name="verb" placeholder="verb"/><button>Submit</button></form>`

`document.words.addEventListener("submit", function(e){
  e.preventDefault()

  var noun = document.words.noun.value
  var adverb = document.words.adverb.value
  var verb = document.words.verb.value

  alert("The " + noun + " did" + adverb + " " + verb + " in it's home")
})`

Concerning the button, the submit event, the event object, and `event.preventDefault()`, a very brief explanation:
A button in a form defaults to that forms submit button. Web developers use to `submit` forms and refresh the page by default. This is archaic and dumb, and now we overwrite that functionality with `event.preventDefault()` using the event object itself.
The submit stuff it nice for the user, because they can submit a form with the `Enter` key.
There is tons of other cool stuff you can do with forms. Learn about more in Part 2!
------------------------------------------------------------------------------------------------------
// Higher Order Functions //

A Higher Order Function/Method is a function that:
    1. Takes a function as a parameter
         or/and
    2. Returns a function
    
Higher Order array methods follow that first criteria as they require a function as a parameter.  They do not return a function.

// callback is a function passed into another function

Example:

function doMath(num1, num2, callback){
    return callback(num1, num2)
}


function sum(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
}


console.log(doMath(5, 10, subtract)) 

A higher order function either:

- takes one or more functions as an argument
    
    or
    
- outputs a function

Functions in JavaScript are just values, so they can be easily passed into and returned by functions.

**The Bare Bones**

Higher Order Functions are typically methods.

*Methods* - Methods are functions that are part of a bigger object. They can only be used when attached to an array, string, object, etc...

EX: item.function() or Array.map()

*Functions* = Functions are written to perform specific tasks but can be called whenever, they do not need to be attached to anything.

E.g.: `function()` or `setInterval()`

The bare bones of a Higher Order Function is this:

`item.function(function(){})` if it is a method

or

`function(function(){})` if it is just a regular function

Notice that the argument that a Higher Order Function takes is always another function. If you wanted to you could save that function to a variable beforehand and then just pass in that variable. That would look like this:

```
var myFunc = function(){};

function(myFunc);

```

### **Common Higher Order Functions**

### **Methods**

- .map()
    - Returns a new array with a change made to every item from the original array
    - Whatever you return from the inner function is inserted into the same index as the original array
- .filter()
    - Returns a new array that only includes some of the items from the original array
    - If inner function returns `true` (or something "truthy"), that item is included in the new array. If it returns `false` (or something "falsey"), it doesn't include it in the new array.
- .reduce()
    - Returns any kind of value you want (number, string, boolean, array, etc.)
    - Inner function used to combine the values from the original array into a single value of some kind. E.g.: adding all the values together from an array of numbers.
- .sort()
    - Modifies/mutates the original array by re-ordering the items therein.
    - Inner function compares 2 items and determines how they should be reordered.
- .forEach()
    - Returns `undefined` (don't expect to receive anything in return)
    - Runs the inner function once for every item in the original array
- .find()
    - Returns one of the items from the array
    - If inner function returns `true`, the `.find()` finishes and returns that current value in the original array. If it returns `false`, it continues to search through the array until it returns `true`. If it never returns `true` (no items match the condition), it returns `undefined`
- .findIndex()
    - Same as `.find()` but instead of returning the item in the array, it returns the index where it found the matching item
- .some()
    - Returns either `true` or `false`
    - If inner function returns `true`, the `.some()` immediately returns `true` (because at least one of the items matches your condition). If the inner function returns `false` for every item in the array, the `.some()` returns `false` (no items matches your condition)
- .every()
    - Returns `true` or `false`
    - Opposite of `.some()`, in that if the inner function ever returns `false` for any item, `.every()` immediately returns `false` (because NOT every item matched the condition). If the inner function returns `true` for every item in the array, the `.every()` returns `true`

### **Functions**

- setInterval()
- setTimeout()
- clearInterval()

In this write up we are only going to be looking at the Methods. If you want to learn more or review your knowledge regarding `setInterval`, `setTimeout`, or `clearInterval`, you can do so here:

- [setInterval](https://www.w3schools.com/jsref/met_win_setinterval.asp)
- [setTimeout](https://www.w3schools.com/jsref/met_win_settimeout.asp)
- [clearInterval](https://www.w3schools.com/jsref/met_win_clearinterval.asp)

### **Examples**

Let's begin with one of the more popular Methods.

**.map()** - Runs a for loop on an array and returns a new array with the changes indicated.

```
var arr = [1,2,3,4];

arr.map(function(item){
    return item + 1;
})

// => [2,3,4,5]

```

Let's compare this to a normal for loop

```
var arr = [1,2,3,4];

for ( var i = 0; i < arr.length; i++){
   arr[i] += 1;
}

// => [2,3,4,5]

```

They do virtually the exact same thing. One important thing to take note of is that rather than writing `arr[i]` to access each item in the array, we use `item`. The word `item` is not a saved word. Best practice is to name `item` the singular version of whatever your array holds, for example:

```
var dogs = ['lab', 'poodle', 'shih-tzu'];

dogs.map(function(dog){
    return dog + 's are quite fancy';
})

// => ['labs are quite fancy', 'poodles are quite fancy', 'shit-tzus are quite fancy']

```

So if you had an array called `numbers` then the item would be `number` or if you had an array called `names` then the item would be `name`.

**.filter()** - Runs a loop on an array and returns a new array with only the items that meet the given condition.

```
var numbers = [12,4,56,27];

numbers.filter(function(number){
    return number >= 25;
})

// => [56, 27]

```

Basically, whatever you return inside the callback function is the condition that it will check for each item in the array. In the example above it went through each number in the `numbers` array and checked if it was greater than 25. If it was greater then it pushed it into the new array, if it was not, it did not include it in the new array.

Let's look at an example of this in the old way of writing for loops

```
var numbers = [12,4,56,27];
var newArr = [];

for (var i = 0; i < numbers.length; i++){
    if (numbers[i] >= 25){
        newArr.push(numbers[i]);
    }
}

// newArr => [56,27]

```

Comparing the two we see how much simpler and more concise the `.filter` is compared to the old way. Hopefully this demonstrates how useful Higher Order Functions can be!

**.reduce()** - Returns the sum of an array of numbers

```
var numbers = [1,2,3,4,5];

numbers.reduce(function(a,b){
    return a + b
})

// => 15

```

**.sort()** - Modifies original array sorted either alphabetically or of numbers (low to high) or (high to low)

```
var scores = [12,98,34,85];

scores.sort(function(a,b){
    return a - b
})

// => [12,34,85,98]

```

or if you want to sort it from High to Low

```
var scores = [12,98,34,85];

scores.sort(function(a,b){
    return b - a
})

// => [98,85,34,12]

```

or if you want to sort words alphabetically

```
var words = ['bat', 'pineapple', 'drugs', 'zebra', 'ghost'];

words.sort()

// => ['bat', 'drugs', 'ghost', 'pineapple', 'zebra']

```

Notice the last one didn't take a function as an argument, you don't need it if you are alphabetizing words, only if you are ordering numbers.

**.forEach()** - Runs a loop on an array but does not create a new array. (basically the same as .map() but no new array is created)

```
var numbers = [1,2,3,4]

numbers.forEach(function(number){
    return number * 2
})

// => [1,2,3,4]

```

Notice that no changes occurred. If we wanted to do the above code and have actual changes occur then we would have to do the following.

```
var numbers = [1,2,3,4]

numbers.forEach(function(number, i){
    return numbers[i] = number * 2
})

// => [2,4,6,8]

```

There are some important things that happened here that we need to address.

- We added `i` as the second parameter. Anytime a second parameter is given to `.map`, `.filter`, or `.forEach`, it becomes the index of that array.
- Take note of the `s` at the end of `numbers` in the return statement. We are grabbing the index of the original array and we are not using the `number` parameter that we created in the callback function.
- `numbers[i] = number * 2` **correct**
- `number[i] = number * 2` **incorrect**

So what is the point of having forEach() if it doesn't save anything? Well it could be used for testing purposes if you wanted to see what happened without actually making any changes. Or it could be used to to run a function on each item. However, 9 times out of ten you will use `.map` over `.forEach`.

**.find()** - Returns the value of the first item in the array that meets the given condition.

```
var numbers = [12,30,5,62,18,53]

numbers.find(function(number){
    return number > 50
})

// => 62

```

Remember this only returns the FIRST item that meets the given condition

**.findIndex()** - Returns the index of the first item in the array that meets the given condition.(exact same as .find() but it gets the index instead of the actual item)

```
var numbers = [12,30,5,62,18,53]

numbers.findIndex(function(number){
    return number > 50
})

// => 3

```

**.some()** - Checks if ANY items in an array meet a given condition and return True or False.

```
var numbers = [12,30,5,62,18,53]

numbers.some(function(number){
    return number > 50
})

// => true

```

or

```
var numbers = [1,5,19,49,23]

numbers.some(function(number){
    return number > 50
})

// => false

```

**.every()** - Checks if ALL items in an array meet a given condition and returns True or False.

```
var numbers = [12,30,5,62,18,53]

numbers.every(function(number){
    return number > 50
})

// => false

```

or

```
var numbers = [1,5,19,49,23]

numbers.every(function(number){
    return number < 50
})

// => true

```

These are not all of the available Higher Order Functions, but these are the most common. I encourage you to familiarize yourself with these because they will be EXTREMELY useful throughout your coding career.
--------------------------------------------------------------------------------------------------------
// Map //

.map()
    returns: A new array the same size as the input array
    purpose: allows you to take an array of data and create a new array of data from it.

// Higher order array methods
// .map()

// const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// const result = arr.map(function(num){ // arr[i]
//     return num + 10
// })

// const result = arr.map(num => num + 10)

const users = [
    { name: "joe" },
    { name: "steve" },
    { name: "lisa" }
]

const result = users.map(function(user){
    return user.name
})

console.log(result)