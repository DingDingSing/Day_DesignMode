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
 * @return {boolean}
 */
var isValidBST = function (root) {
  let pre = null;
  const inOrder = (root) => {
    if (root === null) return true;
    let left = inOrder(root.left);

    if (pre !== null && pre.val >= root.val) return false;
    pre = root;

    let right = inOrder(root.right);
    return left && right;
  };
  return inOrder(root);
};
