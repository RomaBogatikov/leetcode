// 589. N-ary Tree Preorder Traversal
// Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)



// Example 1:



// Input: root = [1,null,3,2,4,null,5,6]
// Output: [1,3,5,6,2,4]
// Example 2:



// Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]


// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// 0 <= Node.val <= 104
// The height of the n-ary tree is less than or equal to 1000.


// Follow up: Recursive solution is trivial, could you do it iteratively?

var preorder = function(root) {
  let queue = [root];
  let result = [];
  if (!root) return [];

  if (root.children) {
      for (let i = 0; i < root.children.length; i++) {
          queue.push(root.children[i]);
      }
  } else {
      return [root.val];
  }

  result.push(queue.shift().val);

  while (queue.length) {
      let fromQueue = queue.shift();
      result.push(fromQueue.val);
      let queue2 = [];
      if (fromQueue.children) {
          for (let i = 0; i < fromQueue.children.length; i++) {
              queue2.push(fromQueue.children[i]);
          }
      }

      while(queue2.length) {
          let fromQueue2 = queue2.shift();
          result.push(fromQueue2.val);
          if (fromQueue2.children) {
              for (let i = 2; i < fromQueue2.children.length; i++) {
                  queue2.push(fromQueue2.children[i]);
              }
          }
      }
  }

  return result;
}
