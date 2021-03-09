// 1190. Reverse Substrings Between Each Pair of Parentheses

// You are given a string s that consists of lower case English letters and brackets.

// Reverse the strings in each pair of matching parentheses, starting from the innermost one.

// Your result should not contain any brackets.



// Example 1:

// Input: s = "(abcd)"
// Output: "dcba"
// Example 2:

// Input: s = "(u(love)i)"
// Output: "iloveu"
// Explanation: The substring "love" is reversed first, then the whole string is reversed.
// Example 3:

// Input: s = "(ed(et(oc))el)"
// Output: "leetcode"
// Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.
// Example 4:

// Input: s = "a(bcdefghijkl(mno)p)q"
// Output: "apmnolkjihgfedcbq"


// Constraints:

// 0 <= s.length <= 2000
// s only contains lower case English characters and parentheses.
// It's guaranteed that all parentheses are balanced.

// my solution using stack
var reverseParentheses1 = function(s) {
  const reverse = (left, right) => {
      while (left < right) {
          if (sArr[left] === '(' || sArr[left] === ')') {
              left++;
          } else if (sArr[right] === '(' || sArr[right] === ')') {
              right--;
          } else {
              let temp = sArr[left];
              sArr[left] = sArr[right];
              sArr[right] = temp;
              left++;
              right--;
          }
      }
  };

  let stack = [];
  let sArr = s.split('');
  for (let i = 0; i < sArr.length; i++) {
      if (sArr[i] === '(') {
          stack.push(i);
      } else if (sArr[i] === ')') {
          reverse(stack.pop(), i);
      }
  }

  let result = '';

  for (let i = 0; i < sArr.length; i++) {
      if (sArr[i] === '(' || sArr[i] === ')') {
          continue;
      } else {
          result += sArr[i];
      }
  }

  return result;

};

// another solution (that I looked up) using stack and queue
var reverseParentheses = function(s) {
  let stack = [];
  for (let char of s) {
      if (char !== ')') {
          stack.push(char);
          continue;
      }

      let queue = [];
      let el = stack.pop();
      while (el !== '(') {
          queue.push(el);
          el = stack.pop();
      }

      while (queue.length) {
          let fromQueue = queue.shift();
          stack.push(fromQueue);
      }
  }

  return stack.join('')

};
