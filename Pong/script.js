/*
 * Pong Project.
 * Team size: 2-3
 * Difficulty: hard.
 *
 * Implement the pong game inside a drawing canvas.
 * IMPORTANT: the canvas's size is 500x500.
 */

// Startin speed and position for Pong.
var speedX = 5; var speedY = 0;
var x = 20; var y = 200; // Please do not modify x and y.

// Timer responsible for running animation.
var animiation_timer;

// X and Y position for the Left Rectangle.
var lrx = 0; // dont modify the x coordinate.
var lry = 235;
var old_lry = 235; // used to hide previous rectangle.

// X and Y position of the Right Rectangle.
var rrx = 500; // dont modify the x coordinate.
var rry = 235;
var old_rry = 235; // used to hide previous rectangle.

// Speed along which a rectangle moves.
var rectangle_speed = 20; // Fixed
// Height of the rectangle.
var rectangle_height = 60; // Fixed

// These will not allow more than one move per rectangle per step.
var left_ready = true;
var right_ready = true;

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
  //  "ArrowUp", "ArrowDown", "w", "s"
  // If it is, Update the rry/lry and old_rry/old_lry variables,
  // and Dont forget to set right_ready to false.

};

/*
 * Draw a given rectangle.
 */
function draw_rectangle(x, y) {
  // Get the canvas
  var canvas = document.getElementById("drawing_canvas");
  
  // Get the drawing object from the canvas. This is how to draw.
  var drawing = canvas.getContext("2d");
  
  // set line and color to black.
  drawing.beginPath();
  drawing.lineWidth = "3";
  drawing.strokeStyle = "#000000"; // Black
  drawing.fillStyle = "#000000"; // Black
    
  // Draw and fill a rectangle shape.
  drawing.fillRect(x, y, 10, rectangle_height);
  
  // finalize and apply the drawing
  drawing.stroke();
}

/*
 * Hide the given rectangle.
 */
function hide_rectangle(x, y) {
  // Get the canvas
  var canvas = document.getElementById("drawing_canvas");
  
  // Get the drawing object from the canvas. This is how to draw.
  var drawing = canvas.getContext("2d");
  
  // set line and color to white (to match the background).
  drawing.beginPath();
  drawing.lineWidth = "3";
  drawing.strokeStyle = "#FFFFFF"; // White
  drawing.fillStyle = "#FFFFFF";
    
  // Draw and fill a rectangle shape.
  drawing.fillRect(x, y, 10, rectangle_height);
  
  // finalize and apply the drawing
  drawing.stroke();
}

/*
 * Draw the pong.
 * The location of the pong is determined by variables x,y. 
 * They are global variables, not parameters.
 */
function draw_point() {
  // Get the canvas
    
  // Get the drawing object from the canvas. This is how to draw.
  
  // set line and color to be red.
    
  // Draw the point, a good way to make this visible is to use a small circle (use radius 2 or 1)
  // Look at canvas.arc or canvas.fillarc functions online.
  
  // Finalize and apply the drawing by calling the .stroke() function.
  
}

function hide_point() {
  // Same as draw_point, but set the color to be white (to match the background).
  
}

/*
 * The Most important function: update the speed based on current location.
 * You can access the current location using the x,y global variables.
 * Do not modify x, y directly. Instead, modify speedX, speedY.
 *
 * HINT: do not use strict equality (==) to check if the pong is at the edge,
 *       instead use a comparision of the following shape:
 *              Math.abs(y - 0) <= 5.
 *       the pong may not align perfectly with the border, it could be a few pixels away.
 *       However, the speed could be greater than those pixels, so the pong may cross over
 *       the edge in the next step if the speed was not modified.
 *       In the example code: Math.abs is the absolute value function. 
 */
function update_speed() {
  // Check If the pong is very close to the upper edge (y~=0) and
  // if speedY is moving in the upper edge direction (speedY < 0), then flip the direction of speedY.
  
  // Check If the pong is very close to the lower edge (y~=500) and
  // if speedY is moving in the lower edge direction, then flip the direction of speedY.
 
  // Check If the pong satisfies all these conditions:
  // 1. very close to the left edge (x ~= 10).
  // 2. speedX is moving towards the left edge.
  // 3. y is within range of the left rectangle (between lry and lry + rectangle_height).
  // If all of these conditions are satisfied compute the new speeds as follows:
  // 1. Compute the total speed squared: (speedX*speedX + speedY * speedY), we want to conserve this quantity.
  // 2. The new speed must be assigned to the x and y coordinates according to how far the pong is
  //    from the center of the rectange: if pong is close to the center (y ~= lry + rectangle_height/2)
  //    then most of the speed should be horizontal, otherwise it should be vertical.
  //    HINT: you could compute the difference between y and the center of the rectangle
  //          then use it as a ratio to split the speed between x and y.
  // 3. It could be useful it have a maximum value that the speed cannot exceed in either directions.
  
  // Same as above but for the right edge and right rectangle.
}

/*
 * Update the position according to the speed. 
 */
function update_position() {
  x = x + speedX;
  y = y + speedY;
}

/*
 * Check if the game is over, i.e pong is outside the box.
 */
function check_game_over() {
  if(x > 510 || x < -8) {
    stop();
    alert("Game over");
  }
}

/*
 * One step of animation.
 */
function one_step() {
  // Hide the old rectangles.
  hide_rectangle(lrx, old_lry);
  hide_rectangle(rrx, old_rry);
  
  // Draw the new rectangles.
  draw_rectangle(lrx, lry);
  draw_rectangle(rrx, rry);
  
  // Hide old pong.
  hide_point();
  
  // Compute the new pong position.
  update_position();
  
  // Draw the new pong.
  draw_point();
  
  // Update the speed.
  update_speed();
  
  // Check if game is over.
  check_game_over();
  
  // Allow players to move their rectangles again.
  left_ready = true;
  right_ready = true;
}

/*
 * Start animation (and the game).
 */
function start() {
  // This will call the function step every 100 milliseconds.
  animiation_timer = window.setInterval(one_step, 30);
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
