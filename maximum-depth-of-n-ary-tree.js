// 559. Maximum Depth of N-ary Tree

// Given a n-ary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).



// Example 1:



// Input: root = [1,null,3,2,4,null,5,6]
// Output: 3
// Example 2:



// Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Output: 5


// Constraints:

// The depth of the n-ary tree is less than or equal to 1000.
// The total number of nodes is between [0, 104].

// my solution (kinda BFS)
var maxDepth = function(root) {
  let stack = [];

  if (!root) return 0;
  stack.push(root);

  let depth = 0;
  let maxDepth = depth;
  while (stack.length) {
      let subStack = [];
      while(stack.length) {
          subStack.push(stack.pop())
      }
      if (subStack.length) {
          depth++;
          if (depth > maxDepth) maxDepth = depth;
          while (subStack.length) {
              let fromSubstack = subStack.pop();
              for (let i = 0; i < fromSubstack.children.length; i++) {
                  stack.push(fromSubstack.children[i]);
              }
          }
      }
  }

  return maxDepth;
};

// a better BFS solution
var maxDepthBFS = function(root) {
    if (!root) return 0;
    let depth = 0;
    let queue = [];
    queue.push(root);

    while (queue.length) {
        let queueSize = queue.length;
        for (let i = 0; i < queueSize; i++) {
            let node = queue.shift();
            queue.concat(node.children);
        }
        depth++;
    }

    return depth;
}

// recursive solution
var maxDepthRecursive = function(root) {
    if (!root) return 0;

    let max = 0;
    for (let child of root.children) {
        max = Math.max(max, maxDepthRecursive(child));
    }

    return max + 1;
}

// DFS solution
var maxDepthDFS = function(root) {
    if (!root) return 0;

    let max = 0;

    let dfs = (node, level = 1) => {
        if (!node.children.length) {
            max = Math.max(level, max);
            return
        }

        for (let child of node.children) {
            dfs(child, level + 1);
        }
    }

    dfs(root);
    return max;
}
