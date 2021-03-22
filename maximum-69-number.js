// 1323. Maximum 69 Number

// Given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).



// Example 1:

// Input: num = 9669
// Output: 9969
// Explanation:
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666.
// The maximum number is 9969.
// Example 2:

// Input: num = 9996
// Output: 9999
// Explanation: Changing the last digit 6 to 9 results in the maximum number.
// Example 3:

// Input: num = 9999
// Output: 9999
// Explanation: It is better not to apply any change.


// Constraints:

// 1 <= num <= 10^4
// num's digits are 6 or 9.

var maximum69Number  = function(num) {
  let getDigitAtPosition = (position) => {
      let digit;
      let numCopy = num;
      while (position) {
          digit = numCopy % 10;
          numCopy = (numCopy - digit) / 10;
          position--;
      }
      return digit;
  }

  let numberOfDigits = Math.floor(Math.log10(num)) + 1;

  let positionOfMostSignificant6;
  for (let i = 1; i <= numberOfDigits; i++) {
      let rightDigit = getDigitAtPosition(i);
      if (rightDigit === 6) positionOfMostSignificant6 = i;
  }

  let result = 0;
  for (let i = 0; i < numberOfDigits; i++) {
      if ((i+1) === positionOfMostSignificant6) {
          result += 9 * 10**i;
      } else {
          result += getDigitAtPosition(i+1) * 10**i;
      }
  }

  return result;
};

var maximum69Number2  = function(num) {
  let getDigitAtPosition = (position) => {
      let digit;
      let numCopy = num;
      while (position) {
          digit = numCopy % 10;
          numCopy = (numCopy - digit) / 10;
          position--;
      }
      return digit;
  }

  let numberOfDigits = Math.floor(Math.log10(num)) + 1;

  let result = 0;
  let flag = false;
  for (let i = 0; i < numberOfDigits; i++) {
      let leftMostDigit = getDigitAtPosition(numberOfDigits - i);

      if (leftMostDigit === 6 && !flag) {
          result += 9 * 10**(numberOfDigits - i - 1);
          flag = true;
      } else {
          result += leftMostDigit * 10**(numberOfDigits - i - 1);
      }
  }

  return result;
};
