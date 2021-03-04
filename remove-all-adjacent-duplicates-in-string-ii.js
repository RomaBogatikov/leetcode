// 1209. Remove All Adjacent Duplicates in String II

// Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them causing the left and the right side of the deleted substring to concatenate together.

// We repeatedly make k duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made.

// It is guaranteed that the answer is unique.



// Example 1:

// Input: s = "abcd", k = 2
// Output: "abcd"
// Explanation: There's nothing to delete.
// Example 2:

// Input: s = "deeedbbcccbdaa", k = 3
// Output: "aa"
// Explanation:
// First delete "eee" and "ccc", get "ddbbbdaa"
// Then delete "bbb", get "dddaa"
// Finally delete "ddd", get "aa"
// Example 3:

// Input: s = "pbbcggttciiippooaais", k = 2
// Output: "ps"


// Constraints:

// 1 <= s.length <= 10^5
// 2 <= k <= 10^4
// s only contains lower case English letters.

var removeDuplicates = function(s, k) {
  let flag = true;
  let count = 1;

  while (flag === true) {
      let stack = [];
      flag = false;
      for (let char of s) {
          if (stack[stack.length - 1] !== char) {
              stack.push(char);
              count = 1;
          } else if (stack[stack.length - 1] === char) {
              stack.push(char);
              count++;
              if (count === k) {
                  while (count > 0) {
                      stack.pop();
                      count--;
                  }
                  count++;
                  flag = true;
              }
          }
      }
      s = stack.join('');
  }

  return s;

};

let result = removeDuplicates("deeedbbcccbdaa", 3);
console.log(result)
