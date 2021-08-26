/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) return 0;
  if (root.children === null) return 1;
  let num = 0;
  for (let i = 0; i < root.children.length; i++) {
    num = Math.max(num, maxDepth(root.children[i]));
  }
  return num + 1;
};

var maxDepth = function (root) {
  if (root === null) return 0;
  if (root.children === null) return 1;
  const num = [];
  for (let i = 0; i < root.children.length; i++) {
    num.push(maxDepth(root.children[i]));
  }
  return Math.max(...num) + 1;
};
