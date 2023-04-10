// 22. 括号生成
function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  // 可选列表 决策阶段 路径
  const dfs = (path: string[], open: number, close: number) => {
    // 满足合法条件
    if (open === 0 && close === 0) {
      result.push(path.toString().replace(/,/g, ""));
      return;
    }

    // 剪枝 左侧括号剩余量比右侧括号多则为异常情况
    if (open > close) return;

    if (open > 0) {
      dfs([...path, "("], open - 1, close);
    }

    if (close > 0) {
      dfs([...path, ")"], open, close - 1);
    }
  };

  dfs([], n, n);

  return result;
}

const gg = generateParenthesis(2);

console.log("gg", gg);
