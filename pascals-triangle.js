// 118. Pascal's Triangle

// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:




// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]


// Constraints:

// 1 <= numRows <= 30

var generate = function(numRows) {
  let output = [];
  for (let i = 0; i < numRows; i++) {
      if (i === 0) {
          output.push([1]);
      } else if (i === 1) {
          output.push([1, 1]);
      } else {
          let rowArr = [];
          for (let j = 0; j <= i; j++) {
              if (j === 0 || j === i) {
                  rowArr.push(1);
              } else {
                  rowArr.push(output[i-1][j-1] + output[i-1][j]);
              }
          }
          output.push(rowArr);
      }

  }
  return output;
};
