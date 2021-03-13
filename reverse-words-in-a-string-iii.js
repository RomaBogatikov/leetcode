// 557. Reverse Words in a String III
// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.



// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "God Ding"
// Output: "doG gniD"


// Constraints:

// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.

var reverseWords = function(s) {
  let reverse = (str) => {
      let result = '';
      let strLength = str.length;
      while (strLength) {
          result += str[strLength - 1];
          strLength--;
      }
      return result;
  }

  let sArr = s.split(' ');
  result = sArr.map(str => reverse(str));
  return result.join(' ');
};

var reverseWords = function(s) {
  let sArr = s.split('');
  let stack = [];
  let result = [];

  for (let i = 0; i < sArr.length; i++) {
      if (sArr[i] !== ' ') {
          stack.push(sArr[i]);
      } else {
          while (stack.length) {
              result.push(stack.pop());
          }
          result.push(sArr[i]);
      }
  }
  while (stack.length) {
      result.push(stack.pop());
  }
  return result.join('');
};
