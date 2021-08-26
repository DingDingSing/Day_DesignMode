// 前序遍历
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const preorderTraversal = (root: TreeNode | null): number[] => {
  if (root == null) return [];
  let list: number[] = [];
  preorder_r(root, list);
  return list;
};

const preorder_r = (root: TreeNode | null, list: number[]) => {
  if (root == null) return;
  list.push(root.val);
  
  preorder_r(root.left, list);
  preorder_r(root.right, list);
  return list;
};
