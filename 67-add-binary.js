// 67. Add Binary

// Given two binary strings a and b, return their sum as a binary string.



// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"


// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

var addBinary = function(a, b) {
  let result = '';
  let lastDigitA = 0;
  let lastDigitB = 0;
  let pA = a.length - 1;
  let pB = b.length - 1;
  let carry = 0;
  while (pA >= 0 || pB >= 0) {
      let strA = pA >= 0 ? a[pA] : '0';
      let strB = pB >= 0 ? b[pB] : '0';
      if (strA === '1' && strB === 1) {
          carry = 1;
          result = '0' + result;
      } else {
          if (strA === '0' && strB === '0') {
              result = String(carry) + result;
              carry = 0;
          } else if (strA === '1' && strB === '1') {
              if (carry === 1) {
                  result = '1' + result;
                  carry = 1;
              } else {
                  result = '0' + result;
                  carry = 1;
              }
          } else {
              if (carry === 1) {
                  result = '0' + result;
                  carry = 1;
              } else {
                  result = '1' + result;
                  carry = 0;
              }
          }
      }
      pA--;
      pB--;
  }

  if (carry === 1) result = '1' + result;
  return result;

};

let addBinary = (a, b) => {
  // Truth Table
  // 1st + 2nd + carry = sum, new carry, decimal sum
  //   0 +  0  + 0 = 0, 0 (0)
  //   0 +  0  + 1 = 1, 0 (1)
  //   0 +  1  + 1 = 0, 1 (2)
  //   1 +  1  + 1 = 1, 1 (3)

  let carry = 0;
  let result = '';

  let len1 = a.length - 1;
  let len2 = b.length - 1;

  for (; len1 >= 0 || len2 >= 0 || carry > 0; len1--, len2--) {
    let sum = (Number(a[len1]) || 0) + (Number(b[len2]) || 0) + carry;
    if (sum > 1) {
      sum = sum % 2;
      carry = 1;
    } else {
      carry = 0;
    }
    result = `${sum}${result}`;
  }
  return result;
};
