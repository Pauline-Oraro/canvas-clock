//retrieves the canvas element from the HTML document by using its id and assigns it to the canvas variable
const canvas = document.getElementById("myCanvas");

//create a 2d drawing object for the canvas object
const ctx = canvas.getContext("2d");

//radius of the clock
let radius = canvas.height /2

//position the canvas to the center
ctx.translate(radius, radius)

//reduce the clock radius
radius = radius * 0.90

//calls the draw clock function at every 1000 milliseconds
setInterval(drawClock, 1000);

//a function to draw the clock which is the main function responsible for drawing the clock
function drawClock(){
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
}

// function to draw the clock face
function drawFace(ctx, radius){
    //create a radial gradient
    const gradient = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    //color stops
    gradient.addColorStop(0, "#333");
    gradient.addColorStop(0.5, "white");
    gradient.addColorStop(1, "#333");

    //draw white circle
    ctx.beginPath();
    //defines the circle
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    //fill the circle with a color
    ctx.fillStyle = '#7EC8E3';
    ctx.fill();

    //the stroke style
    ctx.strokeStyle = gradient;
    ctx.lineWidth = radius * 0.09;
    ctx.stroke();

    //a small circle at the center
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
}


//function to draw the clock numbers
function drawNumbers(ctx, radius){
    //set the font size to 15% of the radius
    ctx.font = radius * 0.18 + "px Verdana";
    ctx.fontWeight = "bolder"
    //text alignment
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    //calculates the  position for 12 numbers to 85% of the radius, rotated (PI/6) for each number
    for (let num = 1; num < 13; num++){
        let ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        //writes the numbers
        ctx.fillText(num.toString(), 0, 0);
        ctx.fillStyle = "black"
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
    }
}

//function to draw the clock hands
function drawTime(ctx, radius) {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    //hour
    hour = hour%12;
    hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second = (second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    //define the start to draw the line
    ctx.beginPath();
    //defines the line width to use
    ctx.lineWidth = width;
    //defines the cap style of the line
    ctx.lineCap = "round";
    //define a start point
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    //define an end point
    ctx.lineTo(0, -length);
    //the stokestyle
    ctx.strokeStyle = "green"
    //do the drawing
    ctx.stroke();
    ctx.rotate(-pos);
}