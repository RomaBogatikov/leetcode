// 1002. Find Common Characters


// Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

// You may return the answer in any order.



// Example 1:

// Input: ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: ["cool","lock","cook"]
// Output: ["c","o"]


// Note:

// 1 <= A.length <= 100
// 1 <= A[i].length <= 100
// A[i][j] is a lowercase letter

var commonChars = function(A) {
  let result = [];
  let sets = A.map(str => str.split('').reduce((acc, el) => {
      if (!acc[el]) {
          acc[el] = 1;
      } else {
          acc[el] ++;
      }
      return acc;
  }, {}));
  // console.log(sets)
  let keys = Object.keys(sets[0]);
  for (let char of keys) {
      let minNum = sets[0][char];
      if (sets.every(set => {
          minNum = Math.min(minNum, set[char]);
          return sets[0].hasOwnProperty(char) && set.hasOwnProperty(char);
      })) {
          // let count = sets[0][char];
          while (minNum) {
              result.push(char);
              minNum--;
          }

      };
  }

  return result;
};

let res = commonChars(["cool","lock","cook"]);
console.log(res)
