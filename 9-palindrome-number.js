// 9. Palindrome Number

// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.



// Example 1:

// Input: x = 121
// Output: true
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Example 4:

// Input: x = -101
// Output: false


// Constraints:

// -231 <= x <= 231 - 1


// Follow up: Could you solve it without converting the integer to a string?

// My solution O(n) time O(n) space
var isPalindrome = function(x) {
  if (x < 0) return false;
  let xArr = [];
  let lastDigit;
  while (x !== 0) {
      lastDigit = x % 10;
      xArr.push(lastDigit);
      x = (x - lastDigit) / 10;
  }

  let left = 0;
  let right = xArr.length - 1;
  while (left < right) {
      if (xArr[left] !== xArr[right]) return false;
      left++;
      right--;
  }
  return true;
};

// a slightly better approach O(1) space
var isPalindrome = function(x) {
  if (x < 0) return false;
  let original = x;
  let reversed = 0;

  let lastDigit;
  while (x !== 0) {
    lastDigit = x % 10;
    reversed = reversed * 10 + lastDigit;
    x = (x - lastDigit) / 10;
  }

  return reversed === original;
}
