// 415. Add Strings

// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.



// Example 1:

// Input: num1 = "11", num2 = "123"
// Output: "134"
// Example 2:

// Input: num1 = "456", num2 = "77"
// Output: "533"
// Example 3:

// Input: num1 = "0", num2 = "0"
// Output: "0"


// Constraints:

// 1 <= num1.length, num2.length <= 104
// num1 and num2 consist of only digits.
// num1 and num2 don't have any leading zeros except for the zero itself.


// Follow up: Could you solve it without using any built-in BigInteger library or converting the inputs to integer directly?

var addStrings = function(num1, num2) {
  let result = '';

  let p1 = num1.length - 1;
  let p2 = num2.length - 1;
  let carry = 0;
  while (p1 > -1 || p2 > -1) {
      let sum = Number(num1[p1] || 0) + Number(num2[p2] || 0) + carry;
      let remainder = sum % 10;
      carry = (sum - remainder) / 10;
      result = String(remainder) + result;
      p1--;
      p2--;
  }

  if (carry) result = String(carry) + result;
  return result;

};
