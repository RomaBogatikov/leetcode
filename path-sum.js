// Problem 112. Path Sum

// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

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

tree1.root = new TreeNode(5);
tree1.root.left = new TreeNode(4);
tree1.root.left.left = new TreeNode(11);
tree1.root.left.left.left = new TreeNode(7);
tree1.root.left.left.right = new TreeNode(2);

tree1.root.right = new TreeNode(8);
tree1.root.right.left = new TreeNode(13);
tree1.root.right.right = new TreeNode(4)
tree1.root.right.right.right = new TreeNode(1)

var hasPathSum = function(root, targetSum) {
  let traverseAndCheck = (node) => {
    if (node === null) return;
    sum += node.val;
    if (node.left) traverseAndCheck(node.left);
    if (node.right) traverseAndCheck(node.right);
    if (sum === targetSum && !node.left && !node.right) flag = true;
    sum -= node.val
  }

  let sum = 0;
  let flag = false;

  traverseAndCheck(root);
  return flag;
};

let result = hasPathSum(tree1.root, 22)
