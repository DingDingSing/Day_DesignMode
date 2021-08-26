//589. N 叉树的前序遍历

class Node {
  val: number;
  children: Node[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

const preorder = (root: Node | null): number[] => {
  if (root == null) return [];
  let list: number[] = [];
  list.push(root.val);
  preorder_r(root, list);
  return list;
};

const preorder_r = (root: Node | null, list: number[]): number[] => {
  if (root == null) return;
  root.children.forEach((child) => {
    list.push(child.val);
    preorder_r(child, list);
  });
  return list;
};
