// 884. Uncommon Words from Two Sentences

// We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Return a list of all uncommon words.

// You may return the list in any order.



// Example 1:

// Input: A = "this apple is sweet", B = "this apple is sour"
// Output: ["sweet","sour"]
// Example 2:

// Input: A = "apple apple", B = "banana"
// Output: ["banana"]


// Note:

// 0 <= A.length <= 200
// 0 <= B.length <= 200
// A and B both contain only spaces and lowercase letters.

var uncommonFromSentences = function(A, B) {
  let reducer = (acc, word) => {
      if (!acc[word]) {
          acc[word] = 1;
      } else {
          acc[word]++
      }
      return acc;
  }
  let mapA = A.split(' ').reduce(reducer, {});
  let mapB = B.split(' ').reduce(reducer, {});

  let result = [];

  let keysA = Object.keys(mapA);
  let keysB = Object.keys(mapB);

  for (let word of keysA) {
      if (mapA[word] === 1 && !mapB.hasOwnProperty(word)) result.push(word);
  }

  for (let word of keysB) {
      if (mapB[word] === 1 && !mapA.hasOwnProperty(word)) result.push(word)
  }

  return result;

};
