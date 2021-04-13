// 783. Minimum Distance Between BST Nodes

// Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.

// Note: This question is the same as 530: https://leetcode.com/problems/minimum-absolute-difference-in-bst/



// Example 1:


// Input: root = [4,2,6,1,3]
// Output: 1
// Example 2:


// Input: root = [1,0,48,null,null,12,49]
// Output: 1


// Constraints:

// The number of nodes in the tree is in the range [2, 100].
// 0 <= Node.val <= 105

var minDiffInBST = function(root) {
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
