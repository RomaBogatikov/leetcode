// 69. Sqrt(x)

// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.



// Example 1:

// Input: x = 4
// Output: 2
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.


// Constraints:

// 0 <= x <= 231 - 1

var mySqrt = function(x) {
  if (x === 1) return 1;
  if (x === 0) return 0;
  let left = 0;
  let right = Math.floor(x/2) + 1;

  let eps = 0.00001;
  let previous = right;
  while (Math.abs(right - left) > eps) {
    if (right * right > x) {
      previous = right;
      right = (left + right) / 2;
    } else {
      left = right;
      right = previous;
    }
  }
  return Math.floor(right);
};

// let result = mySqrt(2147395599);
let result = mySqrt(8);

console.log(result);
