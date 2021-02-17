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

let tree1 = new BinaryTree();
let tree2 = new BinaryTree();

tree1.root = new TreeNode(1);
tree1.root.left = new TreeNode(3);
tree1.root.right = new TreeNode(2);
tree1.root.left.left = new TreeNode(5);

tree2.root = new TreeNode(2);
tree2.root.left = new TreeNode(1);
tree2.root.right = new TreeNode(3);
tree2.root.left.right = new TreeNode(4);
tree2.root.right.right = new TreeNode(7);

var mergeTrees = function(root1, root2) {
    const merge = (node1, node2) => {

    }
    let current1 = root1;
    let current2 = root2;




};

let result = mergeTrees(tree1.root, tree2.root);
