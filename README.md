```

██████╗ ██╗███████╗    ██╗  ██╗ █████╗ ██████╗ ██████╗     ██████╗
██╔══██╗██║██╔════╝    ██║  ██║██╔══██╗██╔══██╗██╔══██╗    ╚════██╗
██║  ██║██║█████╗      ███████║███████║██████╔╝██║  ██║     █████╔╝
██║  ██║██║██╔══╝      ██╔══██║██╔══██║██╔══██╗██║  ██║     ╚═══██╗
██████╔╝██║███████╗    ██║  ██║██║  ██║██║  ██║██████╔╝    ██████╔╝
╚═════╝ ╚═╝╚══════╝    ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝     ╚═════╝

                          Water Riddle
```
# What is this?

This is an attempt to recreate a riddle from Die Hard With a Vengeance:
```
In the movie Die Hard 3, Bruce Willis is given this task: he has to figure out how to get exactly 4 litres of water in a beaker. He has a tap with running water, a 3 litre beaker and a 5 litre beaker. There is no shortage of water in the tap, but time is limited, so he needs to get to the answer in the minimum number of steps.
```

# How does it work?

This will hopefully be a live web application so the eventual URL will go here, as will instructions on how to interact with it.

# Tech I'm using:

* Node.js
* Express
* Jasmine for unit testing
* Mocha (test framwork), Chai (assertion library) and Zombie (headless browser) for feature testing
* Javascript
* jQuery
* HTML and CSS

# My approach:

I was originally hoping to make this very interactive by making a graphical user interface in HMTL5 Canvas, which seems like a good platform for web apps and games, but my experience has shown that it's difficult to test. Although it wouldn't be impossible, I wasn't satisfied that I would be able to have a canvas app properly tested within the time constraints of this test.

I set up Node and Express to serve the web page, then assembled the game logic via test driven development with Javascript and Jasmine. I created three different objects to keep responsibilities separate:

* Three Litre Jug- understands capacity of the smaller vessel.
* Five Litre Jug- understands capacity of the larger vessel.
* Water Puzzle- understands movement of water between other objects.

I then configured Mocha, Chai and Zombie so that I could run feature tests on the web app itself thanks to Zombie's headless browsing, and created:

* interface.js
* timerLogic.js
* styles.css

These allowed me to create, style and add functionality to buttons on a user interface. Through the user interface, I was able to add win and lose states, plus a countdown timer.

# Attributions

The icons used to illustrate the scales and water vessels are made by [Freepik](https://www.flaticon.com/authors/freepik) from [FlatIcon](https://www.flaticon.com)
