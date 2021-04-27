// 1768. Merge Strings Alternately

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.



// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q
// merged: a p b q c   d


// Constraints:

// 1 <= word1.length, word2.length <= 100
// word1 and word2 consist of lowercase English letters.



var mergeAlternately = function(word1, word2) {
  let p1 = 0, p2 = 0;

  let res = '';
  let first = true;
  while (word1[p1] || word2[p2]) {
      if (first) {
          first = false;
          if (!word1[p1]) continue;
          res += word1[p1];
          p1++;
      } else {
          first = true;
          if (!word2[p2]) continue;
          res += word2[p2];
          p2++;
      }
  }

  return res;
};

var mergeAlternately = function(word1, word2) {
  let p1 = 0, p2 = 0;

  let res = '';
  let first = true;
  while (word1[p1] && word2[p2]) {
      if (first) {
          first = false;
          res += word1[p1];
          p1++;
      } else {
          first = true;
          res += word2[p2];
          p2++;
      }
  }

  if (!word1[p1]) {
      res += word2.slice(p2);
  } else {
      res += word1.slice(p1);
  }

  return res;
};
