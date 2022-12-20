// 剑指 Offer 32 - I. 从上到下打印二叉树
// https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/
// 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
// 例如:
// 给定二叉树: [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回：

// [3,9,20,15,7]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 广度优先遍历

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

var levelOrder = function (root) {
  if (!root) return [];
  let queen = []; //
  let result = [];
  queen.push(root);

  while (queen.length) {
    const len = queen.length;
    let temp = [];
    for (let i = 0; i < len; i++) {
      const node = queen.shift();
      temp.push(node.val);
      node.left && queen.push(node.left);
      node.right && queen.push(node.right);
    }
    if (result.length % 2 === 1) temp = temp.reverse();
    result.push(temp);
  }
  return result;
};
