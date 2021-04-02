// 637. Average of Levels in Binary Tree

// Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.


// Example 1:


// Input: root = [3,9,20,null,15,7]
// Output: [3.00000,14.50000,11.00000]
// Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
// Hence return [3, 14.5, 11].
// Example 2:


// Input: root = [3,9,20,15,7]
// Output: [3.00000,14.50000,11.00000]


// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1

var averageOfLevelsBFS = function(root) {
  let queue = [root];
  let result = [];
  while (queue.length) {
      let numsAtLevel = queue.length;
      let sumOfNumsAtLevel = 0;
      for (let i = 0; i < numsAtLevel; i++) {
          let fromQueue = queue.shift();
          sumOfNumsAtLevel += fromQueue.val;
          if (fromQueue.left) queue.push(fromQueue.left);
          if (fromQueue.right) queue.push(fromQueue.right);
      }
      result.push(sumOfNumsAtLevel / numsAtLevel)
  }

  return result;
};

var averageOFLevelsDFS = function(root) {
  const sum = [];
  const count = [];
  const traverse = (node, level) => {
    if (sum[level] === undefined) sum[level] = 0;
    if (count[level] === undefined) count[level] = 0;
    sum[level] += node.val;
    count[level]++;
    if (node.left) traverse(node.left, level + 1);
    if (node.right) traverse(node.right, level + 1);
  }

  traverse(root, 0);

  for (let i = 0; i < sum.length; i++) {
    sum[i] = sum[i] / count[i]
  }

  return sum
}
