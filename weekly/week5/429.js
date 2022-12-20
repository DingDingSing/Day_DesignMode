/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const queen = [];
  const result = [];
  queen.push(root);

  while (queen.length) {
    const temp = [];
    const len = queen.length;

    for (let i = 0; i < len; i++) {
      const node = queen.shift();
      temp.push(node.val);
      for (let i = 0; i < node.children.length; i++) {
        queen.push(node.children[i]);
      }
    }
    result.push(temp);
  }
  return result;
};
