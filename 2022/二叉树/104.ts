// https://leetcode.cn/problems/maximum-depth-of-binary-tree/
// 104. 二叉树的最大深度

function _maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  const left = _maxDepth(root.left);

  const right = _maxDepth(root.right);

  console.log("left", left);
  console.log("right", right);

  return Math.max(left, right) + 1;
}
