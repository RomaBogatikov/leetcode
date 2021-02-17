// 108. Convert Sorted Array to Binary Search Tree
// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:

// Given the sorted array: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var sortedArrayToBST = function(nums, left = 0, right = nums.length - 1) {
  if (left > right) return null;
  let midPoint = Math.floor(left + (right - left) / 2);
  
  let node = new TreeNode(nums[midPoint]);
  node.left = sortedArrayToBST(nums, left, midPoint - 1);
  node.right = sortedArrayToBST(nums, midPoint + 1, right);
  return node;
};

let arr = [-10, -3, 0, 5, 9]
let result = sortedArrayToBST(arr)
console.log(result)