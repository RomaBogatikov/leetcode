// 103. Binary Tree Zigzag Level Order Traversal

// Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its zigzag level order traversal as:
// [
//   [3],
//   [20,9],
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
tree1.root.right.right = new TreeNode(7);


var zigzagLevelOrder = function(root) {
  let traverseAndBuild = (node) => {
      level++;
      if (node.left) traverseAndBuild(node.left);
      if (node.right) traverseAndBuild(node.right);
      if (!levels[level]) levels[level] = [];
      if (level % 2 === 0) {
          levels[level].push(node.val);
      } else {
          levels[level].unshift(node.val);
      }
      level--
  }

  let levels = [];
  if (!root) return levels;
  let level = -1;

  traverseAndBuild(root);

  return levels;
};

let result = zigzagLevelOrder(tree1.root);
console.log(result)
