// 110. Balanced Binary Tree

// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

// my soluiton
var isBalanced = function(root) {
    const traverse = (node, level) => {
        if (!node.left && !node.right) return level;
        let leftDepth = level;
        let rightDepth = level;
        if (node.left) {
            leftDepth = traverse(node.left, level + 1);
        }
        if (node.right) {
            rightDepth = traverse(node.right, level + 1);
        }
        if (Math.abs(leftDepth - rightDepth) > 1) flag = false;
        return Math.max(leftDepth, rightDepth);
    }
    if (!root) return true;
    let flag = true;
    traverse(root, 1)
    return flag;
};

// a better and cleaner bottom-up approach
var isBalanced = function(root) {
    const traverse = (node) => {
        if (!node) return 0;
        let left = traverse(node.left);
        let right = traverse(node.right);

        if (Math.abs(left - right) > 1 || left === -1 || right === -1) {
            return -1;
        }

        return 1 + Math.max(left, right);
    }

    return traverse(root) !== -1
}