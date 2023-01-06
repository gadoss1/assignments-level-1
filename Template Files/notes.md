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
</html>//
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








