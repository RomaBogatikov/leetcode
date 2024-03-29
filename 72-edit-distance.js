// 72. Edit Distance

// Add to List

// Share
// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

// You have the following three operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character


// Example 1:

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation:
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')
// Example 2:

// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation:
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')


// Constraints:

// 0 <= word1.length, word2.length <= 500
// word1 and word2 consist of lowercase English letters.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
  let matrix = Array.from({length: word2.length + 1}, () => Array.from({length: word1.length + 1}, () => 0))

	for (let j = 0; j < matrix[0].length; j++) {
		matrix[0][j] = j;
	}
	for (let i = 0; i < matrix.length; i++) {
		matrix[i][0] = i;
	}

	for (let i = 1; i < matrix.length; i++) {
		for (let j = 1; j < matrix[0].length; j++) {
			if (word1[j-1] === word2[i-1]) {
				matrix[i][j] = matrix[i-1][j-1]
			} else {
				matrix[i][j] = Math.min(matrix[i-1][j], matrix[i-1][j-1], matrix[i][j-1]) + 1;
			}
		}
	}

	return matrix[word2.length][word1.length]
};
