// 1408. String Matching in an Array

// Given an array of string words. Return all strings in words which is substring of another word in any order.

// String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].



// Example 1:

// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.
// Example 2:

// Input: words = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".
// Example 3:

// Input: words = ["blue","green","bu"]
// Output: []

var stringMatching = function(words) {
  //     check if word1 is substring of word2
      const isSubstring = (word1, word2) => {
          let p1 = 0;
          let p2 = 0;

          while (p2 < word2.length) {
              if (word2[p2] !== word1[p1]) {
                  if (word2[p2] === word1[0]) p1 = 1;
                  else p1 = 0;
                  p2++;
              } else if (word2[p2] === word1[p1]) {
                  p1++;
                  p2++;
              }
              if (p1 === word1.length) return true;
          }

          return false;
      }

      let result = new Set();

      for (let i = 0; i < words.length; i++) {
          for (let j = 0; j < words.length; j++) {
              if (i !== j && isSubstring(words[i], words[j])) result.add(words[i]);
          }
      }

      return [...result];
  };
