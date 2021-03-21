// 463. Island Perimeter
// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.



// Example 1:


// Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// Output: 16
// Explanation: The perimeter is the 16 yellow stripes in the image above.
// Example 2:

// Input: grid = [[1]]
// Output: 4
// Example 3:

// Input: grid = [[1,0]]
// Output: 4


// Constraints:

// row == grid.length
// col == grid[i].length
// 1 <= row, col <= 100
// grid[i][j] is 0 or 1.

var islandPerimeter = function(grid) {
  let getNumberOfConnections = (i, j) => {
      let count = 0;
      if ((i - 1 >= 0) && grid[i-1][j]) count++;
      if ((i + 1 < grid.length) && grid[i+1][j]) count++;
      if ((j - 1 >= 0) && grid[i][j-1]) count++;
      if ((j + 1 < grid[i].length) && grid[i][j+1]) count++;

      return count;
  }

  let totalConnectionsCount = 0;
  let islandCount = 0;
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j]) {
              islandCount++;
              totalConnectionsCount += getNumberOfConnections(i, j);
          }
      }
  }

  return islandCount * 4 - totalConnectionsCount;

};
