/*
 * Spaceship.
 * Team size: 3-4
 * Difficulty: medium/hard.
 *
 * You control a spaceship, you can move it around with the arrow keys.
 * You will have incoming projectiles, you must avoid them, or your ship will be destroyed.
 * IMPORTANT: the canvas's size is 500x500.
 */


// Timer responsible for running animation [DO NOT CHANGE THIS].
var animiation_timer;

// Location of ship: starts at the center-bottom of the canvas
var shipX = 250;
var shipY = 480;

// Speed of the ship: this is fixed, unless you want to make the ship faster or slower later in the game
var shipSpeed = 7;

// The projectiles: each element inside this array will be one projectile.
// a projectile has these properties:
// x: the x coordinate,              y: the y coordinate
// oldX: previous timestep X coord., oldY: previous time step Y coordinate
// speedX: speed along x axis,       speedY: speed along y axis
// accX: accelaration along x,       accY: accelaration along y
// time: the time elapsed since this projectile was created.
var projectiles = [];

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
  // Make the ship move in the required direction by changing the x or y coordinates
  //  use variables: shipX, shipY and shipSpeed

};

/*
 * Draw the ship and projectiles at a time
 */
function draw() {
  // Get the canvas in which to draw
  var canvas = document.getElementById("drawing_canvas");
  
  // Get the drawing object from the canvas. This is how to draw.
  var drawing = canvas.getContext("2d");
  
  // set drawing style
  drawing.beginPath();
  drawing.lineWidth = 10; // make the line as thick as the 2*radius to have the circle by completely filled
  drawing.strokeStyle = "#FF0000"; // fill color is red
  
  // draw the ship as a red circle
  // using drawing.fillArc creates a circle filled with the specified color (in this case red)
  // here I am using fillArc with the ship coordinates, with radius 5
  // and a start angle of 0, and end angle of 2 PI.
  drawing.arc(shipX, shipY, 5, 0, 2 * Math.PI);

  // finalize drawing the ship by calling drawing.stroke()
  drawing.stroke();

  // set drawing style for projectiles.
  drawing.lineWidth = 4;
  drawing.strokeStyle = "#000000"; // fill color is red

  // Loop over every projectile.
  for(var i = 0; i < projectiles.length; i=i+1) {
    var projectile = projectiles[i];
	
	  // start drawing this projectile
	  drawing.beginPath();
	  
    // Draw the current projectile: can be drawn as a circle with some small radius
	  
	  // finalize the projectile
	  drawing.stroke();
  } 
}

/*
 * Reset the entire canvas by drawing an white-filled rectangle as big as the canvas
 */
function hide() {
  // Get the canvas
  
  // Get the drawing object from the canvas. This is how to draw.

  
  // set drawing style: SET COLOR TO WHITE
  
  // look at canvas.fillRect function!
  
  // Finalize and apply the drawing by calling the .stroke() function.

}

/*
 * Generate a random projectile every know and then
 */
function generate_random_projectile() {
  // Determine if we must generate a projectile now: i.e. not too many projectiles exist, maybe some randomness.
  // Use Math.random() to get a random number between 0 and 1 (1 is excluded).

	  // if it is time to generate a projectile, create a new one
	  // it is an object with properties: x, y, speedX, speedY, accX, accY, and time = 0.
	  // return this projectile object.

  // if it is not the time do not do anything.
}

/*
 * Move the projectile p
 * return false if p should be removed (i.e. out of bounds)
 * return true if it should be kept to the next step.
 */
function move_projectile(p) {
  // the old cooredinates are saved
  p.oldX = p.x;
  p.oldY = p.y;
  
  // Change the coordinates according to speed
  
  // Change speed according to accelaration
  
  // any other changes to the projectile you want should go here

  // check if the projectile becomes outside of bounds and return false if it is
  
  // return true to keep the projectile    
  return true;
}

/*
 * Check if game is over: check if the ship was hit by a projectile.
 */
function checkGameOver() {
  // Loop over every projectile
  // for every projectile p calculate two things:
  //   1. the shortest distance between the line defined by (p.oldX, p.oldY), (p.x, p.y) and the center of the ship.
  //   2. the projection of the center of the ship onto the line defined by (p.oldX, p.oldY), (p.x, p.y)
  //   If the distance is smaller than the radius of the ship, and the intersection is between (p.oldX, p.oldY), (p.x, p.y)
  //     then the projectile hit the ship, and it is game over! otherwise, the game still goes on.
  //     Call stop() to stop the game
  // CHECK: http://paulbourke.net/geometry/pointlineplane/ for info on how to compute distances between lines and points.

}

/*
 * One step of animation.
 */
function one_step() {
  checkGameOver();
  
  // generate new projectile
  var np = generate_random_projectile();
  if(np != null) projectiles.push(np);
  
  // move each projectile
  var new_projectiles = [];
  for(var i = 0; i < projectiles.length; i=i+1) {
	  var p = projectiles[i];
	  if(move_projectile(p)) {
	    new_projectiles.push(p);
	  }
  }
  projectiles = new_projectiles;

  hide();
  draw();
}

/*
 * Start animation (and the game).
 */
function start() {
  // This will call the function step every 100 milliseconds.
  animiation_timer = window.setInterval(one_step, 50);
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
