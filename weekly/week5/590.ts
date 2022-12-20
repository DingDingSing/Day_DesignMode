//590. N 叉树的后序遍历
class Node {
  val: number;
  children: Node[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

const postorder = (root: Node | null): number[] => {
  if (root == null) return [];
  let list: number[] = [];
  postorder_r(root, list);
  list.push(root.val);
  return list;
};

const postorder_r = (root: Node | null, list: number[]): number[] => {
  if (root == null) return;
  root.children.forEach((child) => {
    postorder_r(child, list);
    list.push(child.val);
  });
  return list;
};
