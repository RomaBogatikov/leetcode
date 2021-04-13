// 530. Minimum Absolute Difference in BST


// Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

// Example:

// Input:

//    1
//     \
//      3
//     /
//    2

// Output:
// 1

// Explanation:
// The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).


// Note:

// There are at least two nodes in this BST.
// This question is the same as 783: https://leetcode.com/problems/minimum-distance-between-bst-nodes/

var getMinimumDifference = function(root) {
  const traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node.val);
      if (node.right) traverse(node.right);
  }

  let result = [];

  traverse(root);

  let minDifference = Infinity;
  for (let i = 1; i < result.length; i++) {
      minDifference = Math.min(minDifference, result[i] - result[i-1]);
  }

  return minDifference;
};
