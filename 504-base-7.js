// 504. Base 7

// Given an integer num, return a string of its base 7 representation.



// Example 1:

// Input: num = 100
// Output: "202"
// Example 2:

// Input: num = -7
// Output: "-10"


// Constraints:

// -107 <= num <= 107

var convertToBase7 = function(num) {
  if (num === 0) return '0';
  let copyNum = num;
  let result = '';
  while (num !== 0) {
      let remainder = num % 7;
      result = String(Math.abs(remainder)) + result;
      num = (num - remainder) / 7;
  }

  return copyNum > 0 ? result : `-${result}`;
};
