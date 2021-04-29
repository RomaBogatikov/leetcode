// 1662. Check If Two String Arrays are Equivalent

// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.



// Example 1:

// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.
// Example 2:

// Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
// Output: false
// Example 3:

// Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
// Output: true


// Constraints:

// 1 <= word1.length, word2.length <= 103
// 1 <= word1[i].length, word2[i].length <= 103
// 1 <= sum(word1[i].length), sum(word2[i].length) <= 103
// word1[i] and word2[i] consist of lowercase letters.

var arrayStringsAreEqual = function(word1, word2) {
  return word1.join('') === word2.join('');
};

var arrayStringsAreEqual = function(word1, word2) {
  let p1 = 0;
  let p2 = 0;
  
  let ind1 = 0;
  let ind2 = 0
  
  while (ind1 < word1.length && ind2 < word2.length) {
      if (word1[ind1].charAt(p1) !== word2[ind2].charAt(p2)) return false;

      p1++;
      p2++;
      if (word1[ind1].charAt(p1) === '') {
          p1 = 0;
          ind1++;
      }
      if (word2[ind2].charAt(p2) === '') {
          p2 = 0;
          ind2++;
      }
  }
  
  // check that one word is not a substring of another word
  return ind1 === word1.length && ind2 === word2.length;
};

let result = arrayStringsAreEqual2(["ab", "c"], ["a", "bc"])