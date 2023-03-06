var unitLength = 20;
let boxColor = 128;
var strokeColor = 50;
// let columns = 2; /* To be determined by window width */
// let rows = 2; /* To be determined by window height */
let count = 0;
let a = false
let currentBoard;
let nextBoard;
// let sel;
let deathcolor = 255;
let val;
let reproduction = 3;
let survival = 2;
let Loneliness;
let period = 0;
let speed;
let columns;
let rows;

// let value = 0

//create table
function init() {
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            currentBoard[i][j] = 0;
            nextBoard[i][j] = 0;
        }
    }

}
// one line if




// Control speed of this game of Life.(Checkout framerate(), you can use slider to control the framerate)

//Add frameRate variable //Done

// Allow users to change the rules of survival.

//

// Allow users to change the rules of reproduction.

//

// Start / Stop the Game of life

//start : framerate > 0
//stop : framerate = 0

//Done

// Multiple colors of life on the same board.

// 

// Darken colors for stable life.

//

// Random initial states

//Done

// Well - known patterns of Game of Life to select from(Examples: Gosper Glider Gun, Glider, Lightweight train).

//Gosper Glider Gun
//


//Glider
//

//Lightweigth train
//

// Use Keyboard to control the cursor to place the life

//controll cursor to place cell
// up (x,y ,width,height)
// down (x,y ,width,height)
// left (x,y ,width,height)
// right (x,y ,width,height)


// Resize board on windows resize(Check out windowsResized())
//windowsResized()

// Switching between different styles.

//switch cell shape and table shape 
//color switch and button change

// Anythin else that you could think of.



function setup() {
    /* Set the canvas to be under the element #canvas*/


    /*Calculate the number of columns and rows */
    // columns = floor(width / unitLength);
    // rows = floor(height / unitLength);
    //slider
    var canvas = createCanvas(windowWidth - 20, windowHeight - 200);

    canvas.parent(document.querySelector("#canvas"));
    //color-picker

    columns = floor(width / unitLength);
    rows = floor(height / unitLength);
    // noCursor();
    //creadte graphic
    pg = createGraphics(20, 20);

    /*Making both currentBoard and nextBoard 2-dimensional matrix that has (columns * rows) boxes. */
    currentBoard = [];
    nextBoard = [];
    for (let i = 0; i < columns; i++) {
        currentBoard[i] = [];
        nextBoard[i] = [];

    }
    // Now both currentBoard and nextBoard are array of array of undefined values.
    init();
    // console.log(nextBoard)
    // Set the initial values of the currentBoard and nextBoard
}

// mouse hover : create eclipse on current[][]==1



// currentBoard[x][y] == 1
// currentBoard[x][y] == 0

function generate() {
    //Loop over every single box on the board
    for (let x = 0; x < columns; x++) {
        for (let y = 0; y < rows; y++) {
            // Count all living members in the Moore neighborhood(8 boxes surrounding)
            let neighbors = 0;
            for (let i of[-1, 0, 1]) {
                for (let j of[-1, 0, 1]) {
                    if (i == 0 && j == 0) {
                        // the cell itself is not its own neighbor
                        continue;
                    }
                    // The modulo operator is crucial for wrapping on the edge
                    neighbors +=
                        currentBoard[(x + i + columns) % columns][(y + j + rows) % rows];
                }
            }

            // console.log(nextBoard)
            //rule apply
            // Loneliness = document.getElementById('#Loneliness')
            //console.log(Loneliness)
            if (currentBoard[x][y] == 1 && neighbors < Loneliness) {
                // Die of Loneliness
                // console.log(Loneliness)
                nextBoard[x][y] = 0;
            } else
            if (currentBoard[x][y] == 1 && neighbors > survival) {
                // Die of Overpopulation
                nextBoard[x][y] = 0;
            } else if (currentBoard[x][y] == 0 && neighbors == reproduction) {
                // New life due to Reproduction
                nextBoard[x][y] = 1;
            } else {
                // Stasis

                nextBoard[x][y] = currentBoard[x][y];

            }
            const a = document.querySelector('#overpopulation')
                // console.log(a)
            a.value = period
        }
    }
    // Swap the nextBoard to be the current Board
    [currentBoard, nextBoard] = [nextBoard, currentBoard];
    //onsole.log(reproduction)
    period++;

    // console.log(period)
    // console.log(nextBoard)
}

function removeline() {
    strokeColor = 255;
}
//resize the grid on every single move
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
//
function addLine() {
    strokeColor = 0;
}


function draw() { //repeating unit

    background(255); //bg
    //game speed based on slider
    //white
    //cursor icon 
    // ellipse(mouseX, mouseY, 10, 10);
    // if (b == true) { frameRate(val) } else(frameRate(0))


    // console.log(val2) //speed

    frameRate(speed)
        //draw game

    generate();
    //show error while mouse drag without pause
    //console.log(nextBoard)

    //looking for pixel
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {

            //with life 
            //random box color
            // if () {}



            if (currentBoard[i][j] == 1) {

                fill(boxColor);

            } else {
                //no life
                fill(deathcolor);
            }
            stroke(strokeColor);
            rect(i * unitLength, j * unitLength, unitLength, unitLength);

        }
    }



    //another speed

    //control normal
    // currentBoard[i][j] = random() > 0.8 ? 1 : 0; // one line if
    // nextBoard[i][j] = 0;


    // var a = document.querySelector('#speed_indicator')
    // a.innerHTML = "The game fps is " + val2;

}


function restart() {
    period = 0
    init()
    loop()
    noLoop()
}

function start() {
    loop()
}

function Stop() {
    noLoop();
}

function windowResized() {
    resizeCanvas(200, 200);

}

function randomBoxColor() {
    boxColor = (color(Math.random() * 255, Math.random() * 255, Math.random() * 255))
}

function mouseDragged() {

    // If the mouse coordinate is outside the board

    if (mouseX > unitLength * columns || mouseY > unitLength * rows) {
        return;
    }
    const x = Math.floor(mouseX / unitLength);
    const y = Math.floor(mouseY / unitLength);
    // if (currentBoard[x][y] == undefined) {
    //     return;
    // }
    currentBoard[x][y] = 1;
    fill(boxColor);
    stroke(strokeColor);
    rect(x * unitLength, y * unitLength, unitLength, unitLength);

}
/**
 * When mouse is pressed
 */
function mousePressed() {
    mouseDragged();
    noLoop()
}


/**
 * When mouse is released
 */

const lonelinessDiv = document.querySelector('#loneliness')
lonelinessDiv.addEventListener('change', (e) => {
    Loneliness = e.target.value
})

const SurvivalDiv = document.querySelector('#Survival')
SurvivalDiv.addEventListener('change', (e) => {
        survival = e.target.value
    })
    //
    // const CreateDiv = document.querySelector('#Survival')
    // CreateDiv.addEventListener('change', (e) => {

// })
const ReproductionDiv = document.querySelector('#Reproduction')
ReproductionDiv.addEventListener('change', (e) => {
        reproduction = e.target.value
    })
    // const SpeedDiv = document.querySelector('#Reproduction')
    // SpeedDiv.addEventListener('change', (e) => {
    //     val2 = e.target.value
    // })
const val2 = document.querySelector('#color_picker')
val2.addEventListener('change', (e) => {
    boxColor = e.target.value

    console.log(boxColor)
})

const speedDiv = document.querySelector('#myRange')
speedDiv.addEventListener('change', (e) => {
    speed = e.target.value / 2
    var a = document.querySelector('#speedindex')
    a.innerHTML = speed
})