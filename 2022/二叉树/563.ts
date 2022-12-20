// 563. 二叉树的坡度
// https://leetcode.cn/problems/binary-tree-tilt/
// 思路: dfs 返回子树的累加之和，使用 ABS 进行差值计算，并进行结果累加
function findTilt(root: TreeNode | null): number {
  let result = 0;
  const dfs = (root: TreeNode | null) => {
    if (root === null) return 0;

    const left: number = dfs(root.left);
    const right: number = dfs(root.right);

    const abs = Math.abs(left - right);
    result += abs;
    // 返回子树累加之和
    return root.val + left + right;
  };
  dfs(root);
  return result;
}
