// 镜像二叉树
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
var isSymmetric = function (root) {
  if (root === null) return false;
  return dfs(root.left, root.right);
};

var dfs = (root1, root2) => {
  if (root1 == null && root2 == null) return true;
  if (root1 == null || root2 == null) return false;
  if (root1.val !== root2.val) {
    return false;
  }
  return dfs(root1.left, root2.right) && dfs(root1.right, root2.left);
};
