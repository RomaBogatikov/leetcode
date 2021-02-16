// 104. Maximum Depth of Binary Tree

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

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

  fromArray(array) {

  }

  insert(val) {
    let newNode = new TreeNode(val);

    if (!this.root) {
      this.root = newNode;
      return this.root;
    }

    let current = this.root;

    while (current) {
      if (!current.left) {
        current.left = newNode;
        return this.root;
      }
      else if (!current.right) {
        current.right = newNode;
        return this.root;
      }
      else if (current.left) {
        current = current.left;
      }
      else if (current.right) {
        current = current.right;
      }
    }

    // while (current) {
    //   if (current.left && newNode.val < current.val) {
    //     current = current.left;
    //   } else if (current.right && newNode.val > current.val) {
    //     current = current.right;
    //   } else if (!current.left && newNode.val < current.val) {
    //     current.left = newNode;
    //     return this.root;
    //   } else if (!current.right && newNode.val > current.val) {
    //     current.right = newNode;
    //     return this.root;
    //   }
    // }

  }
}

let tree = new BinaryTree();

const dfsInOrder = (root) => {
  const traverse = (node) => {
    if (node.left) {
      traverse(node.left);
    }
    if (node === root) result.push('root')
    result.push(node.val);
    if (node.right) {
      traverse(node.right)
    }
  }

  let result = [];
  traverse(root);
  return result;
}

var maxDepthIterative = function(root) {
  let queue = [root];

  let depth = 0;
  while (queue.length) {
    depth++;
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      if (queue[i].left) queue.push(queue[i].left)
      if (queue[i].right) queue.push(queue[i].right)
    }

    for (let i = 0; i < len; i++) {
      queue.shift();
    }
  }
  return depth;
};

var maxDepthRecursive = function(root) {
  if (!root) return 0;

  let leftDepth = maxDepthRecursive(root.left);
  let rightDepth = maxDepthRecursive(root.right);

  return Math.max(leftDepth, rightDepth) + 1;

  // return Math.max(maxDepthRecursive(root.left), maxDepthRecursive(root.right)) + 1
}

tree.insert(3)
tree.insert(9)
tree.insert(20)
tree.insert(15)
tree.insert(7)

let result = maxDepthRecursive(tree.root);
console.log(result)

// const maxDepth =
