/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = (root) => {
  let isBalance = true;
  const height = (root) => {
    if (root === null) return 0;
    if (isBalance === false) return 0;

    const left = height(root.left);
    const right = height(root.right);

    if (Math.abs(left - right) > 1) {
      isBalance = false;
    }
    return Math.max(left, right) + 1;
  };
  height(root);
  return isBalance;
};

const isBalanced = (root) => {
  // 1. 设置结果集
  let result = true;

  // 3. 递归
  const recursion = (root) => {
    // 3.1 如果没有下一个节点了，返回 0
    if (root === null) {
      return 0;
    }
    if (result === false) return 0;
    // 3.2 当前层 + 1
    const left = recursion(root.left);
    const right = recursion(root.right);
    // 3.3 比较两棵树的深度
    if (Math.abs(left - right) > 1) {
      result = false;
    }
    // 3.4 返回这棵树最深的深度
    return Math.max(left, right) + 1;
  };
  // 2. 递归这棵树
  recursion(root);

  // 4. 返回结果
  return result;
};
