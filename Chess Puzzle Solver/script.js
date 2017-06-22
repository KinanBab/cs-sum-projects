/*
 * Difficulty of project: hard.
 * Team size: 3-4.
 */

$( document ).ready(
  function() {
    initialize();
  }
);

// You will need some variable to remember the last piece
// that was clicked on.

// It is usefull to keep a 2D array, that stores the state of the board.
// In other words, stores what piece is in every cell. This way
// you will not have to loop through the html elements everytime.


/*
 * Setup click handlers for *every* cell in the table.
 */
function initialize() {
  // loop over all pieces images (all images inside pieces div)
  // and set on click handler for every image. The click
  // handler should update the global variable that stores the last piece clicked.

  // loop over all cells
  // in other words, loop over every row in the table (<tr>)
  // and inside that loop, loop again over every cell in that row (<td>).
  // set on click handler for every cell.  The click handler
  // should insert the last clicked piece in the cell and modify 
  // the 2D array.
    
}

/*
 * Should return an array of all moves possible for the piece at i, j.
 */
function all_moves(board, i, j) {
  // Look at the piece at i, j. 
  // Depending on the type of piece, look for possible moves.
  // For example: if the piece is a rook, then you can move it
  // by changing i and keeping j fixed, or the other way around.
  // Keep in mind that other pieces may block your move.
  
  // hint to reduce code size: the moves of the queen is equivalent moves of both
  // bishop and rook.
}

/*
 * Checks to see if there is a check on board.
 * Should return the color of the side that is performing the check (the attacking side).
 */
function has_check(board) {
  // Loop over the entire board:
  //  Every time you find a piece, get all_moves of that piece,
  //  and check if one of those moves kills a king, in other words,
  //  check if the board has a king in the destination of the move.
}

/*
 * Perform the max part of the search algorithm.
 * board is the current state of the board.
 * color indicates the color of the player currently making a move.
 */
function max(board, color) {
  // Check if there is a check.
  // If it is your turn and you are performing a check, then you win.
  
  // Loop over every cell in the board:
  //  If a cell has a piece of matching color, call all_moves on that cell.
  //  Loop over every returned move from all_moves:
  //    Apply the move.
  //    Call min on that move.
  //    Pick the best (max) move, and combine it with the corresponding moves from min.
  //    Return score and move (in some object).
}

/*
 * Perform the min part of the search algorithm.
 * board is the current state of the board.
 * color indicates the color of the player currently making a move.
 */
function min(color) {
  // Check if check mate, return corresponding score and an empty array of moves.
  // If it is your turn and you are performing a check, then you win.

  // Loop over every cell in the board:
  //  If a cell has a piece of matching color, call all_moves on that cell.
  //  Loop over every returned move from all_moves:
  //    Apply the move.
  //    Call max on that move.
  //    Pick the worst (min) move, and combine it with the corresponding moves from max.
  //    Return score and move (in some object).
}

/*
 * Start the search process to solve the puzzle
 */
function solve() {
  // Find a king of the color of the loosing side. 
  // If there is no such king alert an error and exit.
  
  // Begin the min-max search algorithm.
  // either call min or max depending on 
  // whether the looser or winner starts.
  
  // If min/max returned a solution alert to the user.
  // Get the array of moves from the solution
  // and print it to the screen in some format.
}

function print(moves) {
  // print the moves to the screen.
  
}





