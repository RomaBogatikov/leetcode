// 102. Binary Tree Level Order Traversal

// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]


class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
}

let tree1 = new BinaryTree();

tree1.root = new TreeNode(3);
tree1.root.left = new TreeNode(9);

tree1.root.right = new TreeNode(20);
tree1.root.right.left = new TreeNode(15);
tree1.root.right.right = new TreeNode(7)

// iterative solution (99.04% time, 87.02% space)
// (O(n) time and space)
var levelOrderIterative = function(root) {
  // an array to return
  let levels = [];

  if (!root) return levels;
  let queue = [root];

  while (queue.length) {
      let len = queue.length;

      // an array to gather all the values from one level
      let level = [];
      for (let i = 0; i < len; i++) {
          let fromQueue = queue.shift();
          if (fromQueue.left) queue.push(fromQueue.left);
          if (fromQueue.right) queue.push(fromQueue.right);
          level.push(fromQueue.val);
      }
      levels.push(level);
  }
  return levels;
};

// recursive solution (O(n) time and space)
// (99.04% time, 94.14% space)
var levelOrderRecursive = function(root) {
  let traverseAndLevels = (node) => {
    level++;
    if (node.left) traverseAndLevels(node.left);
    if (node.right) traverseAndLevels(node.right);
    if (!levels[level]) levels[level] = [];
    levels[level].push(node.val);
    level--;
  }

  let levels = [];
  let level = -1;
  if (!root) return levels;

  traverseAndLevels(root);

  return levels;
};



let result = levelOrderRecursive(tree1.root);
console.log(result);
