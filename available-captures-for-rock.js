// 999. Available Captures for Rook

// On an 8 x 8 chessboard, there is exactly one white rook 'R' and some number of white bishops 'B', black pawns 'p', and empty squares '.'.

// When the rook moves, it chooses one of four cardinal directions (north, east, south, or west), then moves in that direction until it chooses to stop, reaches the edge of the board, captures a black pawn, or is blocked by a white bishop. A rook is considered attacking a pawn if the rook can capture the pawn on the rook's turn. The number of available captures for the white rook is the number of pawns that the rook is attacking.

// Return the number of available captures for the white rook.



// Example 1:


// Input: board = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
// Output: 3
// Explanation: In this example, the rook is attacking all the pawns.
// Example 2:


// Input: board = [[".",".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
// Output: 0
// Explanation: The bishops are blocking the rook from attacking any of the pawns.
// Example 3:


// Input: board = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]
// Output: 3
// Explanation: The rook is attacking the pawns at positions b5, d6, and f5.


// Constraints:

// board.length == 8
// board[i].length == 8
// board[i][j] is either 'R', '.', 'B', or 'p'
// There is exactly one cell with board[i][j] == 'R'

var numRookCaptures = function(board) {
  let rows = board.length;
  let columns = board[0].length;

  let rookCoord;

  for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
          if (board[r][c] === 'R') rookCoord = {
              row: r,
              column: c,
          };
      }
  }

  let captures = 0;
  let upV = 1;
  let downV = 1;
  let leftH = 1;
  let rightH = 1;
//     vertical up
  while (rookCoord.row - upV >= 0) {
      if (board[rookCoord.row - upV][rookCoord.column] === 'p') {
          captures++;
          break;
      }
      if (board[rookCoord.row - upV][rookCoord.column] === 'B') break;
      upV++;
  }

//     vertical down
  while (rookCoord.row + downV <= 7) {
      if (board[rookCoord.row + downV][rookCoord.column] === 'p') {
          captures++;
          break;
      }
      if (board[rookCoord.row + downV][rookCoord.column] === 'B') break;
      downV++;
  }

//     horizontal right
  while (rookCoord.column + rightH <= 7) {
      if (board[rookCoord.row][rookCoord.column + rightH] === 'p') {
          captures++;
          break;
      }
      if (board[rookCoord.row][rookCoord.column + rightH] === 'B') break;
      rightH++;
  }

//     horizontal left
  while (rookCoord.column - leftH >= 0) {
      if (board[rookCoord.row][rookCoord.column - leftH] === 'p') {
          captures++;
          break;
      }
      if (board[rookCoord.row][rookCoord.column - leftH] === 'B') break;
      leftH++;
  }

  return captures;
};
