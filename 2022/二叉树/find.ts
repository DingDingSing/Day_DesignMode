// 二叉查找树

function find(root: TreeNode | null, node: any): any {
  if (root == null) return null;
  if (root.val === node) return root;
  // 当前节点大于查找值、向左侧查找
  if (root.val > node) return find(node.left, node);
  // 当前节点小查找值 向右侧查找
  if (root.val < node) return find(node.right, node);
}
