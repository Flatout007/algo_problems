/** 
@name Binary Tree.

@description @namespace {
    In computer science, a binary tree is a 
    tree data structure in which each node has 
    at most two children, which are referred 
    to as the left child and the right child.

    Please do not get confused between a binary 
    tree and a binary search tree.
}

@credits {
    https://computersciencewiki.org/index.php/Binary_tree
}
*/

// Node prototype for binary tree.

function Node() {
  this.data = null;
  this.left = null;
  this.right = null;
}

/**
 * @function createTree();
 *
 * @algorithm {
 *  1.ALLOCATE memory for a new Node;
 *
 *  2.SET & ask user input for node data;
 *
 *  3.RECURSIVELY add left, right to tree;
 * }
 */
Node.createTree = function () {
  let newNode = new Node();

  var val = prompt("enter number greater than -1");

  if (val < 0) return null;
  newNode.data = val;
  alert("enter left child of `${val}`");
  newNode.left = Node.createTree();
  alert("enter right child of `${val}`");
  newNode.right = Node.createTree();

  return newNode;
};

/**
 * @function inOrder(root->Node);
 *
 * @algorithm {
 *   1.IF root equals null return to recursive call;
 *
 *   2.RECURSIVELY get left, root, then right;
 * }
 */
Node.inOrder = function (root) {
  if (root === null) return;
  Node.inOrder(root.left);
  console.log(root.data);
  Node.inOrder(root.right);
};
/**
 * @function preOrder(root->Node);
 *
 * @algorithm {
 *   1.IF root equals null return to recursive call;
 *
 *   2.RECURSIVELY get root, left, then right;
 * }
 */
Node.preOrder = function (root) {
  if (root === null) return;
  console.log(root.data);
  Node.preOrder(root.left);
  Node.preOrder(root.right);
};

/**
 * @function postOrder(root->Node);
 *
 * @algorithm {
 *   1.IF root equals null return to recursive call;
 *
 *   2.RECURSIVELY get left, right, then root;
 * }
 */
Node.postOrder = function (root) {
  if (root === null) return;
  console.log(root.data);
  Node.postOrder(root.left);
  Node.postOrder(root.right);
};

const init = function () {
  const root = Node.createTree();
  console.log(root);
  Node.inOrder(root);
};
init();
