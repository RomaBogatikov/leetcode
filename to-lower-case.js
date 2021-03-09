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
