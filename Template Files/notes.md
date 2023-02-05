//Creating Elements in JS
//<html>
    <head>
    </head>
    <body>
        <ul id="my-list">
            <li>0</li>
            <li>1</li>
            <li>2</li>
        </ul>
        
        <script src="index.js"></script>
    </body>
    
var newLi = document.createElement("li")
newLi.textContent = "3"
var myList = document.getElementById("my-list")
myList.prepend(newLi)

/**
 * Challenge:
 * 
 * Add a paragraph after the existing unordered list with any text you want inside.
 * Do this completely in JavaScript!
 */

var newP = document.createElement("p")
newP.textContent = "V School rocks!"
newP.style.textAlign = "center"
newP.style.fontSize = "30px"
document.body.append(newP)


-----------------------------------------------------------------------------------------------------------
//DOM Selecting Multiple Elements

Sometimes you may want to select a number of elements, like all the list items in a list or all elements with a specific class name. getElementById works great for selecting a single instance (since ids should be unique), but there are other selectors you can use to get lists of elements. 

The most common are:
* getElementsByClassName
* getElementsByTagName

Since there could potentially be multiple elements in the document with the same class name or the same tag name (like `p` or `div`), these element selectors will always return an array of elements. (Strictly speaking it isn't really an array, but is an "array-like object" of all the elements that matched the selector)

Important: even if you only have one element on the page with a given class name, the `getElementsByClassName()` method will still return this array of elements - it will just be an array with a single item in it.

//<html>
    <head>
    </head>
    <body>
        <h1 class="things">Thing 1</h1>
        <h1 class="things">Thing 2</h1>
        <h1 class="things">Thing 3</h1>
        
        <script src="index.js"></script>
    </body>
</html>

JS
var things = document.getElementsByClassName("things")
for (var i = 0; i < things.length; i++) {
    console.log(things[i].innerText)
}

# Quiz:

1. What are some of the differences between getElementById and getElementsByClassName?
* id - returns a single element/object from the document. class name (tag name) returns an array-like object.
* id - needs an id to find, class name - needs a class to find
        document.getElementsByTagName("div")

2. What will `.getElementsByClassName` return if there are no elements with the matching class in the document?
Returns an empty array


3. What will `.getElementById` return if there is no element with the matching id in the document?
`null`

//querySelector-querySelectorAll

// querySelector
// Select a single element from the page. (Returns the first element it finds that matches the query)
// var result = document.querySelector("ol#favorite-things > li")
// console.log(result)


// querySelectorAll
// Select all elements from the page that match the query.
var result = document.querySelectorAll("ol#favorite-things > li")
console.log(Array.from(result))

for (var i = 0; i< result.length; i++) {
    result[i].textContent = "** REDACTED **"
}

<html>
    <head>
    </head>
    <body>
        <ol id="favorite-things">
            <li class="thing">Raindrops on roses</li>
            <li class="thing">Whiskers on kittens</li>
            <li class="thing">Bright copper kettles</li>
            <li class="thing">Warm woollen mittens</li>
        </ol>
        <script src="index.pack.js"></script>
    </body>
</html>

----------------------------------------------------------------------------------------------
//Modify an element's text
<html>
    <head>
    </head>
    <body>
        <h1>Here is some text</h1>
        <p>PLACEHOLDER</p>
        
        <script src="index.js"></script>
    </body>
</html>

// innerHTML - security risk
// innerText - "expensive"
// textContent

// var person = {name: "Joe"}
// person.name = "Jim"
// console.log(person)

/**
 * 1. Select the h1 element
 * 2. Save the h1 element's text to a variable
 * 3. Change the paragraph element's text to be the same as the text inside the h1
 */

var text = document.querySelector("#header").textContent
document.querySelector("#paragraph").textContent = text

------------------------------------------------------------------------------------------------
//modifyingStyles

<html>
    <head>
    </head>
    <body>
        <h1 id="header">Modifying Styles with JS</h1>
        <script src="index.js"></script>
    </body>
</html>

var header = document.getElementById("header")
console.log(typeof header.style)

console.log(Object.keys(header.style))
›["alignContent", "alignItems", "alignSelf", "alignmentBaseline", "all", "animation", "animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction", "backfaceVisibility", "background", "backgroundAttachment", "backgroundBlendMode", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPosition", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundRepeatX", "backgroundRepeatY", "backgroundSize", "baselineShift", ...]

header.style.backgroundColor = "blue"

document.body.style.backgroundColor = "burlywood"

// fontSize
// background-color
// display
// textAlign
// margin, padding, border

---------------------------------------------------------------------------------------------------------
// Modifying styles: className & classList

Sometimes you want the style to still live in CSS and just programmatically apply a CSS class to the element using JS. This is where `className` and `classList` come in!

----------

## `className`
This is a slightly outdated way to deal with adding a CSS class to an element in JavaScript. An element's `className` property is simply a string of the class added to the element. Seems simple enough, but when the time comes to add a _second_ class or remove one of many classes, it's tricky. (Since the value is a simple string with spaces delimiting each class name, you'd need to parse that string and remove the part that has the class you want - not TOO hard but pretty ugly)

https://developer.mozilla.org/en-US/docs/Web/API/Element/classname

----------

## `classList`
This is a much better way to handle the adding and removing of CSS classes in JS. `classList` is an object with some methods that are easy to use when adding or removing classes from an element. See the MDN docs for full description and examples:

https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

<html>
    <head>
        <link href="styles.css" rel="stylesheet"/>
    </head>
    <body>
        <h1 id="header" class="title another">Modifying Styles with JS</h1>
        <script src="index.js"></script>
    </body>
</html>

*/ .css
.title {
    color: blue;
}

// className
// document.querySelector("#header").className += " new-class"

// classList
document.querySelector("#header").classList.add("new-class")
document.querySelector("#header").classList.remove("another")
console.log(document.querySelector("#header").className)
document.querySelector("#header").classList.toggle("another")
console.log(document.querySelector("#header").className)
console.log(document.querySelector("#header").className)
document.querySelector("#header").classList.toggle("another")
console.log(document.querySelector("#header").className)
document.querySelector("#header").classList.toggle("another")
console.log(document.querySelector("#header").className)

-------------------------------------------------------------------------------------

//Modifying Elements: Value

<html>
    <head>
        <link href="styles.css" rel="stylesheet"/>
    </head>
    <body>
        <input type="text" id="text-input" value="This is some content"/>

        <script src="index.js"></script>
    </body>
</html>

var inputBox = document.getElementById("text-input")
console.log(inputBox.value)

.title {
    color: blue;
}

var inputBox = document.getElementById("text-input")
console.log(inputBox.value)
var inputBox = document.getElementById("text-input")
inputBox.value = "CHANGED!"

// Creating Elements in JS
<html>
    <head>
    </head>
    <body>
        <ul id="my-list">
            <li>0</li>
            <li>1</li>
            <li>2</li>
        </ul>
        
        <script src="index.js"></script>
    </body>
</html>

var newLi = document.createElement("li")
newLi.textContent = "3"
var myList = document.getElementById("my-list")
myList.append(newLi)
myList.prepend(newLi)
/**
 * Challenge:
 * 
 * Add a paragraph after the existing unordered list with any text you want inside.
 * Do this completely in JavaScript!
 */

var newP = document.createElement("p")
newP.textContent = "V School rocks!"
document.body.append(newP)
newP.style.textAlign = "center"
newP.style.fontSize = "30px"
document.body.append(newP)

---------------------------------------------------------------------------------------------

// Creating JS Elements: InnerHTML

<html>
    <head>
    </head>
    <body>
        <ul id="my-list">
            <li>0</li>
            <li>1</li>
            <li>2</li>
        </ul>
        
        <script src="index.js"></script>
    </body>
</html>

// innerHTML vs textContent
var myList = document.getElementById("my-list")
console.log(myList.textContent)
myList.innerHTML += "<li>3</li>"

document.body.innerHTML += "<p id='paragraph'>V School rocks!</p>"
document.getElementById("paragraph").style.textAlign = "center"

## Tasks:

1. Search Google to learn a little more about the difference between the `.append()` method and the `.appendChild()` method

2. What do you see as pros/cons of using `.createElement()` and `append()` vs. `.innerHTML`?

3. What happens if I create an element using `.createElement()` but don't use `.append()`?

4. How might you use a for loop in conjunction with the DOM methods for create elements?

-----------------------------------------------------------------------------------------

// Creating Elements in JS: forLoops + createElement

<html>
    <head>
    </head>
    <body>
        <ul id="rangers"></ul>
        
        <script src="index.js"></script>
    </body>
</html>

var powerRangers = [
    "Jason Lee Scott", 
    "Kimberly Hart", 
    "Zack Taylor", 
    "Trini Kwan", 
    "Billy Cranston"
]

-- Bad Idea for large lists ---
var rangersList = document.getElementById("rangers")
var newName = document.createElement("li")
newName.textContent = powerRangers[0]
rangersList.append(newName)

-- Better way for large lists --
var rangersList = document.getElementById("rangers")

for (var i = 0; i < powerRangers.length; i++) {
    var newName = document.createElement("li")
    newName.textContent = powerRangers[i]
    rangersList.append(newName)
}

-- List with innerHTML --
var rangersList = document.getElementById("rangers")

for (var i = 0; i < powerRangers.length; i++) {
    rangersList.innerHTML += "<li>" + powerRangers[i] + "</li>"
}

-- Objects --

var powerRangers = [
    {name: "Jason Lee Scott", color: "Red"}, 
    {name: "Kimberly Hart", color: "Pink"}, 
    {name: "Zack Taylor", color: "Black"}, 
    {name: "Trini Kwan", color: "Yellow"}, 
    {name: "Billy Cranston", color: "Blue"},
    {name: "Tommy Oliver", color: "Green"}
]

var rangersList = document.getElementById("rangers")

for (var i = 0; i < powerRangers.length; i++) {
    rangersList.innerHTML += "<li>" + powerRangers[i] + "</li>"
}

------------------------------------------------------------------------------

// DOM JS Review

# Selecting element(s)

`document.getElementById(<id string>)` - Returns a single element by its ID. If you (erroneously) have two elements with the same id, it will pick the first one it finds

`document.querySelector(<CSS selector string>)` - Returns a single element based on the CSS selector provided as a string. If multiple items match the CSS selector, this will only return the first one that matches.

`document.getElementsByClassName(<class name string>)` - Returns an array-like HTML collection of all elements that have the provided class name. If 0 elements match, returns an empty HTML collection (like an empty array). If 1 element matches, returns an HTML collection with a single item in it (like an array with only 1 item).

`document.getElementsByTagName(<tag name string>)` - Returns a collection of elements (array-like) with the provided tag name (e.g. "h1", "div", "li", etc.)

`document.querySelectorAll(<CSS selector string>)` - Returns a collection of elements (array-like) that match the CSS selector.

-------------------

# Modifying elements

(For descriptions below, imagine we've selected and saved an element to a variable called `element`)

`element.textContent` - the plain text inside the element. Can be set equal to something new with the assignment operator (`=`)

`element.innerHTML` - the string version of the HTML elements that are children of the selected element. If you add new HTML tags to the `innerHTML` of an element, they'll be turned into new elements on the page.

`element.style` - an object whose properties match all available CSS properties of the element, but camelCased instead of separated with dashes. (E.g. `backgroundColor` instead of `background-color`)

-------------------

*Pro tip:* many attributes in the HTML of an element are accessible with JavaScript. E.g., an image element with a `src` attribute (<img id="logo" src="someImage.jpg" />) can be accessed or modified from the selected element in JS:

```
var myImage = document.getElementById("logo")
myImage.src = "newImage.jpg"
```

Same goes for `href`, `id`, etc.

<html>
    <head>
    </head>
    <body>
        <h1 id="header1">getElementById</h1>
        <h1 id="header2">querySelector</h1>
        <ol>
            <li class="list-items">getElementsByClassName 1</li>
            <li class="list-items">getElementsByClassName 2</li>
            <li class="list-items">getElementsByClassName 3</li>
        </ol>
        <ul class="navbar">
            <li>querySelectorAll 1</li>
            <li>querySelectorAll 2</li>
            <li>querySelectorAll 3</li>
        </ul>
        <script src="index.js"></script>
    </body>
</html>

/**
 * CHALLENGE:
 * 
 * Play around with all the different DOM methods for selecting and modifying elements.
 * 
 * Make sure to read through the `notes.md` file for a recap and some new information regarding using the DOM API
 */

 -----------------------------------------------------------------------------------------------------------

// Self Study- Get value from input element

MDN Docs on input element:
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

MDN Docs on addEventListener:
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

Programmer's best friend:
https://www.google.com/

<html>
    <head>
    </head>
    <body>
        <input type="text" />
        <button>Log input value</button>
        
        <script src="index.js"></script>
    </body>
</html>

-----------------------------------------------------------------------------------------------

// Anonymus Function

<html>
    <head>
        <script src="index.js"></script>
    </head>
    <body>
    </body>
</html>

function myFunc() {
    
}

myFunc()

var myOtherFunc = function() {}

myOtherFunc()

function handleClick() {
    
}

document.getElementById("submit-button").addEventListener("click", function() {
    
})

------------------------------------------------------------------------------------------------

//Arrow Functions

<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <h1 id="clickable">click me</h1>
        <script src="index.pack.js"></script>
    </body>
</html>

const h1 = document.getElementById("clickable")
h1.addEventListener("click", () => {
    h1.textContent = "clicked"    
})

const birds = ["robin", "pelican", "goose"]

const bigBirds = birds.map(bird => "big " + bird)

function addTwo(first, second){
    return first + second
}

<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <h1 id="clickable">click me</h1>
        <script src="index.pack.js"></script>
    </body>
</html>

---------------------------------------------------

//Forms Parts 1 & 2

# **Basic tags and attributes**

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
****Attributes****
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
****Using JavaScript to get values from your form****
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

****Example****
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
There is tons of other cool stuff you can do with forms.

The standard way to take user input using HTML and Javascript is by using the input HTML element.  
The HTML form element can be wrapped around a group of inputs to create a form the user can type in and submit, such as a login or signup form on a website.

The "submit" event is used on forms as it allows the user to either click the submit button or press "enter" to submit the information.

Submit events refresh the website by default, so this needs to prevented as soon as the submit event occurs to maintain the information.

//HTML File Example
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

//JS File Example
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

// Submit event

form.addEventListener("submit", function(event){
    event.preventDefault()
    
    
})

Part 2 is the fun part. We get to explore all the cushy things our browser has built for us, and all we have to do is simply implement them.

---

### **Input types**

---

Let start with the different input types. The first two are old news.

- text
- number
- checkbox
- radio
- tel
- email
- date
- search
- color

Some of these will appear to do nothing, but there's some handy things they do for us. For example, different key boards will pop up on your users phone for `type="email"` and for `type="tel"`.

Not only that, but these attributes could be useful for form validation later on down the road.

`type="search"` may seem like it doesn't do anything, but remember, a browser may choose to do a number of cool things to any input type if it wished. Like maybe adding a little magnifying glass, or an `x` to clear a search input field.

The rest of these types have pretty big and cool features.

---

Date gives the user a calendar to pick a date from:

---

Color give the user a sweet color picker to choose a color from:

---

# **Radio and Checkbox**

---

Radio Buttons (circles) only allow ther user to select one of the options.

Checkboxes (squares) mean the user can pick as many of the options as they want.

```
<form><p>I like:</p><br><label><input type="checkbox"/>Cats</label><br><label><input type="checkbox"/>Dogs</label><br><label><input type="checkbox"/>Unicorns</label><br>
    But my favorite is:
    <br>
    Dogs <input type="radio" name="favorite"/>
    Cats <input type="radio" name="favorite"/>
    Unicorns <input type="radio" name="favorite"/></form>
```

---

The `name` and `value` attribute are especially important with radio buttons and check boxes.

All buttons and boxes that are in the same grouping will be given the same `name`.

The value of each input box will be the desired `.value` for radio buttons. Usually just what the user is selecting:

```
<form name="animals">
    I like:
    <br>
    Cats <input value="cats" name="likes" type="checkbox"/>
    Dogs <input value="dogs" name="likes" type="checkbox"/>
    Unicorns <input value="unicorns" name="likes" type="checkbox"/><br>
    But my favorite is:
    <br>
    Dogs <input value="cats" type="radio" name="favorite"/>
    Cats <input value="dogs" type="radio" name="favorite"/>
    Unicorns <input value="unicorns" type="radio" name="favorite"/><button>submit</button></form>
```

To get the value of the radio button the user selected, you can use the `name` attribute and the DOM gets a new property to the form!:

```
document.animals.favorite.value //=>  "cats"

```

To get the checkboxes that the user selected? That's it's own beast.

```
Cats <input value="cats" name="likes" type="checkbox"/>
Dogs <input value="dogs" name="likes" type="checkbox"/>

```

What would `document.animals.likes.value` look like?

It's not just going to be a string, because it can be multiple options that are selected. It's actually undefined.

There are a few methods you can use to get which check boxes are check.

If you select the input box, either by name or id, you can looked at it's `.checked` property.

In this way, you could see wether or not a checkbox was checked.

You could also get at the list of checkboxes, loop through them, and make another array of just the values of all the checked ones.

Special note: `document.animals.likes` is kind of an array, but it's more accuratly a "node list".

```
document.animals.addEventListener("submit", function(e){
  e.preventDefault()
  //assign our animals that are liked to a variable
  var animals = document.animals.likes
  //create a new array that we can fill with the values (as strings) of our checkboxes
  var checkedAnimals = []
  //loop through each checkbox
  for (var i = 0; i < animals.likes.length; i++){
    //check to see if the checkbox is checked
    if(animals[i].checked){
      //add the values to our new array
      checkedAnimals.push(animals[i].value)
    }
  }
  console.log(checkedAnimals)
})

```

Things got heavy there at the end, but for the most part, working with forms is great. Start practicing!

# **An easier way to get array of values from checkboxes**

Fortunately, there's a slightly easier alternative we can use to get the list of checked items using `document.querySelectorAll`:

  //Required Text
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        
        <form>
            <input type="text" placeholder="First Name" required/>
            <button>Submit</button>
        </form>
        
        
        
        <script src="index.js"></script>
    </body>
</html>

  //Radios
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        
        <form name="myForm">
            Male:   <input type="radio" name="gender" value="Male"/>
            Female: <input type="radio" name="gender" value="Female"/>
            <button>Submit</button>
        </form>
        
        
        
        <script src="index.js"></script>
    </body>
</html>

const form = document.myForm

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    console.log(form.gender.value)
})

  //Checkboxes
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        
        <form name="myForm">
            Male:   <input type="radio" name="gender" value="Male"/>
            Female: <input type="radio" name="gender" value="Female"/>
            
            Which are your favorite? Select all that apply:
            Movies: <input type="checkbox" value="Movies" name="entertainment"/>
            Games: <input type="checkbox" value="Games" name="entertainment"/>
            <button>Submit</button>
        </form>
        
        
        
        <script src="index.js"></script>
    </body>
</html>

const form = document.myForm

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    // console.log(form.gender.value)
    
    // console.log(form.entertainment)
    
    const checkedInputs = []
    
    for(let i = 0; i < form.entertainment.length; i++){
        if(form.entertainment[i].checked){
            checkedInputs.push(form.entertainment[i].value)
        }
    }
    
    console.log(checkedInputs)
})

  //Options
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        
        <form name="myForm">
            Male:   <input type="radio" name="gender" value="Male"/>
            Female: <input type="radio" name="gender" value="Female"/>
            
            Which are your favorite? Select all that apply:
            Movies: <input type="checkbox" value="Movies" name="entertainment"/>
            Games: <input type="checkbox" value="Games" name="entertainment"/>
            
            <select name="city">
                <option value="Paris">Paris</option>
                <option value="New York">New York</option>
                <option value="Chicago">Chicago</option>
            </select>
            
            
            <button>Submit</button>
        </form>
        
        
        
        <script src="index.js"></script>
    </body>
</html>

const form = document.myForm

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    // Radio Inputs
    // console.log(form.gender.value)
    
    
    // Checkbox Inputs
    // console.log(form.entertainment)
    
    // const checkedInputs = []
    
    // for(let i = 0; i < form.entertainment.length; i++){
    //     if(form.entertainment[i].checked){
    //         checkedInputs.push(form.entertainment[i].value)
    //     }
    // }
    
    // console.log(checkedInputs)
    
    
    // Select Option inputs
    
    console.log(form.city.value)
    
    
})


// Node.JS //
Node is a powerful tool that allows Javascript to be interpreted *outside* of the browser - most importantly, it allows Javascript to be used as a server-side language.

What does this mean?

Traditionally we used a backend language (like Python, Ruby, C#, Go, etc.) to retrieve and control the data from the database. It was then passed to the *front end* where javascript (and the browser) would take over displaying the information to the end user. Thus nearly every *back end* programmer had to know Javascript *and* some other language.

Javascript was made to use in the browser, but Node changed that. A programmer could use Javascript on the *front end* to display the information **AND** use Javascript, with Node, on the *back end* to get and manipulate data from the data base.

Node has a vast community of contributors and a large amount of packages available via the Node Package Manager (NPM). Node is one of the most contributed to programs in the world.

### **Background**

Node was built on top of the JavaScript V8 Engine, which was developed by Google to run JavaScript code in the Google Chrome browser. The V8 Engine is widely considered the best JavaScript engine available out there.

Through an initiative in the open source community, the power of the V8 engine was brought to the command line by the creation of Node.js. Node.js is free and open-source, comes with its own extensive API for interacting with your machine (instead of just a browser window), and thus allows developers to build a server entirely in JavaScript. Before node.js, servers needed to be written in languages that were already built to interact with machine code such as C#, Java, Python, or Ruby (amongst many others). Now a developer can write both server-side and client-side code entirely in JavaScript!

There are certain requirements we need in a system in order to create a web server:

- Better ways to organize our code into reusable pieces
- Ways to deal with files
- Ways to deal with databases
- Ability to communicate over the internet
- Ability to accept requests and send responses (in a consistent and standard way)
- Way to deal with work that takes a long time

The creators of Node.js added APIs that allow it to accomplish all of the above requirements. The full API documentation can be found at [nodejs.org/api/](https://nodejs.org/api/). Any aspiring Node.js developer should read through the Node.js documentation extensively to become familiar with the tools that are available at your disposal.

