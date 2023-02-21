// Box Model//


The order of the Box Model from inside out:

1. Content (the element's context such as text)
2. Padding (the spacing between the content and the element's border)
3. Border (the element's border)
4. Margin (the spacing between the elements border and other neighboring elements)

Understanding the CSS box model will help you more as a web designer than just about any one other thing in CSS. Once you understand the difference between inline and block-level elements, the box model will begin to be easier to understand. Each concept is fairly straightforward to understand, so we'll work through a number of examples to illustrate the different pieces of the box model.

### **Analogy**

Imagine yourself inside of a bubble suit or a sumo suit:

![https://coursework.vschool.io/content/images/2016/08/6ycugupg64-635576098981616250-370x208.jpg](https://coursework.vschool.io/content/images/2016/08/6ycugupg64-635576098981616250-370x208.jpg)

We'll be referring to this concept throughout this lesson. Now check the diagram below:

![https://coursework.vschool.io/content/images/2016/08/boxmodel.gif](https://coursework.vschool.io/content/images/2016/08/boxmodel.gif)

In the diagram you can see each piece of the box model: `height/width`, `padding`, `border`, and `margin`.

### **Height/Width**

The height and width of an element is the amount of space the content of the element itself takes up. This is not necessarily the same as how much space the whole element takes up. In the bubble suit analogy, this is represented by *how much space your actual body takes up*. The dimensions of the content can be set by the CSS `height` and `width` properties.

***Note:** While this* can *be set in the HTML on many elements, this is a bad idea and should be avoided*

### **Padding**

An element's **padding** can be thought of as the additional space the bubble suit adds to the total amount of space you occupy. If there is no padding, it would be like the bubble suit were vacuumed to your body with no additional air between the plastic bubble material and your clothes.

The element's padding is still considered part of the element itself, so as the padding increases, the element gets larger and larger. We can see this with a span element:

```
<span class="no-padding">I'm skinny</span><span class="with-padding">I'm fat</span>
```

```
span {
    background-color: #FF4F33;
    color: #F4FEFF;
    border: none;
}

.no-padding {
    padding: 0;
}

.with-padding {
    padding: 30px;
}

```

![https://coursework.vschool.io/content/images/2016/08/span.png](https://coursework.vschool.io/content/images/2016/08/span.png)

Since `<span>` elements are inline elements, they naturally want to take up as little space as possible. By default they have no padding. Once we add padding, we can see that the element gets larger in the amount of space it takes up on the page. The text itself determines the height and width of the element, but if we want to extend the size of the element further (including a larger amount of space for the background color), we can use padding to do this.

### **Border**

An element's border is akin to the plastic walls of the bubble suit. It represents the separation between the element itself and any other elements that may be nearby.

```
<span class="little-border">Little Border</span><span class="big-border">Big Border</span>
```

```
span {
    background-color: #0FB565;
    color: #F4FEFF;
    padding: 20px;
}

.little-border {
    border: 1px dashed red;
}

.big-border {
    border: 10px dashed red;
}

```

![https://coursework.vschool.io/content/images/2016/08/Screen-Shot-2016-08-17-at-8-36-13-PM.png](https://coursework.vschool.io/content/images/2016/08/Screen-Shot-2016-08-17-at-8-36-13-PM.png)

There are a number of things we can do with an element's border, including rounding the corners, changing the border style, etc. Some of the most common properties we change are the `border-width`, `border-color`, `border-style`, and `border-radius`.

- `border-width` is simply the thickness of the border itself. In the example above, one has a `border-width` of 1 px, the other 10px.
- `border-color` is the color of the border.
- `border-style` is the pattern of the border. There are a lot of options, all of which can be found [here](http://www.w3schools.com/cssref/pr_border-style.asp).
- `border-radius` is the roundness of the corners of the border (and the element itself).

You may notice from the above image that the border is traced along the inside of the padding. It is important to note that the border will do this by default. Even if you set the item to have 0 padding, it will create the padding it needs in order for the border to still be sitting inside the element. So if you're trying to use percentages to do math with the width of items on a page, but you're also adding a border (no matter how small), your math won't work out to 100%! The widths of the borders will add just enough to make your items not sit side-by-side.

To remedy this, you'll probably want to add the following to the top of your CSS file:

```
* {
    box-sizing: border-box;
}

```

This property takes the width of the border into account when setting the `width` and `height` properties, so now you could put 2 objects side-by-side at 50% each without pulling your hair out!

### **Margin**

In our bubble suit analogy, an element's `margin` would be the space between other people who are also wearing their own bubble suits. The greater the margin, the more space between each person and their suit.

```
<span>No margin</span><span>I'm squished!</span>
```

```
span {
    background-color: #F2AD02;
    color: #F4FEFF;
    padding: 10px;
    margin: 0;
}

```

![https://coursework.vschool.io/content/images/2016/08/Screen-Shot-2016-08-18-at-3-00-49-PM.png](https://coursework.vschool.io/content/images/2016/08/Screen-Shot-2016-08-18-at-3-00-49-PM.png)

*Note: You'll notice in the image that it still kind of looks like there is a little bit a margin separating the two spans. This has to do with a quirk of HTML obeying whitespace between HTML tags on separate lines, and it doesn't mean that the elements have some margin. If you put the two spans on the same line in the editor (`<span>No margin</span><span>I'm squished!</span>`), you'll see that small space disappear.*

Let's see a more realistic example of when margin should be used: navbar links!

```
<nav><ul><a href="index.html"><li>Home</li></a><a href="about.html"><li>About</li></a><a href="contact.html"><li>Contact</li></a><a href="donate.html"><li>Donate</li></a></ul></nav>
```

```
nav li {
    display: inline-block;
    background-color: #3B62F2;
}

nav li > a {
    text-decoration: none;
    color: #F4FEFF;
}

```

![https://coursework.vschool.io/content/images/2016/08/Screen-Shot-2016-08-18-at-3-08-19-PM.png](https://coursework.vschool.io/content/images/2016/08/Screen-Shot-2016-08-18-at-3-08-19-PM.png)

This navbar is really cramped and each link is really small! How would we make each element larger so the user didn't have to be very precise with their mouse? Padding! Remember, padding adds space inside the element so as to make the element's insides larger:

```
nav li {
    display: inline-block;
    background-color: #3B62F2;
    padding: 10px;
}

```

![https://coursework.vschool.io/content/images/2016/08/Screen-Shot-2016-08-18-at-3-15-14-PM.png](https://coursework.vschool.io/content/images/2016/08/Screen-Shot-2016-08-18-at-3-15-14-PM.png)

If we wanted to move each of these links further apart from one another? This is where margin comes in to play! I could add `margin: 10px;` to my `nav li` selector, and that would add a margin of 10px to all 4 sides:

![https://coursework.vschool.io/content/images/2016/08/Screen-Shot-2016-08-18-at-3-17-49-PM.png](https://coursework.vschool.io/content/images/2016/08/Screen-Shot-2016-08-18-at-3-17-49-PM.png)

### **Limitations of margin**

Margin shouldn't be used to lay out your page! If you want something to be on the right side of your page, **do not add `margin-left: 90%` to you element!** This is the job of the `position` property. Margin should be used solely for pushing other elements away, usually just by a relatively small amount.

### **Another example: images and text**

It's common to have an image that sits inline with your text. Image tags are inline elements, and text tags are block-level elements, so there's a property that allows our image tags to "float" next to our text. However, because it is still an inline element, it will still try to take up as little space as possible, resulting in this:

```
<img class="kitten-pic" src="http://placekitten.com/g/200/300" alt="Kitten!"><div class="kitten-description"><p>This is a picture of a kitten. His name is Mr. Pickles, and he is the cuddliest kitten you'll ever meet. However, if you get on his bad side he will shred your skin away, and then shred your couch cushions for good measure.</p><p>It's best not to get on his bad side.</p></div>
```

```
.kitten-pic {
    float:left;
}

```

![https://coursework.vschool.io/content/images/2016/08/Screen-Shot-2016-08-18-at-3-30-44-PM.png](https://coursework.vschool.io/content/images/2016/08/Screen-Shot-2016-08-18-at-3-30-44-PM.png)

The text is far too close to that kitten! Margin to the rescue.

```
.kitten-pic {
    float:left;
    margin-right: 15px;
}

```

![https://coursework.vschool.io/content/images/2016/08/Screen-Shot-2016-08-18-at-3-30-09-PM.png](https://coursework.vschool.io/content/images/2016/08/Screen-Shot-2016-08-18-at-3-30-09-PM.png)

Much better.

### **Shortcut properties**

So far we've been using the shortcut properties `padding`, `border`, and `margin` without explaining what they mean.

Each of those properties have a long-form version that deals with each side individually:

```
/* Padding */
padding-top: 20px;
padding-right: 20px;
padding-bottom: 20px;
padding-left: 20px;

/* Border */
border-top-width: 2px;
border-right-width: 2px;
border-bottom-width: 2px;
border-left-width: 2px;
border-top-style: dashed;
... etc ...
border-top-color: blue;
... etc ...
border-top-right-radius: 20%;
... etc ...

/* Margin */
margin-top: 20px;
margin-right: 20px;
margin-bottom: 20px;
margin-left: 20px;

```

We can always use these long-form version of the properties if we need a lot more flexibility, but fortunately we're given the option to shorten all of these.

For padding and margin, we can decide to either put 1, 2, 3, or 4 size values, separated by a space, in the `margin` or `padding` property:

```
margin: 10px;
margin: 10px 20px;
margin: 10px 20px 30px;
margin: 10px 20px 30px 40px;

```

The order is important: 1) top, 2) right, 3) bottom, and 4) left. With these in mind, the following rules apply:

- If you have a single value:
    - Your value applies to **all 4 sides**
- If you have 2 values:
    - The **first value** applies to the **top and bottom** sides, and
    - The **second value** applies to the **right and left** sides.
- If you have 3 values:
    - The first value applies to the top side,
    - The second value applies to the right and left sides, and
    - The third value applies to the bottom side.
- If you have 4 values:
    - The order of the values goes, respectively, **top, right, bottom, left**.

Other shortcut methods follow a different pattern. With borders, for example, the `border` shortcut method is simply a combination of `border-width`, `border-style`, and `border-color` (in that order), all of which are optional:

```
border: 3px;
border: dashed;
border: red;
border: 3px red;
border: 3px dashed;
border: solid blue;
border: 3px solid red;
... etc ...

```

### **Conclusion**

The box model can seem complex and confusing at first. The more time you spend with it, the better you'll get at using it to your advantage.
----------------------------------------------------------------------------------------------------------

// CSS Layout & Positioning //

<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <div>
            <img class="coffee" src="https://images.pexels.com/photos/6347/coffee-cup-working-happy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
             <img class="decaf" src="https://images.pexels.com/photos/6347/coffee-cup-working-happy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
        </div>
        
        
        <p> lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
          </p>
        <p> lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
          </p>
        <p> lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
          </p>
        
    </body>
</html>

html, body {
    margin: 0;
    padding: 0;
    
}
.coffee {
    
    width: 425px;
    border: 2px solid red;
    
}
.decaf {
    height: 400px;
    width: 555px;
    border: 2px solid blue;
}
------------------------------------------------------------------------------------------------------------
// Responsive Design //
Responsive Design
    - Designing a webpage so that a user may access your site on any sized device, mainly mobile, tablet and desktop, and your website will respond appropriately.
    
    - Common method for approach is Mobile First, meaning to do your mobile design first and then use media queries to style the tablet and desktop views.
    
<html>
    <head>
        <title>HTML</title>
        <link rel="stylesheet" href="./style.css"/>
    </head>
    <body>
        <h1>Responsive Design with CSS Media Queries</h1>
        
         <!-- Mobile First -->
         <div id="box">
            <h1>I am a Box!</h1>
         </div>
    </body>
</html>

* { /* Resets and Default styling */
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-weight: lighter;
}

/* Mobile Design */
#box {
    border: 2px solid black;
       height: 300px;
}

#box > h1 {
    background-color: dodgerblue;
}


/* Larger Phones */
@media only screen and (min-width: 400px){
    
    #box {
        border: 2px dashed green;
     
    }

    #box > h1 {
        background-color: firebrick;
    }
        
}

/* Tablet */
/* 5px dashed purple */
/* cornflowerblue */
@media only screen and (min-width: 650px){
    
     #box {
        border: 5px dashed purple;
    }

    #box > h1 {
        background-color: cornflowerblue;
    }
    
}


@media only screen and (min-width: 650px) and (max-width: 700px){
    body {
        background-color: yellow;
    }
}



In this age of mobile devices the developer has to account for their product being viewed on a hand held or tablet sized device as well as laptops and desktops. This means your site should look great on any size screen!

[Here](http://www.burlingtonnews.net/burlington_ufo_center.html) is an example of a website that does not adapt to screen size. (Laptops and desktops: follow the link, grab a corner of your browser and shrink it to phone size...notice how none of the elements reposition and much of the information is offscreen because of it? This makes users very unhappy.)

### **Responsive web design**

Responsive web design is an approach to web design aimed at making your sites content look great on all screen sizes.

![https://coursework.vschool.io/content/images/2016/12/Screen-Shot-2016-12-26-at-9.49.14-PM.png](https://coursework.vschool.io/content/images/2016/12/Screen-Shot-2016-12-26-at-9.49.14-PM.png)

These days, all web apps should be created with this approach.

### **Media queries**

A media query is a fancy way of asking "How wide is the window." We can also query to check if our device is in landscape mode.

It's almost like writing an if statement for your CSS.

In our CSS, we could have the line:

```
@media (max-width: 500px){}

```

This is like saying, `if` the screen(or window of the browser) is less than 500px. We write the `then` part of the if-then statement in brackets.

```
@media (orientation: landscape) {
    .my-class {
        color: red;
    }
}

```

This one is saying: `If` the device in in landscape `then` turn .my-class red.

This example is arbitrary, but we could see how it would be nice to show certain wider content when in landscape, and hide it while our phone or tablet is in held upright.

These work with `and` statements as well...

```
@media (min-width: 600px) and (max-width: 800px) {
  html { background: red; }
}

```

So the screen must have a minimum width of 600 pixels AND a maximum width no greater than 800 pixels in order to run the code inside of the {}'s.

Media queries also work with `or` statements...

```
@media (max-width: 600px), (min-width: 800px) {
  html { background: red; }
}

```

Notice we use a "," rather than `or`, that is because the above statement will actually be read as two different media queries, but for the sake of understanding you can view this as a simple or statement.

So we might have several media queries to cover the many different size screens our site might be viewed on. We might have one for phone sized screens, one for tablets and one for laptops.

Here is sudo-code (not actual code, but an english approximation of the code) as an example:

```
if (phone size) do this {}
if (tablet size) do this {}
if (larger than tablet) do this {}

```

Let's now break down the two phrases you will see most often...`max-width` and `min-width` and how to remember which does what.

When using media queries we are checking to see if the screen size is between 0 and infinity but we will substitute `min-width`, if we have it, for the first number and `max-width`, if we have it, for the second number.

```
0 through infinity
        -or-
min-width through max-width

```

So, if we only have a `min-width` of 230px we are checking to see if our screen size is between min-width(230px) and infinity (we could say 10,000 if that helps).

`230px through 10,000px`

If our screen size was 650px width would the following media query would be true or false?

```
@media (min-width: 100px){...}

```

```
@media (min-width: 100px){...} // 650 -> true

```

Our screen size of 650px is between min-width (100) and infinity so the above code in {...} will run.

Here is another:

```
@media (max-width: 600px){...}

```

```
@media (max-width: 600px){...} //650 -> false

```

In the above we are checking to see if our screen size (650px) is between 0 and `max-width`... 0 - 600. 650 is not between them so the code in the `{...}` will not run.

```
@media (min-width: 601) and (max-width: 850px){...}

```

```
@media (min-width: 601) and (max-width: 850px){...} // 650px -> true

```

We are checking to see if our screen size (650px) is between min-width and `max-width` which translates to: 601 - 850. 650 is between those two numbers so the `{...}` will run.

Let's get a bit more complicated now.If our screen size is 650px what color will our background be?

```
@media only screen and (min-width: 640px)  {background: blue}
@media only screen and (min-width: 479px)  {background: red}

```

You guessed it! Red!

Why? Because both media queries are true and so first the screen will be turned blue by the first query (too fast to see), then it will be turned red by the second. And red it will stay. (Unless acted upon later in our CSS!)

Suppose we wanted the first (background: blue) to apply to any screen size over 640?

```
@media only screen and (min-width: 640px)  {background: blue}
@media only screen and (min-width: 479px), (max-width: 639px) {background: red}

```

We added (max-width) to the second to give it a range. Thus the first will handle anything between min-width and infinity (10,000) so...640 - 10,000. And the second would be between min-width(479) and max-width (639) so...479 - 639.

```
479 - 639 --> red
640 - 10,000 --> blue

```

Note: I've used 10,000 as infinity to make it easier to read only. Infinity is, of course, not 10,000.

Note: `only screen` is made of two recognized key words, the first only is a keyword not recognized by older browsers and will keep this block of CSS from running on them. The second screen is saying if we are printing to a screen rather than email or printer, etc. then do the following code.

For more information on `only` see this Stack Overflow answer @Hybrid's answer.

[Here](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/) is a link with the various sizes of common devices including Apple Watches, various phones, general rules for laptops/desktops (because there are so many) and tablets.

Let's look at some mobile first examples (because you should ALWAYS design for mobile first):

```
// This applies from 0px to 600px
body {
  background: red;
}

```

```
// This applies from 600px onwards
@media (min-width: 600px) {
  body {
    background: green;
  }
}

```

This accounts for only two sizes, but that is still better than accounting for only one, much better.

Here is a larger, or rather more detailed, example:

```
/*Mobile Large 620px*/
@media screen and (min-width: 38.75em) {
/*your code*/
}

/*Tablet Small 740px*/
@media screen and (min-width: 46.25em) {
/*your code*/
}

/*Tablet Large 880px */
@media screen and (min-width: 55em) {
/*your code*/
}

/*Desktop Small 955px*/
@media screen and (min-width: 59.6875em) {
/*your code*/
}

/*15.5 Desktop Medium 1100px */
@media screen and (min-width: 68.75em) {
/*your code*/
}

/*15.6 Desktop Large 1240px*/
@media screen and (min-width: 77.5em) {
/*your code*/
}

/*Desktop X-Large 1403px */
@media screen and (min-width: 87.6875em) {
/*your code*/
}

/*Print*/
@media print {
/*your code*/
}

```

Note: Bootstrap (the framework) uses media queries so while you will find that Bootstrap might be an easier choice to create responsive websites, you need to understand Media Queries to understand Bootstrap.

### **Mobile First**

Mobile First is a popular design practice. This means that we design for phones and small screens first.

This helps our content load quicker on small screes.

Instead of using `max` as in `@media only screen and (max-width: 750px)` we use `min`.

```
@media only screen and (min-width: 750px)

```

### **Common usage**

You will often see, and will more than likely what to encapsulate all the design for your media queries group in their sizes.

```
@media only screen and (min-width: 500px){
  p {
    font-size: 10px;
  }
  .nav-bar {
    display: none;
  }
}

@media only screen and (min-width: 750px){
  p {
    font-size: 15px;
  }
  .nav-bar {
    display: block;
  }
}

```

Media queries will overrule general CSS written outside of a media query block. So in both of the follow cases, the background color would be blue with the screen was less than 500px wide.