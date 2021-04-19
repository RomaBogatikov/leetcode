// 788. Rotated Digits

// X is a good number if after rotating each digit individually by 180 degrees, we get a valid number that is different from X.  Each digit must be rotated - we cannot choose to leave it alone.

// A number is valid if each digit remains a digit after rotation. 0, 1, and 8 rotate to themselves; 2 and 5 rotate to each other (on this case they are rotated in a different direction, in other words 2 or 5 gets mirrored); 6 and 9 rotate to each other, and the rest of the numbers do not rotate to any other number and become invalid.

// Now given a positive number N, how many numbers X from 1 to N are good?

// Example:
// Input: 10
// Output: 4
// Explanation:
// There are four good numbers in the range [1, 10] : 2, 5, 6, 9.
// Note that 1 and 10 are not good numbers, since they remain unchanged after rotating.
// Note:

// N  will be in range [1, 10000].

var rotatedDigits = function(N) {
  let map = {
      '0': '0',
      '1': '1',
      '8': '8',
      '2': '5',
      '5': '2',
      '6': '9',
      '9': '6',
  }
  const rotate = (num) => {
      let result = '';
      let numStr = String(num);
      for (let digit of numStr) {
          let rotatedDigit = map[digit];
          if (!rotatedDigit) {
              return undefined;
          } else {
              result += rotatedDigit;
          }
      }

      return Number(result);
  }

  let count = 0

  for (let num = 1; num <= N; num++) {
      let rotatedNum = rotate(num);
      if (rotatedNum !== undefined && num !== rotatedNum) count++;
  }

  return count;
};
