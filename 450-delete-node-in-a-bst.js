/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */

// my solution
 var deleteNode = function(root, key, parentNode = null, parentNodeDirection = null) {
  let currentNode = root;
  while(currentNode !== null && key !== currentNode.val) {
      parentNode = currentNode;
      if (key > currentNode.val) {
          currentNode = currentNode.right;
          parentNodeDirection = 'right';
      } else {
          currentNode = currentNode.left;
          parentNodeDirection = 'left';
      }
  }
//     if key is not found, return root
  if (currentNode === null) return root;

//     if currentNode is the leaf, delete it
  if (currentNode.left === null && currentNode.right === null) {
      if (parentNode === null) return null;
      parentNode[parentNodeDirection] = null;
      // return root;
  } else if (currentNode.left === null || currentNode.right === null) {
// if currentNode has only one child, copy the child to the node and delete the child
      if (currentNode.left === null) {
          if (parentNode === null) {
              currentNode.val = currentNode.right.val;
              currentNode.right = null
          } else {
              parentNode[parentNodeDirection] = currentNode.right;
          }
      } else {
          if (parentNode === null) {
              currentNode.val = currentNode.left.val;
              currentNode.left = null;
          } else {
              parentNode[parentNodeDirection] = currentNode.left;
          }
      }
  } else {
// if currentNode has 2 children
//     find inorder successor of the node
      let parentInOrder = currentNode;
      let parentInOrderDirection = 'right';
      let inOrderSuc = currentNode.right;
      while(inOrderSuc.left) {
          parentInOrder = inOrderSuc;
          inOrderSuc = inOrderSuc.left;
          parentInOrderDirection = 'left';
      }
  //     copy contents of inorder successor to currentNode and delete inorder successor
      currentNode.val = inOrderSuc.val;
      // parentInOrder[parentInOrderDirection] = inOrderSuc.right;
      deleteNode(inOrderSuc, inOrderSuc.val, parentInOrder, parentInOrderDirection)
  }

  return root;
};
