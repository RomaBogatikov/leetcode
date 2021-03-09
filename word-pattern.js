// 290. Word Pattern

// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.



// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false
// Example 4:

// Input: pattern = "abba", s = "dog dog dog dog"
// Output: false


// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lower-case English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.

// my initial solution
var wordPattern = function(pattern, s) {
  let sArr = s.split(' ');
  if (pattern.length !== sArr.length) return false;
  let mapPattern = {};
  let mapS = {};

  for (let i = 0; i < pattern.length; i++) {
      if (mapPattern[pattern[i]]) {
          if (mapPattern[pattern[i]] !== sArr[i]) return false;
      }
      mapPattern[pattern[i]] = sArr[i];
      if (mapS[sArr[i]]) {
          if (mapS[sArr[i]] !== pattern[i]) return false;
      }
      mapS[sArr[i]] = pattern[i];
  }
  return true;
};

