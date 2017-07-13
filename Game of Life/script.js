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
  // you need to initialize the 2D array contents to an empty array for 
  // every row at the start of the first loop.
  
  // For every cell do the following:
  // 1. put the row and column index of the cell
  // inside the `dataset["row"]` and `dataset["col"]` attributes of the td.
  
  // 2. Assign false to the 2D array at the row and column indices.
  // This says that the cell is initally dead.
  
  // 3. Assign an id to every cell so that you can access it later.
  // a good id may be something like this:
  //        cell_i_j
  // where i is the index of the row, and j is the index of the column.
  
  // 4. Set an onclick handler for every cell. The click handler must
  // change the background color of the cell between black and white (alive and dead).
  // It must also store whether the cell is alive or dead in the 2D array.
  // Hint: since you set dataset["row"] and dataset["col"] in step 1, you can
  // use `this.dataset["row"]` and `this.dataset["col"]` inside the onclick handler
  // to retrieve the row and column index of the cell being clicked.
  
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
  
  
  // This will call the function step every x amount of milliseconds.
  step_timer = window.setInterval(step, x);
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
