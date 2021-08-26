// 中序遍历

// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

const inorderTraversal = (root: TreeNode | null): number[] => {
  if (root == null) return [];
  let list: number[] = [];
  inorder_r(root, list);
  return list;
};

const inorder_r = (root: TreeNode | null, list: number[]) => {
  if (root == null) return;
  inorder_r(root.left, list);
  list.push(root.val);
  inorder_r(root.right, list);
  return list;
};
