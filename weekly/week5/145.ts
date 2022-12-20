// 后序遍历

const postorderTraversal = (root: TreeNode | null): number[] => {
  if (root == null) return [];
  let list: number[] = [];
  postorder_r(root, list);
  return list;
};

const postorder_r = (root: TreeNode | null, list: number[]) => {
  if (root == null) return;
  postorder_r(root.left, list);
  postorder_r(root.right, list);
  list.push(root.val);
  return list;
};
