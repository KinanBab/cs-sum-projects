/*
 * DIFFICULTY: hard
 * TEAM SIZE: 3-4
 */

// It is usefull to keep a 2D array, that stores the state of the board.
// In other words, stores a 2D array of numbers.
// You can use -1 to represent having a mine, 0 for empty cell,
// and the other numbers for the amount of neighbor mines.
var minefield = [ 
// This contains 15 arrays, because our grid contains 15 rows, every inner array is a row.
];

// start from -1 to 16 instead of 0 to 15 to make sure no visible cell has less neighbors than 8 (including hidden ones)
for (var j = -1; j < 16; j = j + 1) {
  minefield[j] = [];
  for (var k = -1; k < 16; k = k + 1) {
    minefield[j][k] = 0;
  }
}

// Counts how many mines are in the minefield
var mine_count = 0


// Helper, you can use this to get a random number between min inclusive and max exclusive
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/*
 * Generate the mines on the board/grid.
 */

function generate() {
  // Get the number of mines from the html.

  // choose a random cell and add a mine to it as many times as we have number of mines
	// use the helper function provided: getRandomNumber

	// If the random cell has a mine, try another random cell, do not increase the number of mines since no mine was actually placed.
    
	// If the random cell has no mine, Put a mine in it!
   

  // The neighbors of the random cell must have their value increased by one (unless the neighbor is a mine).
	// make sure neighbors are not out of bounds
	// if neighbor is a mine, do not do anything 
	// if it is not a mine, increase value by 1
}

// It is usefull to keep a global variable here that tracks whether the
// mark mine button is used. This variable will be used in mark_mine and cell_click.("")
var tracker = false;

/*
 * Called when the user click on the mark cell button.
 */
function mark_mine() {
  // This means that the next click should mark cell as a mine and not open it.
  // You must set the global variable that marks this to true.

}

/*
 * Called when a cell is clicked.
 * row: the index of the row of the clicked cell (from 0 to 14)
 * col: the index of the column of the clicked cell (from 0 to 14)
 */
function clicked(row, col) {
  // e is the html cell element that was clicked!!
  // to change the visible contents of the cell, use:
  // e.innerHTML = "new content";
  var e = document.getElementById("cell_" + row + "_" + col);

  // tracker is false: this click is to open the cell
	  // show the value in the cell
	
	  // change what the cell looks like using className
	
	  // mark that the cell was clicked: use e.dataset.ANY_NAME_YOU_LIKE = VALUE_YOU_LIKE
	  // to attach the value of your choice to this cell

	  // check if the cell was a mine, if so alert game over.

	  // Check if the cell has a 0, in which case open all its neighbors
    // loop over every neighbor
    // make sure neighbor is in bounds
    // get the neighbor cell
    // if the nieghbor was not clicked/opened before, open it by calling clicked!
  
  // tracker is true, this click is to mark the cell as a mine
	  // put an X in the cell and reset tracker

	  // change what the cell looks like
      
    // if it was a mine, the number of mines must decrease, since this mine is now discovered
      
    // Check if game is over by checking the number of mines
 
}

