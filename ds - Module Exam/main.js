// DS - MODULE EXAM



// Canvas Setup
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1200;
cnv.height = 700;

// Global Vars
let imageElement = document.getElementById("spacebag"); 

let lasers = [];
for (let i = 0; i < 100; i++) {
    lasers.push({
        x : 0,
        y : Math.floor(Math.random() * cnv.width),
        h : 5,
        w : Math.floor(Math.random() * 150 + 50),
        speed : Math.floor(Math.random() * 10 + 20),
        color : "red"
    });  
}


//Main Program Loop
requestAnimationFrame(draw);


// Event Listeners

document.addEventListener("mousemove", mouseEventHandler(event));
document.addEventListener("keypress", keypressHandler);

// Canvas Drawing
function draw() {
    //Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    for (let i = 0; i < lasers.length; i++) {
        ctx.fillStyle = lasers[i].color;
        ctx.fillRect(lasers[i].x,lasers[i].y,lasers[i].w,lasers[i].h);
        lasers[i].x += lasers[i].speed;
        if (lasers[i].x >= cnv.width) {
            lasers[i].x = 0;
            lasers.push();
        }
    }
    

    // Request another Animation Frame
    requestAnimationFrame(draw);
}









// getRandomColor
function getRandomColor() {
    // create an array of the numbers 0-9 and letters A-F (hint: you can start with the string '0123456789ABCDEF' and split it to save time)
    let colorArray = '0123456789ABCDEF';
    let separateArray = colorArray.split("");
    console.log(separateArray);
    // create a variable to store the color. Initialize it with the value '#'
    let colorLetter = "#" + [];

    // loop 6 times, each time adding a random value from the array created above.
    let count = 0;
    for (let i = 0; i < 6; i++) {
        
    }

    // return the color variable
    return colorLetter;
   
}


// mouseEventHandler Handler
function mouseEventHandler(event){
    for (let i = 0; i < lasers.length; i++) {
        if (event == "mousemove") {
            lasers[i].y = event.y;
        }
    }

    
}

// keypressHandler
function keypressHandler(event){
    for (let i = 0; i < lasers.length; i++) {
        if (event == 'KeyQ') {
            lasers[i].speed +=  1;
        }
        else if (event == 'KeyZ') {
            lasers[i].speed -= 1;
        }
    }
   


}

// myBonusFunction
function myBonusFunction(event){
    if (event == "KeyR") {
        lasers.push({
            x : 0,
            y : Math.floor(Math.random() * cnv.width),
            h : 5,
            w : Math.floor(Math.random() * 150 + 50),
            speed : Math.floor(Math.random() * 10 + 20),
            color : "red"
        });
    }
    else if (event == "Space") {
        lasers.pop();
    }
}