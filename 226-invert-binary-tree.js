// 226. Invert Binary Tree

// Given the root of a binary tree, invert the tree, and return its root.

var invertTreeQueue = function(root) {
    if (!root) return root;
    let queue = [root];
    
    while (queue.length) {
        let fromQueue = queue.shift();
        let temp = fromQueue.left;
        fromQueue.left = fromQueue.right;
        fromQueue.right = temp;
        if (fromQueue.left) queue.push(fromQueue.left);
        if (fromQueue.right) queue.push(fromQueue.right);
    }
    
    return root;
};

var invertTreeStack = function(root) {
  if (!root) return root;
  let stack = [root];
  
  while (stack.length) {
      let fromStack = stack.pop();
      let temp = fromStack.left;
      fromStack.left = fromStack.right;
      fromStack.right = temp;
      if (fromStack.left) stack.push(fromStack.left);
      if (fromStack.right) stack.push(fromStack.right);
  }
  
  return root;
};


var invertTreeRecursive1 = function(root) {
  if (!root) return null;
  
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  
  invertTree(root.left);
  invertTree(root.right);
  
  return root;
};

var invertTreeRecursive2 = function(root) {
  if (!root) return null;

  let left = invertTreeRecursive2(root.left);
  let right = invertTreeRecursive2(root.right);

  root.left = right;
  root.right = left;

  return root;
}
