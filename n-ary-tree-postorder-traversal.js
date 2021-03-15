// 590. N-ary Tree Postorder Traversal

// Given the root of an n-ary tree, return the postorder traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)



// Example 1:


// Input: root = [1,null,3,2,4,null,5,6]
// Output: [5,6,3,2,4,1]
// Example 2:


// Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Output: [2,6,14,11,7,3,12,8,4,13,9,10,5,1]


// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// 0 <= Node.val <= 104
// The height of the n-ary tree is less than or equal to 1000.


// Follow up: Recursive solution is trivial, could you do it iteratively?

var postorder = function(root) {
  let helper = (node, result) => {
      if (!node.children) {
          return result.push(node.val);
      }

      for (let i = 0; i < node.children.length; i++) {
          helper(node.children[i], result)
      }
      result.push(node.val);
  }

  let result = [];
  if (!root) return result;
  helper(root, result);
  return result;
};

var postorderIterative = function(root) {
    let stack1 = [];
    let stack2 = [];
    let result = [];

    if (!root) return result;
    stack1.push(root);
    while (stack1.length) {
        let nodeFromStack = stack1.pop();
        stack2.push(nodeFromStack);

        let nodeFromStackChildrenLength = nodeFromStack.children.length;
        if (nodeFromStackChildrenLength) {
            for (let i = 0; i < nodeFromStackChildrenLength; i++) {
                stack1.push(nodeFromStack.children[i]);
            }
        }
    }

    while (stack2.length) {
        result.push(stack2.pop().val);
    }

    return result;
}
