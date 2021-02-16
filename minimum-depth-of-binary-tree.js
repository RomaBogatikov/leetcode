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

// var minDepthRecursive = function(root) {
//   let recurse = (node) => {
//     if (!node) return 0;

//     let leftDepth = recurse(node.left);
//     let rightDepth = recurse(node.right);

//     return Math.min(leftDepth, rightDepth) + 1;
//   }

//   if (!root) return 0;

//   let leftFromRootDepth = recurse(root.left);
//   let rightFromRootDepth = recurse(root.right);

//   if (leftFromRootDepth === 0 && rightFromRootDepth) return rightFromRootDepth + 1;
//   if (rightFromRootDepth === 0 && leftFromRootDepth) return leftFromRootDepth + 1;

//   return Math.min(leftFromRootDepth, rightFromRootDepth) + 1;
// };

var minDepthIterative = function(root) {
  let queue = root ? [root] : [];

  let depth = 0;
  while (queue.length) {
    depth++;
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      if (queue[i].left) queue.push(queue[i].left);
      if (queue[i].right) queue.push(queue[i].right);
    }

    for (let j = 0; j < len; j++) {
      if (!queue[0].left && !queue[0].right) return depth;
      queue.shift();
    }
  }
}

let tree = new BinaryTree();

// tree.root = new TreeNode(-9);
// tree.root.left = new TreeNode(-3);
// tree.root.left.right = new TreeNode(4);
// tree.root.left.right.left = new TreeNode(-6);
// tree.root.right = new TreeNode(2);
// tree.root.right.left = new TreeNode(4);
// tree.root.right.right = new TreeNode(0);
// tree.root.right.left.left = new TreeNode(-5);

tree.root = new TreeNode(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3)
tree.root.left.left = new TreeNode(4)
tree.root.right.right = new TreeNode(5);

let result = minDepthIterative(tree.root);
console.log(result)
