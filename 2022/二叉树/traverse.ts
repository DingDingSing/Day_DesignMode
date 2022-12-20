// import { TreeNode } from "../list";

// 遍历
// 需要一个外部变量记录

let result: any;
function wrapper(node: TreeNode | null) {
  traverse(node);
  return result;
}
function traverse(node: TreeNode | null) {
  if (node == null) {
    return;
  }
  // 对 result 进行操作
  traverse(node.left);
  traverse(node.right);
}

// 递归

function _traverse(root: TreeNode | null) {
  if (root === null) return null;
  // 对 root 进行操作
  const left = _traverse(root.left);
  const right = _traverse(root.right);
  return root;
}
