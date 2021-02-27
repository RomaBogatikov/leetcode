// 844. Backspace String Compare
// Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
// Example 3:

// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
// Example 4:

// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".

var backspaceCompare = function(S, T) {
  let stackS = [];
  for (let i = 0; i < S.length; i++) {
      if (S[i] === '#') {
          stackS.pop();
      } else {
          stackS.push(S[i]);
      }
  }

  let stackT = [];
  for (let i = 0; i < T.length; i++) {
      if (T[i] === '#') {
          stackT.pop();
      } else {
          stackT.push(T[i]);
      }
  }

  let stringS = stackS.join('');
  let stringT = stackT.join('');

  return stringS === stringT;
};

let result = backspaceCompare('ab#c', 'ad#c');
