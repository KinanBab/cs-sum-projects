/*
 * DIFFICULTY: hard
 * TEAM SIZE: 3-4
 */
var board = [
  ["", "d", "", "d", "", "d", "", "d", ""],
  ["d", "", "d", "", "d", "", "d", "", "d"],
  ["", "d", "", "d", "", "d", "", "d", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["l", "", "l", "", "l", "", "l", ""],
  ["", "l", "", "l", "", "l", "", "l"],
  ["l", "", "l", "", "l", "", "l", ""]
];

// Store position of last click, to know which position to move to.
var lastClickRow = -1;
var lastClickCol = -1;

// Store which player is to play next (either light or dark)
var turn = "l";

// This function will be executed when a cell is clicked.
// row: the row number of the clicked cell (0 to 7)
// col: the column number of the clicked cell (0 to 7)
function clicked(row, col) {
  // Check if this is the first click to determine which piece to move
 
    // Make sure the click selected a piece of the same color as the current player
  
  // If it is not first click
  
    // check to see if the move from (lastClickRow, lastClickCol) to (row, col) is allowed

    // if the move is allowed with type regular, make sure that the player cannot eat
    // before allowing the move
    
      // move allowed, apply move by changing the board
      

      // Check for promotion
      

      // Switch Turn

    // otherwise, the move could be a jump
    
      // apply move by changing board

      // Check for promotion

      // Eat/remove the piece in the middle of the jump

      // If the same piece that moved can still eat more pieces, do not switch turn
      
      // Otherwise switch the turn

    // Otherwise the move is not legal, reset the move to allow the user to choose some other move
    // i.e. reset lastClickRow and lastClickCol

  // Draw the new board
  draw();
  // Check for game over
  game_over();
}

function legal_move(oldRow, oldCol, row, col) {
  // out of bounds
  if (row < 0 || row > 7 || col < 0 || col > 7) return "bad move";

  // First make sure that the move is to an empty spot


  // Case 1: light move with regular checker
  if (turn == "l") {
    // regular piece can only move forward
    if (board[oldRow][oldCol] == "l" && row >= oldRow) return "bad move";
    // all moves must be diagonal moves
    if (Math.abs(row - oldRow) != Math.abs(col - oldCol)) return "bad move";

    if (Math.abs(col - oldCol) == 1) { // regular move with no jump
      return "regular";
    } else if (Math.abs(col - oldCol) == 2) { // regular move with a jump/eat
      if (board[(oldRow + row) / 2][(oldCol + col) / 2] == "d" || board[(oldRow + row) / 2][(oldCol + col) / 2] == "kd") {
        return "jump";
      } else {
        return "bad move";
      }
    } else {
      return "bad move";
    }
  }

  // Case 2: dark move
  // do the same thing, but for the dark player

  // Otherwise, bad move.
  return "bad move";
}

// Check if any piece of the current player can eat
function can_eat() {
  // look for every piece beloning to this player
  for (var row = 0; row < 8; row = row + 1) {
    for (var col = 0; col < 8; col = col + 1) {
      if (board[row][col] == turn || board[row][col] == "k" + turn) {
        // Check if this piece can eat
        if (piece_can_eat(row, col)) return true;
      }
    }
  }
  return false;
}

// Check if the specific provided piece can eat
// row: row number of the piece (0 to 7)
// col: column number of the piece (0 to 7)
function piece_can_eat(row, col) {
  // This piece could possible eat by moving with any of these combinations
  // row+2, col+2 OR row+2,col-2 OR -2,+2 OR -2,-2
  // Check if either one of these possibilities is legal
  
  // if none succeed, then the piece cannot eat
  return false;
}

// Switch the turn
function switch_turn() {
  // reset last click move

  // change turn variable

}

// Draw board
function draw() {
  // go through every cell
  for (var row = 0; row < 8; row = row + 1) {
    for (var col = 0; col < 8; col = col + 1) {
      // get the cell corresponding to row and col
      var element = document.getElementById("cell_" + row + "_" + col);
      // check if the cell has a dark background
      if ((row + col) % 2 == 1) {
        element.className = "dark";

        // draw the content of the cell if it has any
        if (board[row][col] == "d") element.className = "dchecker";
        else if (board[row][col] == "kd") element.className = "kdchecker";
        else if (board[row][col] == "l") element.className = "lchecker";
        else if (board[row][col] == "kl") element.className = "klchecker";
      }
      // otherwise cell has light background
      else {
        element.className = "light";
      }
    }
  }

  // surround last clicked cell with a red box
  if (lastClickRow > -1) {
    var element = document.getElementById("cell_" + lastClickRow + "_" + lastClickCol);
    element.className = element.className + " selected";
  }
}

// Check if the game is over
function game_over() {
  // Check whether we found a light piece
  var foundLight = false;

  // Look for a light piece anywhere on the board
  for (var row = 0; row < 8; row = row + 1) {
    for (var col = 0; col < 8; col = col + 1) {
      // check if this cell contains a light piece
      if (board[row][col] == "l" || board[row][col] == "kl") {
        // we found a light piece
        foundLight = true;
      } else if (board[row][col] == "d" || board[row][col] == "kd") {
        foundDark = true;
      }
    }
  }

  // if we did not find any light piece, then the game is over.
  if (!foundLight) {
    alert("Dark wins!");
  }

  // Now, do the same thing but for the dark player
  
}
