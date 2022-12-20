// 530 二叉搜索树的最小绝对差
// https://leetcode.cn/problems/minimum-absolute-difference-in-bst/description/
// 思路: 使用中序遍历获得顺序遍历结果、将上一个节点进行保存，并在下一次遍历中进行比较绝对值的最小值
function getMinimumDifference(root: TreeNode | null): number {
  // 上一个节点值
  let pre = -1;
  // 返回值
  let result = Number.MAX_SAFE_INTEGER;
  const dfs = (root: TreeNode | null) => {
    if (root === null) return;
    dfs(root.left);
    // 首次更新上一个节点值
    if (pre === -1) {
      pre = root.val;
    } else {
      // 之后根据当前root 与 上次节点值 进行相减取绝对值
      const abs = Math.abs(pre - root.val);
      // 更新结果
      result = Math.min(result, abs);
      // 更新上一个节点值
      pre = root.val;
    }
    dfs(root.right);
  };
  dfs(root);
  return result;
}
