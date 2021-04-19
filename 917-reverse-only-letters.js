// 917. Reverse Only Letters

// Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.



// Example 1:

// Input: "ab-cd"
// Output: "dc-ba"
// Example 2:

// Input: "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
// Example 3:

// Input: "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"


// Note:

// S.length <= 100
// 33 <= S[i].ASCIIcode <= 122
// S doesn't contain \ or "

var reverseOnlyLetters = function(S) {
  const isLetter = (char) => {
      return (char.charCodeAt(0) >= 'A'.charCodeAt(0)
          && char.charCodeAt(0) <= 'Z'.charCodeAt(0))
          || (char.charCodeAt(0) >= 'a'.charCodeAt(0)
          && char.charCodeAt(0) <= 'z'.charCodeAt(0))
  }

  let sArr = S.split('');

  let left = 0;
  let right = S.length - 1;

  while (left < right) {
      if (isLetter(sArr[left]) && isLetter(sArr[right])) {
          [sArr[left], sArr[right]] = [sArr[right], sArr[left]];
          left++;
          right--;
      } else if (!isLetter(sArr[left])) {
          left++;
      } else {
          right--;
      }
  }

  return sArr.join('');
};
