function combine(n: number, k: number): number[][] {
  const result: number[][] = [];

  const dfs = (s: number, path: number[]) => {
    // 退出条件
    if (k === path.length) {
      result.push([...path]);
      return;
    }

    for (let i = s; i <= n; i++) {
      path.push(i);
      dfs(i + 1, [...path]);
      path.pop();
    }
  };

  dfs(1, []);

  return result;
}

const cc = combine(4, 2);

console.log("cc", cc);
