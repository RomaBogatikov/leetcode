// 119. Pascal's Triangle II

// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]
 

// Constraints:

// 0 <= rowIndex <= 33

// O(n) time, O(rowIndex + rowIndex - 1) space
var getRow = function(rowIndex) {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];
  
  let prevRow = [1, 1]
  let curRow = [];
  for (let i = 2; i <= rowIndex; i++) {
      curRow = [];
      for (let j = 0; j <= i; j++) {
          if (j === 0) {
              curRow.push(1);
          } else if (j === i) {
              curRow.push(1);
          } else {
              curRow.push(prevRow[j-1] + prevRow[j]);
          }
      }
      prevRow = curRow;
  }
  return curRow;
};

// O(n) time, O(rowIndex) space
var getRow = function(rowIndex) {
  let arr = Array.from({length: rowIndex + 1}, () => 1);

  for (let i = 0; i < rowIndex + 1; i++) {
    for (let j = i - 1; j > 0; j--) {
      arr[j] = arr[j] + arr[j-1]
    }
  }

  return arr;
};