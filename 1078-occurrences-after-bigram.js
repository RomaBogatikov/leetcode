// 1078. Occurrences After Bigram
// Given words first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.

// For each such occurrence, add "third" to the answer, and return the answer.



// Example 1:

// Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
// Output: ["girl","student"]
// Example 2:

// Input: text = "we will we will rock you", first = "we", second = "will"
// Output: ["we","rock"]


// Note:

// 1 <= text.length <= 1000
// text consists of space separated words, where each word consists of lowercase English letters.
// 1 <= first.length, second.length <= 10
// first and second consist of lowercase English letters.

// my initial solution
// O(n) time
// O(n) space
var findOcurrences = function(text, first, second) {
  let stack = [];
  let result = [];
  let textArr = text.split(' ');

  for (let word of textArr) {
      if (stack.length === 2) {
          result.push(word);
          stack = [];
      }

      if (word === first && stack.length === 0) {
          stack.push(word);
      } else if (word === second && stack.length === 1) {
          stack.push(second);
      } else {
          if (stack.length === 1 && word === first) {
              continue;
          } else {
              stack.pop();
          }

      }
  }
  return result;
};
