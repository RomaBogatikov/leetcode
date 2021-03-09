// 709. To Lower Case
// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.



// Example 1:

// Input: "Hello"
// Output: "hello"
// Example 2:

// Input: "here"
// Output: "here"
// Example 3:

// Input: "LOVELY"
// Output: "lovely"

// my solution
var toLowerCase = function(str) {
  let result = '';
  let code;
  for (let i = 0; i < str.length; i++) {
      code = str.charCodeAt(i);
      if (code < 97 && code >= 65) {
          result += String.fromCharCode(code + 32)
      } else {
          result += str[i];
      }
  }
  return result;
};

// a better solution without magic numbers

var toLowerCase = function(str) {
  let result = '';
  let diff = Math.abs('a'.charCodeAt(0) - 'A'.charCodeAt(0));
  for (let i  = 0; i < str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
      result += String.fromCharCode(str[i].charCodeAt(0) + diff);
    } else {
      result += str[i]
    }
  }
  return result;
}
