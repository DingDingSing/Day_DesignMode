function averageOfLevels(root: TreeNode | null): number[] {
  const column = [root];
  const result: any[] = [];

  while (column.length) {
    result.push([]);
    for (let i = 0; i < column.length; i++) {
      const node = column.shift();
      result[result.length - 1].push(node!.val);
      node!.left && column.push(node!.left);
      node!.right && column.push(node!.right);
    }
  }

  return result;
}
