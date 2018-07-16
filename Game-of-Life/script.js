/*
 * Difficulty of project: medium.
 * Team size: 3-4.
 * Check this link to see the rules of the game: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life !
 */

// It is usefull to keep a 2D array, that stores the state of the board.
// In other words, stores a boolean 2D array that indicates if a cell is dead or alive.
var board = [];
for(var row = 0; row < 15; row = row + 1) {
  board[row] = [];
  for(var col = 0; col < 15; col = col + 1) {
    board[row][col] = "dead";
  }
}

// Called when a cell is clicked
// row: the row number of the cell that was clicked
// col: the col number of the cell that was clicked
function clickHandler(row, col) {
  // get cell element from HTML
  var current_cell = document.getElementById("cell_"+row+"_"+col); // this refers to the cell being clicked.
  
  // Flip cell from being dead to alive.
  // Remember to change the cell's background, as well as save its state in the board 2D array
  
}

// Indicates whether the game is running or paused.
var step_timer = null;

/*
 * Perform one step.
 */
function step() {
  // Create an empty 2D array (board) of the same size (a draft/copy of the board).
  var new_board = [];
  var num_of_rows = board.length;
  var num_of_cols = board[0].length;

  // Loop over every cell in the old board.
    
      // Get the current cell (td/html element).
      //  count how many of the cell's neighbors are alive
      //  You have to loop over all the neighbors to do this.
      //  be careful not to go out of bounds!
      
      //  if too many or too few neighbors are alive, make the cell dead in the new board.
      //  dont forget to change the cells in the html to be dead or alive as well as in the new board 2D array.
      
      // if cell is dead and just the right number of neighbors are alive, make the cell alive.
      
      // otherwise keep the cell as it was before.

  // Replace the old board with the new board.
  board = new_board;
}

/*
 * Continously perform steps (play the game)!
 */
function play() {
  var x = 1000; // x = 1000 milliseconds = 1 second

  document.getElementById("pause").disabled = false;
  document.getElementById("play").disabled = true;

  // Get the value of speed element and use it as the interval x.
  x = parseInt(document.getElementById("speed").value);
  
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
  
  document.getElementById("play").disabled = false;

}

/*
 * Clear (and pause) the board from all live cells.
 */
function clearBoard() {
  pause();

  // Loop over the board and make every dead, also make every cell in the html dead as well.

}
