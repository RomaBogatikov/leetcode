// 1047. Remove All Adjacent Duplicates In String

// Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

// We repeatedly make duplicate removals on S until we no longer can.

// Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.



// Example 1:

// Input: "abbaca"
// Output: "ca"
// Explanation:
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".


// Note:

// 1 <= S.length <= 20000
// S consists only of English lowercase letters.

// my solution
var removeDuplicatesMy = function(S) {
  let stack = [S[0]];

  for (let i = 1; i < S.length; i++) {
      let lastEl = stack.pop();
      if (lastEl === S[i]) {
          continue;
      } else {
          if (lastEl !== undefined) stack.push(lastEl)
          if (S[i] !== undefined) stack.push(S[i]);
      }
  }

  let result = stack.join('');
  return result;
};

// a more concise solution
var removeDuplicatesBetter = function(S) {
  let stack = [];

  for (let i = 0; i < S.length; i++) {
      if (stack[stack.length - 1] === S[i]) {
          stack.pop();
      } else {
          stack.push(S[i]);
      }
  }

  let result = stack.join('');
  return result;
};

// two pointer solution
var removeDuplicatesTwoPointer = function(S) {
    let arr = S.split('');
    let ans = 0;
    for (let i = 0; i < S.length; i++) {
        if (ans === 0 || arr[i] !== arr[ans - 1]) {
            arr[ans] = arr[i];
            ans++;
        } else {
            ans--;
        }
    }

    return arr.slice(0, ans).join('');
}

let result = removeDuplicatesTwoPointer('abbaca');
console.log(result)
