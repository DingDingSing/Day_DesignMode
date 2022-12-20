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
  return result[result.length - 1][0];
};
