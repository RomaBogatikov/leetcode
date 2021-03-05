// 205. Isomorphic Strings

// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.



// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true


// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.


var isIsomorphic = function(s, t) {
  let map = {};
  let mapT = {};
  for (let i = 0; i < s.length; i++) {
      if (!map.hasOwnProperty(s[i])) {
          if (mapT.hasOwnProperty(t[i])) {
              return false;
          } else {
              map[s[i]] = t[i];
              mapT[t[i]] = 1;
          }
      } else if (map[s[i]] !== t[i]) {
          return false;
      }
  }
  return true;
};

let isIsomorphic2 = function(s, t) {
  let mapS = {};
  let mapT = {};

  for (let i = 0; i < s.length; i++) {
    if (!mapS[s[i]]) mapS[s[i]] = t[i];
    if (!mapT[t[i]]) mapT[t[i]] = s[i];
    if (t[i] !== mapS[s[i]] || s[i] !== mapT[t[i]]) return false;
  }
  return true;
}

