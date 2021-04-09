// 1502. Can Make Arithmetic Progression From Sequence

// Given an array of numbers arr. A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

// Return true if the array can be rearranged to form an arithmetic progression, otherwise, return false.



// Example 1:

// Input: arr = [3,5,1]
// Output: true
// Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.
// Example 2:

// Input: arr = [1,2,4]
// Output: false
// Explanation: There is no way to reorder the elements to obtain an arithmetic progression.


// Constraints:

// 2 <= arr.length <= 1000
// -10^6 <= arr[i] <= 10^6

// my solution
// O(nlogn) time O(n) space
var canMakeArithmeticProgression = function(arr) {
  let sorted = arr.sort((a, b) => a - b);

  let difference = sorted[1] - sorted[0];
  for (let i = 1; i < arr.length; i++) {
      if (sorted[i] - sorted[i-1] !== difference) return false;
  }
  return true;
};

// a better one
// O(n) time
// O(1) space
var canMakeArithmeticProgression = function(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  if ( (max - min) % arr.length !== 0 ) return false;
  let difference = (max - min) / (arr.length - 1);

  let i = 0;
  while (i < arr.length) {
      if (arr[i] === min + i*difference) {
          i++;
      } else if ( (arr[i] - min) % difference !== 0) {
//             check if element belongs to the sequence
          return false;
      } else {
          let pos = (arr[i] - min) / difference;
//             check for duplicate elements
          if (arr[i] === arr[pos]) return false;
//             swap elements
          [arr[i], arr[pos]] = [arr[pos], arr[i]];
      }
  }
  return true;
};
