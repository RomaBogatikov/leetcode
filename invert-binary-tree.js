// 226. Invert Binary Tree

var invertTree = function(root) {
  let helper = (node) => {
      if (!node) {
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
var invertTree = function(root) {
  if (!root) {
    return null;
  }

  let left = invertTree(root.left);
  let right = invertTree(root.right);
  root.left = right;
  root.right = left;

  return root;
};
