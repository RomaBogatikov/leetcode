// 345. Reverse Vowels of a String

// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:

// Input: "hello"
// Output: "holle"
// Example 2:

// Input: "leetcode"
// Output: "leotcede"
// Note:
// The vowels does not include the letter "y".

var reverseVowels = function(s) {
  const isVowel = (char) => {
      char = char.toLowerCase();
      let vowels = {
          a: 1,
          e: 1,
          i: 1,
          o: 1,
          u: 1,
      }

      return char in vowels;
  }

  const swap = (arr, ind1, ind2) => {
      let temp = arr[ind1];
      arr[ind1] = arr[ind2];
      arr[ind2] = temp;
  }

  let left = 0;
  let right = s.length - 1;

  let stringArr = s.split('');

  let isVowelLeft;
  let isVowelRight
  while (left < right) {
      isVowelLeft = isVowel(stringArr[left]);
      isVowelRight = isVowel(stringArr[right]);
      if (isVowelLeft && isVowelRight) {
          swap(stringArr, left, right);
          left++;
          right--;
      } else if (isVowelLeft) {
          right--;
      } else {
          left++;
      }
  }

  let result = stringArr.join('');
  return result;
};
