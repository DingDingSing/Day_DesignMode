// dfs +
function findTarget(root: TreeNode | null, k: number): boolean {
  const nums = new Set();
  const dfs = (root: TreeNode | null): boolean => {
    if (root === null) return false;
    if (nums.has(k - root.val)) return true;
    nums.add(root.val);
    const left: boolean = dfs(root.left);
    const right: boolean = dfs(root.right);
    return left || right;
  };
  return dfs(root);
}

// 中序遍历 + 双指针
function _findTarget(root: TreeNode | null, k: number) {
  const nums: number[] = [];
  const dfs = (root: TreeNode | null) => {
    if (root === null) return;
    dfs(root.left);
    nums.push(root.val);
    dfs(root.right);
  };
  dfs(root);

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] + nums[right] === k) {
      return true;
    }

    if (nums[left] + nums[right] < k) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}
