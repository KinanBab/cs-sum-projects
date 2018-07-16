/*
 * Snake Project.
 * Team size: 3-4
 * Difficulty: medium/hard.
 *
 * Implement the snake game inside a drawing canvas.
 * IMPORTANT: the canvas's size is 500x500.
 */


// Timer responsible for running animation [DO NOT CHANGE THIS].
var animiation_timer;

// x and y speed of snake
var speedX = 10;
var speedY = 0;

// The snake: from head to tail as an array
var snake = [ {"x": 250, "y": 250} ];

// Old pieces of the snake that should be removed to give the ILLUSION of movement.
var oldSnake = [];

// Max allowed length for the snake, after the snake eats food, this must be increased
var snakeLength = 5;

// location of food
var foodX;
var foodY;
randomFoodLocation();

/*
 * This functions will be executed whenever a key is pressed.
 */
document.onkeypress = function(e) {
  if(e == null) {
    return;
  }
  
  // This gives the keyboard key that was pressed as a string.
  var key = e.key;
  
  // Check if key is one of these 4 possibilites:
  //  "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"
  // If it is one of these choices, make the snake move in that direction
  // Pay attention, if the snake is moving in one direction it cannot
  //   suddnly change to the opposite direction. If the snake is going 
  //   down, it cant go up directly, it must go left or right first.

};

/*
 * Draw the snake one piece at a time
 */
function draw() {
  // Get the canvas in which to draw
  var canvas = document.getElementById("drawing_canvas");
  
  // Get the drawing object from the canvas. This is how to draw.
  var drawing = canvas.getContext("2d");
  
  // set drawing style
  drawing.beginPath();
  drawing.lineWidth = "3";
  drawing.fillStyle = "#000000"; // fill color is black

  // Get all pieces of snake
  for(var i = 0; i < snake.length; i=i+1) {
    // current piece
    var snakePiece = snake[i];
    // Draw the piece, a good way to make this visible 
    // is to use a small rectangle instead of a single point
    // here I am using a filled rectangle of width 10 and length 10.
    drawing.fillRect(snakePiece.x, snakePiece.y, 10, 10);
  }
  
  // Finalize and apply the drawing by calling the .stroke() function.
  drawing.stroke();
}

/*
 * Same as draw, but instead of drawing the snake, we "hide" the tail
 * by coloring it white to give the illusion of animation.
 */
function hide() {
  // Get the canvas
  
  // Get the drawing object from the canvas. This is how to draw.
  
  // set drawing style: SET COLOR TO WHITE

  // Get all pieces of ** oldSnake **: the pieces of the tail that need to be hidden.

    // Hide the piece.
  
  // Finalize and apply the drawing by calling the .stroke() function.

}

function drawFood() {
  // Get the canvas

  
  // Get the drawing object from the canvas. This is how to draw.

  
   // set line and color to be red.

  // Draw the piece of food using fillRect
  
  // Finalize and apply the drawing by calling the .stroke() function.
  
}

/*
 * Update the snake to make it move
 * Move the head according to the speedX/speedY variables
 * Trim out the tail of the snake
 */
function updateSnake() {
  var head = snake[0];
  
  // Update head according to the speed
  
  // If head goes out of bounds, it appears on the other side of the canvas
  
  // Add head to the begining of the snake array: google the ** unshift ** function inside array!!

  // Save the tail of the snake to hide: look at the ** slice ** function inside the array
  // put this tail in the oldSnake variable

  // Trim the snake

}

/*
 * Check if the head of the snake is in the same location as the food
 * If so, increase the size of the snake, and generate a new piece of food
 */
function checkFood() {
  var head = snake[0];

}

/*
 * Check if the snake's head is hitting back its body, in which case say game over.
 */
function checkGameOver() {
  var head = snake[0];
  
  // Compare the head against every other piece of the body
  // if the game is over, call stop() to stop it.
}

/*
 * One step of animation.
 */
function one_step() {
  checkFood();
  checkGameOver();

  updateSnake();

  drawFood();
  
  hide();
  draw();
}

// Generate a random food location
function randomFoodLocation() {
  foodX = Math.random() * 500/10;
  foodY = Math.random() * 500/10;
  
  foodX = Math.floor(foodX) * 10;
  foodY = Math.floor(foodY) * 10;
}

/*
 * Start animation (and the game).
 */
function start() {
  // This will call the function step every 100 milliseconds.
  animiation_timer = window.setInterval(one_step, 100);
}

/*
 * Stop the animation.
 */
function stop() {
  if(animiation_timer != null) {
    clearInterval(animiation_timer);
    animiation_timer = null;
  }
}
