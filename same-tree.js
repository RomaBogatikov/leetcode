// 100. Same Tree

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.



// Example 1:


// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Example 2:


// Input: p = [1,2], q = [1,null,2]
// Output: false
// Example 3:


// Input: p = [1,2,1], q = [1,1,2]
// Output: false


// Constraints:

// The number of nodes in both trees is in the range [0, 100].
// -104 <= Node.val <= 104


// my solution (recursive with helper function)
var isSameTree = function(p, q) {
  let traverse = (node1, node2) => {
      if (node1 === null && node2 === null) return true;
      if (node1 === null || node2 === null) return false;
      if (node1.val !== node2.val) return false;

      let left = traverse(node1.left, node2.left);
      let right = traverse(node1.right, node2.right);

      return left && right;
  }

  return traverse(p, q);
};

// pure recursion

var isSameTree = function(p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
