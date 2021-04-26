// 231. Power of Two

// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.



// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: n = 3
// Output: false
// Example 4:

// Input: n = 4
// Output: true
// Example 5:

// Input: n = 5
// Output: false


// Constraints:

// -231 <= n <= 231 - 1

// counting bits
var isPowerOfTwo = function(n) {
  if (n <= 0) return false;
  while (n > 1) {
      let lastBit = n & 1;
      if (lastBit !== 0) return false;
      n = n >> 1;
  }
  return true;
};

// Math solution
var isPowerOfTwo = function(n) {
  if (n <= 0) return false;
  let log = Math.log2(n);
  return Math.floor(log) === log;
};

// bitwise O(1)
var isPowerOfTwo = function(n) {
  if (n <= 0) return false;
  return (n & (n-1)) === 0;
};
