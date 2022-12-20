/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  const arr = [];
  const inOrder = (root) => {
    if (root === null) return null;
    inOrder(root.left);
    arr.push(root.val);
    inOrder(root.right);
  };
  return arr[arr.length - k];
};
