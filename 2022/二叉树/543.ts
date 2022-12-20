function diameterOfBinaryTree(root: TreeNode | null): number {
  let max = 0;
  function dfs(root: TreeNode | null): number {
    // 递归退出条件
    // 当节点为null 时此时的深度为0
    if (root === null) return 0;
    // 二叉树的遍历
    const left = dfs(root.left);
    const right = dfs(root.right);
    // 数据处理
    // 判断是否更新最大深度
    const t = left + right;
    if (t > max) max = t;
    return Math.max(left, right) + 1;
  }
  dfs(root);
  return max;
}
