```

██████╗ ██╗███████╗    ██╗  ██╗ █████╗ ██████╗ ██████╗     ██████╗
██╔══██╗██║██╔════╝    ██║  ██║██╔══██╗██╔══██╗██╔══██╗    ╚════██╗
██║  ██║██║█████╗      ███████║███████║██████╔╝██║  ██║     █████╔╝
██║  ██║██║██╔══╝      ██╔══██║██╔══██║██╔══██╗██║  ██║     ╚═══██╗
██████╔╝██║███████╗    ██║  ██║██║  ██║██║  ██║██████╔╝    ██████╔╝
╚═════╝ ╚═╝╚══════╝    ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝     ╚═════╝


```
# What is this?

This is an attempt to recreate a riddle from Die Hard With a Vengeance:

```
In the movie Die Hard 3, Bruce Willis is given this task: he has to figure out how to get exactly 4
litres of water in a beaker. He has a tap with running water, a 3 litre beaker and a 5 litre beaker.
There is no shortage of water in the tap, but time is limited, so he needs to get to the answer in 
the minimum number of steps.
```

# How does it work?

Visit the web app [here](https://being-bruce.herokuapp.com/)!

The aim of the game is to get four litres of water using three and five litre containers. The bank of buttons at the bottom of the page can be used to fill, empty or transfer containers and the 'weigh' button can be pressed to assess if you've managed to get four litres into the larger container. But watch out- you only have five minutes to solve the problem!

# Tech I'm using:

* Node.js and Express
* Jasmine for unit testing
* Mocha (test framework), Chai (assertion library) and Zombie (headless browser) for feature testing
* Javascript (game logic)
* jQuery (web interface)
* HTML and CSS
* Heroku (web deployment)

# My approach:

I was originally hoping to make this very interactive by making a graphical user interface in HMTL5 Canvas, which seems like a good platform for web apps and games, but my experience working on [Mind Mapp](https://github.com/wemmm/mytm) has shown that it's difficult to test. Although it wouldn't be impossible, I wasn't satisfied that I would be able to have a canvas app properly tested within the time constraints of this test. I reassessed what was plausible time-wise yet still retained interactivity and settled on using jQuery to make an interface that was reactive and informative for the user.

I set up Node and Express to serve the web page, then assembled the game logic via test driven development with Javascript and Jasmine. I created three different objects to keep responsibilities separate:

* Three Litre Jug- understands capacity of the smaller vessel.
* Five Litre Jug- understands capacity of the larger vessel.
* Water Puzzle- understands movement of water between other objects.

![unittest](https://github.com/wemmm/water-puzzle/blob/master/public/images/unittests.png)

I then configured Mocha, Chai and Zombie so that I could run feature tests on the web app itself thanks to Zombie's headless browsing, and created:

* interface.js
* timerLogic.js
* styles.css

These allowed me to create, style and add functionality to buttons on a user interface. Through the user interface, I was able to add win and lose states, a countdown timer and a toggleable instructions pop up.

![featuretest](https://github.com/wemmm/water-puzzle/blob/master/public/images/featuretests.png)

As I had used Node.js and Express, after a bit more configuration I was able to use Heroku to deploy the app to the web so that it can be played online. After some more styling, it now looks like this:

![styled](https://github.com/wemmm/water-puzzle/blob/master/public/images/finishedstyling.png)

# Issues & To Do List:

I would love to one day remake this in HTML5 Canvas, which I think would be even more interactive. A user might be able to see, reposition and pour water by dragging and dropping containers, or fill them by holding them under a tap object.

Given more time, I would have liked to dynamically show how much water is inside a container rather than just representing the amount numerically. 

# Attributions

* The icons used to illustrate the scales and water vessels are made by [Freepik](https://www.flaticon.com/authors/freepik) from [FlatIcon](https://www.flaticon.com)
* [The scene](https://www.youtube.com/watch?v=6cAbgAaEOVE) from Die Hard With a Vengeance that this is based on.
* [The maths](https://www.youtube.com/watch?v=0Oef3MHYEC0) behind the riddle.
