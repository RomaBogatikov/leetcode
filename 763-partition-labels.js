// 763. Partition Labels

// A string S of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.



// Example 1:

// Input: S = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.


// Note:

// S will have length in range [1, 500].
// S will consist of lowercase English letters ('a' to 'z') only.


var partitionLabels = function(S) {
  let map = S.split('').reduce((acc, char) => {
      if (!acc[char]) {
          acc[char] = 1;
      } else {
          acc[char]++;
      }
      return acc;
  }, {});

  let set = new Set();
  let result = [];
  let subString = '';

  for (let i = 0; i < S.length; i++) {
      map[S[i]]--;
      subString += S[i];
      set.add(S[i]);
      if (map[S[i]] === 0 && [...set].every(char => map[char] === 0)) {
          result.push(subString.length);
          subString = '';
          set = new Set();
      }
  }
  return result;
};
