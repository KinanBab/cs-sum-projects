/*
 * Difficulty of project: medium.
 * Team size: 3-4.
 */

// It is usefull to keep a 2D array, that stores the state of the board.
// In other words, a 2D array that indicates if the cell has an X or O or is empty.
var board = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"]
];

// Also, This is a (global) variable here that keeps track of the turn.
var turn = "X";

/*
 * Called when a cell is clicked.
 * row: the index of the row of the clicked cell (from 0 to 14)
 * col: the index of the column of the clicked cell (from 0 to 14)
 */
function clicked(row, col) {
  // e is the html cell element that was clicked!!
  var e = document.getElementById("cell_" + row + "_" + col);
  
  // to change the visible contents of the cell, use:
  // e.innerHTML = "new content";
 
  // Dont allow cheaters to modify a cell that was already taken!
  // Check if the cell has an X or O in it (use the variable board!)

  // Place X or O (depending on the turn) inside the cell, and 
  // store the value of the cell in the corresponding location
  // in the board 2D array.

  // flip the turn between X and O.

  // Check if the game is over (call the game_over function below).

  // AI player goes here (optional)
}

/*
 * Determines if the passed board is in game-over state.
 * In other words, determines if the board has 3 consequtive Xs or Os.
 * The function should return one of the following values:
 * 1. "X" if player "X" won.
 * 2. "O" if player "O" won.
 * 3. "-" if the game is tied (all cells were used).
 * 4. "+" if the game is on going.
 */
function game_over() {
  // you must try all 8 possibilities to determine if the game is won by someone:
  //  3 rows, 3 columns, and 2 diagonals!
  // Also, if all cells are occupied, and no one won, then it is a tie!
  
  // if no one won, and it is not a tie, then it is on going.
  return "+";
}


// OPTIONAL PART FOR AI

/*
 * Determines which cells a player can place an X or O in it.
 * In other words, which cells are empty.
 */
function available_moves(board) {
  // Declare variable result as an empty array.
  var result = [];

  // Loop over all the cells of the 2D array.
  // In other words, loop over every row, and inside
  // that loop, loop over every column (cell), use the 2D array
  // to check if a cell is empty, and add its location to the result array.
  for (var i = 0; i < 3; i = i + 1) {
    for (var j = 0; j < 3; j = j + 1) {
      if (board[i][j] != "X" && board[i][j] != "O") {
        result.push([i, j]);
      }
    }
  }

  return result;
}

/*
 * I give you this function as a helper.
 * use it inside the player_max and player_min to make a copy 
 * of the board.
 */
function copy_2D_array(array) {
  var copy = [];
  for (var i = 0; i < array.length; i = i + 1) {
    copy[i] = [];
    for (var j = 0; j < array[i].length; j = j + 1) {
      copy[i][j] = array[i][j];
    }
  }

  return copy;
}

/*
 * Applies a given move to the given board.
 * Puts the player's symbol at the given cell in the board.
 */
function apply_move(current_board, row, col, player) {
  var new_board = copy_2D_array(current_board);
  new_board[row][col] = player;
  return new_board
}

/*
 * The max player (the AI player) function.
 * Takes as parameters the board and the current player (X or O), and the other player (X or O). 
 * Look at the course packet (page 14)!
 */
function player_max(current_board, player, other_player) {
  // Check if the game is over using the "game_over" function above.
  // If the current player wins, returns a high score (say 1000).
  // If the current player loses (other player wins), returns a low score (say -1000).
  // If it is a tie return a neutral score (say 0).
  // If the game is on going continue to the remaining part of the function.

  // Get all available moves.

  // Loop over available moves to find the move with maximum score.
  // 1. For every move, copy the board and apply the move to the copied board.
  //    This is because the code here uses the board as a draft. It tried all
  //    possible moves before picking the one it likes best. If we dont copy
  //    the board before modifying it, then we effectively commit to the move (choose it)
  //    before trying the other moves.
  // 2. After applying the move, call player_min with the new copied board and new player. 
  //    use the returned score and move to find the maximum.

  // Return the maximum score and its corresponding move.

}

/*
 * The min player (this is what the AI will use to simulate the human player)
 * Takes as parameters the board and the current player (X or O). 
 */
function player_min(current_board, player, other_player) {
  // similar to player max, but for the other player

}


/* 
 * This is the function that starts the game.
 * This is already implemented for you
 */
function play() {
  var player2Start = document.getElementById("start").value;
  if (player2Start == "computer") {
    var player = turn;
    var other_player = (player == "X" ? "O" : "X"); // Flip the player.

    // Call the player_max function with the appropriate paramters and
    // store the returned move.
    // This may need modifications.
    var move = player_max(board, player, other_player).move;

    // Apply the move to the board, supposedly the move is an array with
    // two elements: the row and the column index.
    // This may need modifications.
    board[move[0]][move[1]] = turn;
    document.getElementById("cell_" + move[0] + "_" + move[1]).innerHTML = turn;

    // Flip turns.
    turn = other_player;
  }
}

