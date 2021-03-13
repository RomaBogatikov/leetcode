// 226. Invert Binary Tree

var invertTree = function(root) {
  let helper = (node) => {
      if (!node || (!node.left && !node.right)) {
          return;
      }
      let temp = node.left;
      node.left = node.right;
      node.right = temp;

      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
  }

  helper(root);
  return root;
};
