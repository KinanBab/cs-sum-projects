/*
 * Difficulty of project: medium.
 * Team size: 2-3.
 */

$( document ).ready(
  function() {
    initialize();
  }
);

// It is usefull to keep a 2D array, that stores the state of the board.
// In other words, stores a boolean 2D array that indicates if a cell is dead or alive.

/*
 * Setup click handlers for *every* cell in the table.
 */
function initialize() {
  // loop over all cells
  // in other words, loop over every row in the table (<tr>)
  // and inside that loop, loop again over every cell in that row (<td>).
  // set on click handler for every cell. The click handler must
  // flip the class attribute of that cell between dead and alive.
  // It must also store whether the cell is dead or alive in the 2D array.
  // Also, remember to put in the row and column index of the cell
  // inside the "dataset" attribute of the td.
  
  // Also assign an id to every cell so that you can access it later. 
  // a good id may be something like this:
  //        cell_i_j
  // where i is the index of the row, and j is the index of the column.
  
}

// Indicates whether the game is running or paused.
var step_timer = null;

/*
 * Perform one step.
 */
function step() {
  // Create an empty 2D array (board) of the same size.
  
  // Loop over every cell in the old board:
  //  count how many of the cells neighbors are alive.
  //  if too many or too few neighbors are alive, make the cell dead.
  //  otherwise make cell alive.
  
  // Loop over every cell in the new board:
  //  change every cell in the html to be dead or alive depending on the new board.
  
  // Replace the old board 2D array with the new board array.
}

/*
 * Continously perform steps (play the game)!
 */
function play() {
  var x = 1000; // x = 1000 milliseconds = 1 second
  
  // Get the value of speed element and use it as the interval x.
  
  
  step_timer = window.setInterval(step, x); // This will call the function step every x amount of milliseconds.
}

/*
 * Pause the game (if running).
 */
function pause() {
  if(step_timer != null) {
    clearInterval(step_timer);
    step_timer = null;
  }
}

/*
 * Clear (and pause) the board from all live cells.
 */
function clear() {
  pause();
  
  // Loop over the board and make every dead, also make every cell in the html dead as well.
}
