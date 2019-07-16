# Key Questions
✅ Let's look at some cool JavaScript stuff with events
  ✅ Patatap
  ✅ Eelslap
  ✅ Specimens
✅ What is an event in JavaScript?
  ✅ What kinds of events are there in the DOM? 
     ✅ https://codepen.io/telegram/pen/PJpPGm
✅ How do I make some code run when an event occurs in my DOM?
✅ What is a callback? 
  ✅ What does it mean that JavaScript has first-class functions?
  ✅ What is the difference between function definition and function invocation?
✅ How can I listen for events on a DOM node / HTML element?
  ✅ Aside: what is the data type of a DOM node and why do I care?

* What calls the callback that I pass to addEventListener? What gets passed into that callback?
  * What is event.target and why is it useful?

# Properties of a DOM node we should be pretty familiar with by the end of the week:
* .innerHTML
* .innerText
* .value
* .id
* .className
* .classList
* .dataset
* .addEventListener()

# Silly Deliverables
As a user, I want... 

* to alert "HELLO!" when I click the button
* to hear a sound when I scroll (see `audio.js`, especially `makeSound()`)
* to hover over any li and have its background color change to pink
* anything I click on should have an emoji added to its innerHTML
  * What happens to my hover event now?

# Actual Deliverables
* to be able to click the button and add a taco emoji to the list
* to be able to click an emoji and change it to a coconut
* to be able to right-click an emoji and delete it
* Add new buttons to add ["🍩", "🌮", "🥥", "🍣"] to the list
  * Bonus: use the same callback for all the buttons. event.target and datasets can help you here!
* to be able to hide the "not so" in the h1 using .style.display = "none" when no mean emojis remain

# Bonus (ok if we don't get to these)    
* What is the DOMContentLoaded event and why is it cool?
* What is event bubbling and why is it important to know about? 
  * https://codepen.io/telegram/pen/maJxVV
  * What does event.stopPropagation() do and why should I avoid using it?
* What is a dataset, and how can they help me?
* What is event.preventDefault() and why is it useful?
* What will happen if I += the innerHTML of an element with children that have event handlers?

https://www.w3schools.com/jsref/dom_obj_event.asp



