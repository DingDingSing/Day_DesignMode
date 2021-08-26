// 102. 二叉树的层序遍历
// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
// 示例：
// 二叉树：[3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层序遍历结果：
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

// 广度优先遍历

var levelOrder = function (root) {
  if (root == null) return [];
  let list = [];
  let result = [];
  list.push(root);
  while (list.length) {
    // 记录当前层要处理几个节点
    const index = list.length;
    result.push([]);
    for (let i = 0; i < index; i++) {
      const node = list.shift();
      result[result.length - 1].push(node.val);
      node.left && list.push(node.left);
      node.right && list.push(node.right);
    }
  }
  return result;
};