// 1160. Find Words That Can Be Formed by Characters

// You are given an array of strings words and a string chars.

// A string is good if it can be formed by characters from chars (each character can only be used once).

// Return the sum of lengths of all good strings in words.



// Example 1:

// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation:
// The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
// Example 2:

// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation:
// The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.


// Note:

// 1 <= words.length <= 1000
// 1 <= words[i].length, chars.length <= 100
// All strings contain lowercase English letters only.
// Accepted
// 76,345
// Submissions
// 112,451

var countCharacters = function(words, chars) {
  let reducer = (acc, el) => {
      if (!acc[el]) {
          acc[el] = 1;
      } else {
          acc[el]++;
      }
      return acc;
  }

  let charsMap = chars.split('').reduce(reducer, {});

  let countGood = (word) => {
      let count = 0;
      let wordMap = word.split('').reduce(reducer, {});

      let wordChars = Object.keys(wordMap);
      for (let char of wordChars) {
          if (charsMap.hasOwnProperty(char) && wordMap[char] <= charsMap[char]) {
              count += wordMap[char];
          } else {
              return 0;
          }
      }
      return count;
  }

  return words.reduce((acc, word) => {
      acc += countGood(word);
      return acc;
  }, 0);
};
