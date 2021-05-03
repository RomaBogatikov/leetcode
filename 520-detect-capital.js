// 520. Detect Capital

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.



// Example 1:

// Input: word = "USA"
// Output: true
// Example 2:

// Input: word = "FlaG"
// Output: false


// Constraints:

// 1 <= word.length <= 100
// word consists of lowercase and uppercase English letters.

var detectCapitalUse = function(word) {
  const isCapital = (letter) => letter.charCodeAt(0) >= 'A'.charCodeAt(0) && letter.charCodeAt(0) <= 'Z'.charCodeAt(0);

  let firstLetter = word.charAt(0);

//     if first letter is capital, the remaining letters should be either all capital, or all lowercase
  if (isCapital(firstLetter)) {
      let capital;
      for (let i = 1; i < word.length; i++) {
          if (i === 1) {
              capital = isCapital(word[i]);
          } else {
              if (capital !== isCapital(word[i])) return false
          }
      }
      return true;
  } else {
//         if first letter is lowercase, the rest of the letters should be lowercase
      for (let i = 0; i < word.length; i++) {
          if (isCapital(word[i])) return false;
      }
      return true;
  }
};
