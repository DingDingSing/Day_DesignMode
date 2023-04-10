// 78. 子集
function _subsets(nums: number[]): number[][] {
  const result: number[][] = [];

  const dfs = (nums: number[],k: number, path: number[]) => {
    // 子集的退出条件
    result.push([...path]);

    for (let i = k; i < nums.length; i++) {
      path.push(nums[i]);
      dfs(i + 1, [...path]);
      path.pop();
    }
  };

  dfs(0, []);

  return result;
}

const _ss = _subsets([1, 2, 3]);

console.log("ss", _ss);
