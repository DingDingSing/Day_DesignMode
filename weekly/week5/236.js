/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// TODO: 236. 二叉树的最近公共祖先
// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// let lca = null;
// var lowestCommonAncestor = function (root, p, q) {
//   dfs(root, p, q);
//   return lca;
// };

// const dfs = (root, p, q) => {
//   if (root == null) return 0;
//   const left = dfs(root.left, p, q);
//   //   if (lca !== null) return 2;
//   const right = dfs(root.right, p, q);
//   //   if (lca !== null) return 2;
//   let count = 0;
//   if (root == p || root == q) {
//     count = 1;
//   }
//   if (count == 0 && left == 1 && right == 1) {
//     lca = root;
//   }
//   if (count == 1 && (left == 1 || right == 1)) {
//     lca = root;
//   }
//   return left + right + count;
// };

var lowestCommonAncestor = function (root, p, q) {
  if (root == null) return null;
  if (root == p || root == q) return root;
  let lca = null;
  const dfs = (root, p, q) => {
    if (root == null) return false;
    // 根节点是不是 p q节点
    let current = root == p || root == q;
    // 左子树是否存在 p/q
    let left = dfs(root.left, p.q);
    // 右子树是否存在 p/q
    let right = dfs(root.right, p, q);
    // 求解最近祖先的情况
    // 根节点 是 P/Q , 左子树、右子树任意存在P/Q 当前节点就是公共祖先
    // 根节点不是 P/Q ，那么左子树、右子树 同时存在 PQ
    if ((current && (left || right)) || (left && right)) {
      lca = root;
    }
    return current || left || right;
  };
  dfs(root, p, q);
  return lca;
};
