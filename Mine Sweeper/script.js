/*
 * Difficulty of project: hard.
 * Team size: 2-3.
 */
 
/*
 * Mine sweeper.
 * The game is about looking for mines on a board of cells. 
 * Every time you click on a cell, the cell opens up, and you see what is inside it.
 * A cell may have:
 *  1- A mine: if you open a cell with a mine you loose the game.
 *  2- A number: counts the number of neighbor mines.
 *  3- Nothing: an empty cell does not have a mine or neighbor mines.
 *              when you click on an empty cell, all adjecent cells without mines are also revealed.
 * Try the game out: http://minesweeperonline.com/#
 */

$( document ).ready(
  function() {
    initialize();
  }
);

// It is usefull to keep a 2D array, that stores the state of the board.
// In other words, stores a 2D array of numbers.
// You can use -1 to represent having a mine, 0 for empty cell,
// and the other numbers for the amount of neighbor mines.


/*
 * Setup click handlers for *every* cell in the table.
 */
function initialize() {
  // loop over all cells
  // in other words, loop over every row in the table (<tr>)
  // and inside that loop, loop again over every cell in that row (<td>).
  // set on click handler for every cell. use the function "cell_click" below as click handler.
  // Remember to put the row and column index in the "dataset" attribute of the td.
  
  // Also assign an id to every cell so that you can access it later. 
  // a good id may be something like this:
  //        cell_i_j
  // where i is the index of the row, and j is the index of the column.
  
}

/*
 * Generate the mines on the board/grid.
 */
function generate() {
  // Get the number of mines from the html.
  
  // Loop over the number of mines (repeat for the number of mines):
  //  1. Pick a random cell and check that it has no mine.
  //  2. if the cell has no mine put a mine in it and increment the counter.
  //     Also, increment the value of every neighbor of that cell that has no mine.
  //  3. if the cell has a mine already, repeat without incrementing the counter.
  // When you put a mine in the cell, that means you have to modify the value of 
  // the cell in the global 2D array.
  //
  // In order pick a random number Use: Math.random  (it returns a random number between 0 and 0.999999999).
  // Hint: Look at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  //       In particular the section on "Getting a random integer between two values"
  
}

// It is usefull to keep a global variable here that tracks whether the 
// mark mine button is used. This variable will be used in mark_mine and cell_click.

/*
 * Called when the user click on the mark cell button.
 */
function mark_mine() {
  // This means that the next click should mark cell as a mine and not open it.
  // You must set the global variable that marks this to true.
  
}

/*
 * Called when a cell is clicked.
 * Remember you can access the cell using this.
 */
function cell_click() {
  // Get the cell td element from the html, remember that you assigned every cell an id
  // inside the intialize function.

  // Check whether this click happened after mark_mine (check global variable).
  
  // If it happened after mark mine, change the content of td to "!" and return.
  
  // If it did not happen after mark mine, then change the content of the td
  // to either "x" if the cell has a mine, * if it is empty, or the number of neighbor 
  // mines otherwise (the number in the array).
  // You can check if the cell has a mine, is empty, or know the number of neighbor mines
  // using the global 2D array.
  
  // If the cell had a mine, alert to the use "game over".
  
  // If the cell is empty, open every cell that is adjecent that has no mine.
  // You can do that by looping over every adjecent cell (try all combinations of increasing 
  // and decreasing i and j by 1), checking that the cell has no mine, opening it, and then recursivley
  // doing the same for that cell if it is empty.
  
}




