/*
 * Difficulty of project: medium.
 * Team size: 3-4.
 */

// It is usefull to keep a 2D array, that stores the state of the board.
// In other words, stores a boolean 2D array that indicates if a cell is empty or has an obstacle.
var maze = [];
for(var row = 0; row < 15; row = row + 1) {
  maze[row] = [];
  for(var col = 0; col < 15; col = col + 1) {
    maze[row][col] = true;
  }
}

function clickHandler(row, col) {
  // get cell element from HTML
  var current_cell = document.getElementById("cell_"+row+"_"+col); // this refers to the cell being clicked.

  // Change background color of the cell

  // keep track in the maze 2D of whether this cell is a wall (false) or empty (true).

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
  if(result.found) {
    for(var i = 0; i < result.path.length; i=i+1) {
      var c = result.path[i];
      document.getElementById("cell_"+c[0]+"_"+c[1]).style.backgroundColor = "green";
    }
  }
  
  // If no path was found, alert "No solution" to the user.
  else {
    alert("No Solution");
  }
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
  
    //return that a path was found and that the path consists of [startR, startC].

  // Not Base Case anymore.
  // Add the current cell to the visited.
  
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
  return { "found": false };
}





