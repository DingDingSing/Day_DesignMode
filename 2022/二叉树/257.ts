function binaryTreePaths(root: TreeNode | null): string[] {
  const result: string[] = [];

  const dfs = (root: TreeNode | null, path) => {
    if (root == null) {
      return;
    }
    if (root.left === null && root.right === null) {
      result.push(path);
      return;
    }
    // 决策
    path = path === "" ? root.val + "" : path + "->" + root.val;
    dfs(root.left, path);
    dfs(root.right, path);
  };

  dfs(root, "");

  return result;
}
