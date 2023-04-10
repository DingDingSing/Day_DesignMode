// 39. 组合总和
function combinationSum(candidates: number[], target: number): number[][] {
  // 定义返回结果

  const result: number[][] = [];

  candidates.sort((a, b) => a - b);

  // 回溯函数

  const dfs = (
    candidates: number[],
    k: number,
    path: number[],
    total: number
  ) => {
    // candidates: number[] 可选列表
    // k 决策阶段 下标
    // path 路径
    // total 结果总数

    // 决策退出条件
    // 1  全部数据都使用完毕
    if (k === candidates.length) {
      return;
    }

    // 2. 当前总和满足目标
    if (total === target) {
      result.push(path);
      return;
    }

    // 决策
    // 放

    if (total < target) {
      dfs(candidates, k, [...path, candidates[k]], total + candidates[k]);
    }

    // 不放
    dfs(candidates, k + 1, [...path], total);
  };

  dfs(candidates, 0, [], 0);

  return result;
}
