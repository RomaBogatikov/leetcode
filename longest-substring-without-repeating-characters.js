// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.



// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0


// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.


// var lengthOfLongestSubstring = function(s) {
//   let checkForDuplicates = (left, right, char) => {
//       for (let i = left; i < right; i++) {
//           if (s[i] === char) return true;
//       }
//       return false;
//   }

//   let resultArray = [];

//   let p1 = 0;
//   let p2 = 0;

//   let subStringNoDuplicates = s[p1];

//   while (s[p2]) {
//     p2++;
//     if (s[p2] === undefined) {
//       resultArray.push(subStringNoDuplicates);
//       break;
//     }
//     if (checkForDuplicates(p1, p2, s[p2])) {
//       resultArray.push(subStringNoDuplicates);
//       p1++;
//       p2 = p1;
//       subStringNoDuplicates = s[p1];
//     } else {
//       subStringNoDuplicates += s[p2];
//     }
//   }

//   let maxStringLength = 0;
//   for (let i = 0; i < resultArray.length; i++) {
//     if (resultArray[i].length > maxStringLength) {
//       maxStringLength = resultArray[i].length;
//     }
//   }

//   return maxStringLength;
// };


var lengthOfLongestSubstring = function(s) {
  let checkForDuplicates = (left, right, char) => {
      for (let i = left; i < right; i++) {
          if (s[i] === char) return true;
      }
      return false;
  }

  s = s.split('');

  let result = 0;

  let p1 = 0;
  let p2 = 0;

  let subStringNoDuplicates = s[p1];

  while (s[p2]) {
    p2++;
    if (s[p2] === undefined) {
      if (subStringNoDuplicates.length > result) {
          result = subStringNoDuplicates.length
      }
    }
    if (checkForDuplicates(p1, p2, s[p2])) {
      if (subStringNoDuplicates.length > result) {
          result = subStringNoDuplicates.length
      }
      p1++;
      p2 = p1;
      subStringNoDuplicates = s[p1];
    } else {
      subStringNoDuplicates += s[p2];
    }
  }

  return result;
};

let input = "dvdg";

let result = lengthOfLongestSubstring(input);

console.log(result);

