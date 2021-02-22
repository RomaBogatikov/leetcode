// 98. Validate Binary Search Tree

// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

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

// tree1.root = new TreeNode(2);
// tree1.root.left = new TreeNode(1);

// tree1.root.right = new TreeNode(3);

tree1.root = new TreeNode(1);
tree1.root.left = new TreeNode(1);
// tree1.root.right = new TreeNode(3);
// tree1.root.left.left = new TreeNode(19);
// tree1.root.left.left.right = new TreeNode(27);
// tree1.root.right = new TreeNode(47);
// tree1.root.right.right = new TreeNode(56);


// var isValidBST = function(root) {
//   let validateNode = (node) => {
//       if (node.left || node.right) {
//           if (node.left && (node.left.val >= node.val)
//               || node.left && node.val > root.val && node.left.val < root.val) {
//             return false;
//           }

//           if (node.right && (node.right.val <= node.val)
//              || node.right && (node.val < root.val) && (node.right.val > root.val)) {
//             return false
//           }
//       }
//       return true;
//   }
//   let traverseAndValidate = (node) => {
//       if (!node) return true;
//       if (node.left) traverseAndValidate(node.left);
//       if (node.right) traverseAndValidate(node.right);
//       return validateNode(node);
//   }


//   if (!root) return null;
//   let leftBST = isValidBST(root.left);
//   let rightBST = isValidBST(root.right);

//   let validLeft = traverseAndValidate(leftBST)
//   let validRight = traverseAndValidate(rightBST);

//   if (validLeft && validRight) {
//     return root;
//   } else {
//     return false
//   }
// };


var isValidBST = function(root) {
  let validateNode = (node, leftOrRight) => {
      if (node.left || node.right) {
          if (leftOrRight === 'left' && node.val >= root.val) {
            // isvalid = false;
            return false;
          }
          if (leftOrRight === 'right' && node.val <= root.val) {
            // isValid = false;
            return false;
          }
          if (node.left && (node.left.val >= node.val)
              || node.left && (node !== root) && node.val >= root.val && node.left.val <= root.val) {
            // isValid = false;
            return false;
          }
          console.log(node)
          if (node.right && (node.right.val <= node.val)
             || node.right && (node !== root) && (node.val <= root.val) && (node.right.val >= root.val)) {
            // isValid = false
            return false
          }
      }
      return true;
  }
  let traverseAndValidate = (node, leftOrRight) => {
      if (node === null) return true;
      if (node.left) traverseAndValidate(node.left, leftOrRight);
      if (node.right) traverseAndValidate(node.right, leftOrRight);
      return validateNode(node, leftOrRight);
  }

  // let isValid = true;

  let leftBST = traverseAndValidate(root.left, 'left');
  let rightBST = traverseAndValidate(root.right, 'right')

  return leftBST && rightBST && validateNode(root)
};

let result = isValidBST(tree1.root);
console.log(result);
