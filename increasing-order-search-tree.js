// 897. Increasing Order Search Tree

// Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.



// Example 1:


// Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
// Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
// Example 2:


// Input: root = [5,1,7]
// Output: [1,null,5,null,7]


// Constraints:

// The number of nodes in the given tree will be in the range [1, 100].
// 0 <= Node.val <= 1000

var increasingBSTIterative = function(root) {
  let result = [];

  let stack = [];
  while (true) {
      if (root) {
          stack.push(root);
          root = root.left;
      } else {
          if (!stack.length) break;
          let nodeFromStack = stack.pop();
          result.push(nodeFromStack);
          root = nodeFromStack.right;
      }
  }

  for (let i = 0; i < result.length; i++) {
      result[i].left = null;
      if (i+1 === result.length) {
          result[i].right = null;
      } else {
          result[i].right = result[i+1];
      }
  }

  return result[0];
};

var increasingBSTRecursive = function(root) {
  let traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node);
      if (node.right) traverse(node.right);
  }

  let result = [];
  traverse(root);
  for (let i = 0; i < result.length; i++) {
    result[i].left = null;
    if (i+1 === result.length) {
        result[i].right = null;
    } else {
        result[i].right = result[i+1];
    }
  }

  return result[0];
};
