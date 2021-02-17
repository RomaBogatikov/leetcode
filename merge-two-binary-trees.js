
// 617. Merge Two Binary Trees

// You are given two binary trees root1 and root2.

// Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

// Return the merged tree.

// Note: The merging process must start from the root nodes of both trees.

// Example 1:


// Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
// Output: [3,4,5,5,4,null,7]
// Example 2:

// Input: root1 = [1], root2 = [1,2]
// Output: [2,2]
 

// Constraints:

// The number of nodes in both trees is in the range [0, 2000].
// -104 <= Node.val <= 104

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
let tree2 = new BinaryTree();

tree1.root = new TreeNode(1);
tree1.root.left = new TreeNode(3);
tree1.root.right = new TreeNode(2);
tree1.root.left.left = new TreeNode(5);

tree2.root = new TreeNode(2);
tree2.root.left = new TreeNode(1);
tree2.root.right = new TreeNode(3);
tree2.root.left.right = new TreeNode(4);
tree2.root.right.right = new TreeNode(7);

var mergeTreesRecursive = function(root1, root2) {
  if (root1 === null) return root2;
  if (root2 === null) return root1;
  root1.val += root2.val;

  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);

  return root1;
};

var mergeTreesIterative = function(root1, root2) {
  let current1 = root1;
  let current2 = root2;
  let stack = [];

  while (true) {
    if (current1 !== null && current2 !==null) {
      stack.push(current1);
      stack.push(current2)
      current1 = current1.left;
      current2 = current2.left;
    } else if (stack.length > 0) {
      let fromStack2 = stack.pop();
      let fromStack1 = stack.pop();
      if (!fromStack1.left && fromStack2.left) fromStack1.left = fromStack2.left;
      if (!fromStack1.right && fromStack2.right) fromStack1.right = fromStack2.right;
      if (fromStack1 !== fromStack2) fromStack1.val += fromStack2.val;
      current1 = fromStack1.right;
      current2 = fromStack2.right;
    } else {
      break;
    }
  }

  return root1 || root2;
};


// let result = mergeTrees(tree1.root, tree2.root);
let result = mergeTreesIterative(tree1.root, tree2.root);

console.log(result)
