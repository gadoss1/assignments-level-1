Mutability and Value Types

// Mutability and Types //


// Immutable - Cannot be changed => Passed by value
    // String
    // Numbers
    // Booleans
    var age = 10
    var otherAge = age
    otherAge = 12
    
    console.log(age)
    

// Mutable - Containers => Passed by Reference
    // Array
    // Object
    
    // var arr = [1, 2, 3, 4, 5]
    
    var person = {
        name: "harry",
        age: 12
    }

    // var newPerson = person
    // newPerson.hasWand = true 
    // console.log(person)  
    
    
// typeof - returns the type of the data immediately to its right
    console.log( typeof [1, 2, 3, 4] )

    // Mutability - the ability to change (mutate) a peice of data

    // Immutable - cannot be changed
        String
        Number
        Boolean
        
    // Mutable - can be changed
        Array
        Object
        
// The 'typeof' operator will return the type of the data immediately to its right
    // ex:
        var name = "steve"
        console.log( typeof name ) // "string"

Although this post doesn't cover concepts you'll necessarily need to understand on a day-to-day basis, the information it presents could potentially help you understand a bug that would otherwise be *very* difficult to debug.

# **Value Types**

Every *thing* in JavaScript is one of two value types: **primitive** or **reference** type. In JavaScript, the following are all **primitive** types:

- strings (`"this is a string"`)
- numbers (e.g.: `3.14` or `42` or `NaN`)
- booleans (`true` or `false`)
- `undefined`
- `null`

and the following are **reference** types:

- Arrays
- Objects
- Functions

Before we dive into why this is useful, let's also tackle another definition.

# **Mutability**

The word *mutable* stems from *mutate* - which of course means to change. In JavaScript, the above-mentioned primitive data types are all considered "immutable", or unable to change. Conversely, the reference data types are mutable, or *able* to change.

### **What exactly are variables?**

To better understand this, we first need to understand what variables really are. All a variable does is point to a place in memory where the actual data is being saved. Consider the following example:

```
var myNumber = 42;
myNumber = 43;
console.log(myNumber);  // prints 43

```

On the first line, I saved `42` to memory and set up a pointer to that place in memory with the data, the number 42.

So what exactly is happening when I run the line myNumber = 43?
At first glance, it may seem like I mutated myNumber, changing the number 42 to 43. In reality, what really happened was I reset where the variable myNumber points to in memory. For example, I could also have said myNumber = true, and that doesn't mean I changed the value of the number 42. This is what actually happens when I run myNumber = 43:
The reference (pointer) to the original place in memory where the number 42 was being stored is removed and a new pointer is created pointing instead at the number 43 and its place in memory. When JavaScript finds that the `42` no longer has anything pointing to it, it *garbage collects* the 42, removing it entirely and frees up the memory that was being taken up.

### **Immutable types**

In JavaScript, all value types (strings, numbers, booleans, `undefined`, and `null`) are immutable.

Hopefully it makes some sense that numbers and booleans are immutable, but what about strings? Since I can index into a string as if it were an array, it seems intuitive that I should be able to change any given letter to another letter and keep that data at the same address in memory. Consider this example:

```
var myString = "pool";
console.log(myString[0]);  // prints "p"
myString[0] = "t";  // I expect this to change myString to "tool"
console.log(myString);  // prints "pool"

```

We can see that strings are also *immutable!* If I want to "change" a string, I'll need to reset the pointer to another place in memory, creating a new string. This is why you'll see things like:

```
...
myString = myString + "!";
// And the shorthand version of this is myString += "!"
...

```

With the `=`, we're *re-assigning* the variable to another value, which is the old version of `myString` plus an `!` on the end. We haven't mutated the original string, we've reset where the variable points to!

### **What do *mutable* types look like?**

JavaScript's **reference types** (arrays and objects) are mutable. I can change the actual data itself without resetting its position in memory.

```
var fruits = ["orange", "apple"];
fruits[0] = "mango";
console.log(fruits);  // prints ["mango", "apple"]

```
The same goes for **objects**:

```
var myCar = {
    year: 2002,
    make: "Toyota",
    model: "Camry"
}
console.log(myCar.year)  // prints 2002
myCar.year = 2016;
console.log(myCar.year)  // prints 2016

```

The object mutated without needing to move its place in memory. In other words, it *changed in place*.

# **Pass by Value vs. Pass by Reference**

This is what we've been leading to: understanding how variables pass their values to other variables.

### **An analogy**

A good analogy to help understand the difference is to think of how you share a web page with a friend. If you wanted to follow the "pass by value" method, you would print out a copy of the web site and give it to your friend. If the owner of the website changes the original website, you friend's copy won't change at all. Similarly, if your friend writes all over the printed copy of the web site, the original site won't change.

On the other hand, if you wanted to follow the "pass by reference" method, you would give your friend the URL of the web site. That URL is simply a *reference* to the actual web site. Anyone with the link *will* see changes that the site owner makes every time they visit the page.

### **In code**

In JavaScript, the **value types** (strings, numbers, booleans, `undefined`, and `null`) pass their data **by value**. Check out the following example:

**Pass by Value**

```
var a = 30;
var b = a;
console.log(b);  // prints 30
a = 40;
console.log(b);  // what do you think it will print?

```

Remember, *pass by value* means that a copy is made, and changes to the original don't affect the copies. The code above produces the following output:

```
30
30

```

On the other hand, **reference types** (arrays and objects) pass their values **by reference**. You can see this in the following example:

**Pass by Reference**

```
var person = {
    name: "Susan",
    age: 43,
    eyeColor: "blue"
};
var another = person;
person.age++;
console.log(another.age);
another.age++
console.log(person.age);

```

Since `person` is pointing to an object in memory, when I make `another` variable pointing to the `person` variable, it passes its data (the person object) by reference! So any change to the object via one variable is reflected to any other variable pointing to the same object (or array).

# **Conclusion**

This is some basic-level computer science, and understanding could help you immensely when the time comes to understand why an object is seemingly changing itself at random (could turn out another variable pointing to the same object is changing it), or understanding why something isn't changing when you think it should (perhaps it is an immutable data type you're trying to change).

----------------------------------------------------------------------------------------------

// Constructor Functions //

// Constructor Functions - functions that build objects of the same shape.

// Constructor Functions can be "instantiated" using the "new" keyword to create these objects.


function Car(make, model, year, honkSound){
    this.make = make
    this.model = model
    this.year = year
    this.honkSound = honkSound
    // this.honk = function(){
    //     console.log(this.honkSound)
    // }
}

var jeep = new Car("Jeep", "Cherokee", 1995, "MEEERRRP")
var mazda = new Car("Mazda", "3 hatchback", 2015, "BLAAARP")


Car.prototype.honk = function(){
     console.log(this.honkSound)
}
 
jeep.honk()
mazda.honk()

Constructor functions are one of the most useful pieces of JavaScript you'll use, and they're prominent in just about every library and framework you'll interact with in one way or another.

Constructor functions (and classes, in Object-Oriented languages) act like **blueprints for creating objects**. It gives you the ability to define the structure for an object once, and use it as a template for creating new objects in the future.

Many times they are compared to blueprints for a house. A home builder will oftentimes use the same set of blueprints to build the basic structure of many houses, and then alter the characteristics of each home (paint color, carpeting or hardwood floors, and perhaps even some smaller structural changes) individually, after the main structure is built.

Similarly, in JavaScript we can use a constructor function to be the main outline of our objects, and change the characteristics of the objects it creates.

### **Example: A Social Media website**

Let's say you want to create a new social media website, and the time has come to define what data you want to collect from your users. In your code, you need a way to accept input from a user and create a new `user` object for every person who signs up for your site.

Every object will be similar in the properties it needs: you want to collect their first name, last name, age, favorite movie, and favorite sport, if they decide to enter it.

In other words, you're planning on having millions of objects stored in the database that all look pretty similar:

```
{
    firstName: <"user first name here">,
    lastName: <"user last name here">,
    age: <user age here>,
    favoriteMovie: <"user favorite movie here">,
    favoriteSport: <"user favorite sport here, if entered">
}

```

Notice how the structure of this object is pretty much decided already? It's just missing the values, waiting for the user to enter their information so the object can be created and saved to the database. This is the ideal time to use a constructor!

### **The Anatomy of a Function Constructor**

As previously mentioned, a function constructor is a JavaScript function, but with a few tweaks to the way we use them normally. Check out the constructor for our `user` objects:

```
function User(fName, lName, age, favMovie, favSport) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.favoriteMovie = favMovie;
    this.favoriteSport = favSport;
}

```

A couple things may stick out right away:

1. The function begins with a capital letter. This isn't strictly required for the constructor to work properly, but it is the widely-adopted convention and should always be followed.
2. The `this` keyword is everywhere!

Remember how the constructor is a "blueprint" for creating objects? Also remember that we can access an object's property by using the `.` (dot) syntax?

```
var person = {name: "Jim"};
console.log(person.name);

```

The problem is we don't want to assign a permanent variable name for every single user that gets created, nor could we really do so if we wanted. (Short of altering the web application's code, manually adding a new object for every single user that signs up... *obviously* out of the question.)

The `this` keyword allows us to refer dynamically to *whichever object is being created with this constructor function*. In other words, it allows us to add properties and methods to any object that gets instantiated with this constructor.

# **Using the constructor**

To use the constructor we need to use JavaScript's `new` keyword, and pass in the actual data we want to save to the user object:

```
var newUser = new User("Joe", "Schmoe", 42, "Ernest Goes to Camp", "UFC");

```

`newUser` now has all the properties I want my user objects to have, and all the values that were (supposedly) entered by the user. (In the above example, they're hard-coded in for simplicity's sake).

What if I wanted to create 100 new objects and save them all to an array?

```
var objectArray = [];
for (var i = 0; i < 100; i++) {
    var newObj = new User("Joe", "Schmoe", 42, "Ernest Goes to Camp", "UFC");
    objectArray.push(newObj);
}

```

That's it! Of course, all of those objects are identical which is pretty useless, but it should illustrate the power of the function constructor.

# **Methods**

We aren't limited to adding just properties to our objects in a constructor, we can add methods as well:

```
function User(fName, lName, age, favMovie, favSport) {
    ...
    this.speak = function() {
        console.log("Hi! My name is " + this.firstName + " " + this.lastName + " and my favorite movie is " + this.favoriteMovie);
    }
}

```

We can access the other properties of the same constructor by also using `this.propertyName`. If I create a new `User`, I can run the `speak()` method of the user and the output will be specific to that one user.

```
var jill = new User("Jill", "Hill", 12, "Jack and the Beanstalk", "Climbing");
jill.speak();  // prints "Hi! My name is Jill Hill and my favorite movie is Jack and the Beanstalk".

```

### **Caveat: prototypes**

The above way of adding methods to objects in a constructor is generally considered to be bad practice. It is better to instead add the methods to the `prototype` of the constructor. Check out our writeup on [Prototypes and Prototypal Inheritance](https://coursework.vschool.io/prototypes/) to better understand why. But as a quick reference, this is how you would do that:

```
function User(fName, lName, age, favMovie, favSport) {
    this.firstName = fName;
    ...
    }
}

User.prototype.speak = function() {
        console.log("Hi! My name is " + this.firstName + " " + this.lastName + " and my favorite movie is " + this.favoriteMovie);
}

var jill = new User("Jill", "Hill", 12, "Jack and the Beanstalk", "Climbing");
jill.speak();  // Still prints "Hi! My name is Jill Hill and my favorite movie is Jack and the Beanstalk".

```

# **Conclusion**

There is a lot more to learn about constructors, and understanding when it's best to use them takes time and experience. But for now you should have enough knowledge to start practicing with them and using them in your everyday code!