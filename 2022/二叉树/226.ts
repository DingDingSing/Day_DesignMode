function _invertTree(root: TreeNode | null): TreeNode | null {
  if (root == null) {
    return null;
  }
  const left = _invertTree(root.left);
  const right = _invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
}

function __invertTree(root: TreeNode | null): TreeNode | null {
  function traverse(root: TreeNode | null) {
    if (root === null) return;
    const left = root.left;
    root.left = root.right;
    root.right = left;
    traverse(root.left);
    traverse(root.right);
  }

  traverse(root);
  return root;
}
