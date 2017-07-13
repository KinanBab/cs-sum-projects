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
// In other words, stores a boolean 2D array that indicates if a cell is empty or has an obstacle.

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
  
  // 2. Assign true to the 2D array at the row and column indices.
  // This says that the cell is initally empty (no obstacle).
  
  // 3. Assign an id to every cell so that you can access it later.
  // a good id may be something like this:
  //        cell_i_j
  // where i is the index of the row, and j is the index of the column.
  
  // 4. Set an onclick handler for every cell. The click handler must
  // change the background color of the cell between black and white.
  // It must also store whether the cell is empty or has an obstacle in the 2D array.
  // Hint: since you set dataset["row"] and dataset["col"] in step 1, you can
  // use `this.dataset["row"]` and `this.dataset["col"]` inside the onclick handler
  // to retrieve the row and column index of the cell being clicked.

}

/*
 * Solves the maze.
 */
function solve() {
  // Compute the row and column index for the starting cell (left top corner)
  // and ending cell (right bottom corner).
  var startR = 0; var startC = 0;
  var endR = maze.length-1; var endC = maze[endR].length-1;
  
  // Call solve_recursive and pass it the start, end, and empty visited array.
  var result = solve_recursive(startR, startC, endR, endC, []);
  
  // If solve_recursive found a path:
  //   loop over all the cells in the resulting path.
  //   make the background of every cell green.

  // If no path was found, alert "No solution" to the user.
}

/*
 * Solves the maze recursivly, i.e trys all unvisited neighbors,
 * and attempts to solve each of them recursivly.
 * A good way to represent the result is to use an object.
 * { "found" : <boolean>, "path": [ [row_index1, col_index1], [row_index2, col_index2], ... ] }
 * For example:
 * { "found" : true, "path": [ [0,0], [0,1]  ] } means that a path was found consisting of two cells: (0,0) and (0,1).
 */
function solve_recursive(startR, startC, endR, endC, visited) {
  // Base case: check if the starting cell is equal to the ending cell.
  if(startR == endR && startC == endC) {
    //return that a path was found and that the path consists of [startR, startC].
  }

  // Add the current cell to the visited.
  visited.push(startR + "_" + startC);
  
  // The directions along which we can make the next step.
  var directions = [ [-1, 0], [1, 0], [0, -1], [0, 1] ];
  
  // Loop over the possible directions and do the following:
  // 1. compute the new cell by adding the direction offeset to startR and startC.
  // 2. If cell is out of range (the indices are too big or too small) continue to the next direction.
  // 3. If cell is already visited continue to the next direction (hint: look up indexOf function).
  // 4. If cell has an obstacle continue to the next cell (hint: use the 2D array).
  // 5. Create a copy of the visited array: you can do this using ` var copy = visited.slice(); `
  // 6. Call the solve_recursive function and give it the new cell, the old end, and the new copy of visited.
  // 7. If solve_recursive found a path, add the start cell [startR, startC] to it, and return that as a result.
  
  
  // After the loop is done, if the function did not return a result yet, it means
  // it did not find an answer. return { "found": false }.

}





