# canvas-clock
A canvas clock
The provided code is a JavaScript script that creates a clock using an HTML canvas element. 
It draws a clock face, numbers, and clock hands to show the current time. Here's a summary of what the code does:

Retrieves the canvas element with the ID "myCanvas" from the HTML document and assigns it to the canvas variable.

Creates a 2D drawing context for the canvas using canvas.getContext("2d") and assigns it to the ctx variable. This context is used for drawing on the canvas.

Sets the initial radius of the clock to be half of the canvas height.

Translates the drawing context to the center of the canvas using ctx.translate(radius, radius).

Reduces the radius of the clock to make it slightly smaller.

Sets up a timer with setInterval to call the drawClock function every 1000 milliseconds (1 second).

Defines the drawClock function as the main function responsible for drawing the clock. It calls three other functions: drawFace, drawNumbers, and drawTime, to draw the clock face, numbers, and clock hands, respectively.

The drawFace function creates a radial gradient to give a shaded effect on the clock face. It draws a white circle on the canvas, surrounded by the radial gradient, and places a small black circle at the center.

The drawNumbers function draws the clock numbers around the clock face. It sets the font size and alignment for the numbers and uses a loop to position and write each number around the clock.

The drawTime function gets the current time (hours, minutes, and seconds) and calculates the rotation angles for the clock hands based on the current time. It then calls the drawHand function to draw each clock hand.

The drawHand function is a utility function to draw clock hands. It takes the position, length, and width of the hand as parameters and draws a line representing the hand on the canvas.







