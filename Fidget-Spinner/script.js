/*
 * Difficulty of project: easy.
 * Team size: 2.
 */
 
/*
 * This project involves making a figet spinner!
 *
 * Animating the figet spinner is easy, and the code is given to you.
 *
 * Your task is to decrease the speed gradually and set up the maximum speed
 * and duration of the animation, so that the spinner begins spinning fast,
 * slows down gradually (smoothly), and eventually stop.
 * Check out the video in the same folder for a demo.
 */
 
// Change the url of the image.
function changeURL() {
  // Prompt the user to enter a new url, then change the url of the image to it.
  // Hint: google how to change an image url from javascript.
}
 
// Startin angle is 0.
var angle = 0;

// Global variables that control the speed.
var MAX_SPEED = 5; // The maximum speed. 
var MAX_DURATION = 2000; // The maximum time for the spinner to spin.

var speed = 5; // current speed.
var duration = 0; // duration so far.

var interval = null; // used for animation.

// Use this function to slow the speed down. Currently it leaves the speed as is.
function recompute_speed() {
  // A good way to make the animation smooth is slow the speed down gradually.
  
  // since you have variables for both duration and MAX_DURATION, you can use
  // these variables to compute the percentage of the animation that is completed.
  // At the begining of the animation this percentage will be 0.
  // At the end the percentage will be 100.
  // You can use this percentage to decrease the annimation smoothly.
  // You can look online for other ideas as well.
  
}

// This function rotates the image once.
// Every time the function is called one frame from the animation is shown.
function rotate() {
  angle = angle + speed; // apply the speed.
  duration++; // increase the current duration.
  
  $('#fidget').css('transform','rotate(' + angle + 'deg)'); // rotate the image.
  
  recompute_speed(); // recompute speed.
  if(duration >= MAX_DURATION) stop(); // Stop when animation is complete.
}

// stops the animation.
function stop() { 
  clearInterval(interval);
}
 
// This function starts the annimation.
function start() {
  stop(); // Stop any previous annimation.
  duration = 0; // Set the duration and speed to their initial values.
  speed = MAX_SPEED;
  interval = setInterval(rotate, 3);
}

/*
 * This two functions are reseponsible for making the the spinner go faster
 * or slower depending on how fast the mouse was moved over it.
 */

// Called when the mouse first enters the image area.
function over() { 
  // You will need to mearsure the speed or time it took the mouse
  // to move over the image.
  //
  // A good start may be to record the time when the mouse went over
  // the image first (in other words, inside this function). Then, record
  // the time when the mouse went out of the image (in the out function).
  // Then, you can take the difference between the two times, to see how
  // fast the mouse moved over the image.
  //
  // IMPORTANT: Note that these times must be global variables in order for code in the
  // other functions to see them.
  //
  
}

// Called when the mouse exists the image area.
function out() {
  // Figure out the distance or speed of the mouse.
  
  // Modify MAX_SPEED and MAX_DURATION according to mouse speed.
  // The rest will be handled by the other functions.
  // Both MAX_SPEED and MAX_DURATION must become bigger as the mouse speed becomes faster.
  
  // Start the animation
  start();
}

//http://www.asseenontvandbeyond.com/assets/images/fidget-spinner-green.png
