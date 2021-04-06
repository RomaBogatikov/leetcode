// 654. Maximum Binary Tree

// You are given an integer array nums with no duplicates. A maximum binary tree can be built recursively from nums using the following algorithm:

// Create a root node whose value is the maximum value in nums.
// Recursively build the left subtree on the subarray prefix to the left of the maximum value.
// Recursively build the right subtree on the subarray suffix to the right of the maximum value.
// Return the maximum binary tree built from nums.



// Example 1:


// Input: nums = [3,2,1,6,0,5]
// Output: [6,3,5,null,2,0,null,null,1]
// Explanation: The recursive calls are as follow:
// - The largest value in [3,2,1,6,0,5] is 6. Left prefix is [3,2,1] and right suffix is [0,5].
//     - The largest value in [3,2,1] is 3. Left prefix is [] and right suffix is [2,1].
//         - Empty array, so no child.
//         - The largest value in [2,1] is 2. Left prefix is [] and right suffix is [1].
//             - Empty array, so no child.
//             - Only one element, so child is a node with value 1.
//     - The largest value in [0,5] is 5. Left prefix is [0] and right suffix is [].
//         - Only one element, so child is a node with value 0.
//         - Empty array, so no child.
// Example 2:


// Input: nums = [3,2,1]
// Output: [3,null,2,null,1]


// Constraints:

// 1 <= nums.length <= 1000
// 0 <= nums[i] <= 1000
// All integers in nums are unique.

// my solution helper function
var constructMaximumBinaryTree = function(nums) {
  const constructTree = (arr, parentNode, maxIndex) => {
      let leftArr = arr.slice(0, maxIndex);
      let rightArr = arr.slice(maxIndex + 1);

      if (leftArr.length) {
          let maxElement = Math.max(...leftArr);
          let maxElementIndex = leftArr.indexOf(maxElement);
          parentNode.left = new TreeNode(maxElement);
          constructTree(leftArr, parentNode.left, maxElementIndex)
      }

      if (rightArr.length) {
          let maxElement = Math.max(...rightArr);
          let maxElementIndex = rightArr.indexOf(maxElement);
          parentNode.right = new TreeNode(maxElement);
          constructTree(rightArr, parentNode.right, maxElementIndex);
      }
  }

  let maxElement = Math.max(...nums);
  let maxIndex = nums.indexOf(maxElement)
  let root = new TreeNode(maxElement);

  constructTree(nums, root, maxIndex);
  return root;
};

// my solution pure recursion
var constructMaximumBinaryTree = function(nums) {
  let maxElement = Math.max(...nums);
  let maxElementIndex = nums.indexOf(maxElement);

  let leftArr = nums.slice(0, maxElementIndex);
  let rightArr = nums.slice(maxElementIndex + 1);

  let root = new TreeNode(maxElement);

  if (leftArr.length) {
      root.left = constructMaximumBinaryTree(leftArr);
  }
  if (rightArr.length) {
      root.right = constructMaximumBinaryTree(rightArr);
  }

  return root;
};
