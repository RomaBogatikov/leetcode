// 1582. Special Positions in a Binary Matrix

// Given a rows x cols matrix mat, where mat[i][j] is either 0 or 1, return the number of special positions in mat.

// A position (i,j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).



// Example 1:

// Input: mat = [[1,0,0],
//               [0,0,1],
//               [1,0,0]]
// Output: 1
// Explanation: (1,2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are 0.
// Example 2:

// Input: mat = [[1,0,0],
//               [0,1,0],
//               [0,0,1]]
// Output: 3
// Explanation: (0,0), (1,1) and (2,2) are special positions.
// Example 3:

// Input: mat = [[0,0,0,1],
//               [1,0,0,0],
//               [0,1,1,0],
//               [0,0,0,0]]
// Output: 2
// Example 4:

// Input: mat = [[0,0,0,0,0],
//               [1,0,0,0,0],
//               [0,1,0,0,0],
//               [0,0,1,0,0],
//               [0,0,0,1,1]]
// Output: 3


// Constraints:

// rows == mat.length
// cols == mat[i].length
// 1 <= rows, cols <= 100
// mat[i][j] is 0 or 1.

var numSpecial = function(mat) {
  const areZeroes = (row, col) => {
      let flag = true;
      for (let i = 0; i < mat[0].length; i++) {
          if (i !== col && mat[row][i] !== 0) flag = false;
          if (!flag) return false;
      }

      for (let i = 0; i < mat.length; i++) {
          if (i !== row && mat[i][col] !== 0) flag = false;
          if (!flag) return false;
      }

      return flag;
  }

  let count = 0;
  for (let row = 0; row < mat.length; row++) {
      for (let col = 0; col < mat[0].length; col++) {
          if (mat[row][col] === 1 && areZeroes(row, col)) count++;
      }
  }

  return count;
};
