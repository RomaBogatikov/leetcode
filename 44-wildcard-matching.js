// 44. Wildcard Matching

// Add to List

// Share
// Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:

// '?' Matches any single character.
// '*' Matches any sequence of characters (including the empty sequence).
// The matching should cover the entire input string (not partial).



// Example 1:

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input: s = "aa", p = "*"
// Output: true
// Explanation: '*' matches any sequence.
// Example 3:

// Input: s = "cb", p = "?a"
// Output: false
// Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.


// Constraints:

// 0 <= s.length, p.length <= 2000
// s contains only lowercase English letters.
// p contains only lowercase English letters, '?' or '*'.

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
  let matrix = Array.from(
      {length: s.length + 1},
      () => Array.from({length: p.length + 1}, () => undefined)
  )

  matrix[0][0] = true;

  for (let j = 1; j <= p.length; j++) {
      if (p[j-1] === '*') {
          matrix[0][j] = matrix[0][j-1]
      } else {
          matrix[0][j] = false;
      }

  }
  for (let i = 1; i <= s.length; i++) {
      matrix[i][0] = false;
  }

  for (let i = 1; i <= s.length; i++) {
      for (let j = 1; j <= p.length; j++) {
          let sInd = i-1;
          let pInd = j-1;
          if (s[sInd] === p[pInd] || p[pInd] === '?') {
              matrix[i][j] = matrix[i-1][j-1];
          } else if (p[pInd] === '*') {
              matrix[i][j] = matrix[i-1][j] || matrix[i][j-1];
          } else {
//                 string[sInd] !== p[pInd]
              matrix[i][j] = false
          }
      }
  }

  return matrix[s.length][p.length];
};
