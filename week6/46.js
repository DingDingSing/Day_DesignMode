// 46. 全排列
// https://leetcode-cn.com/problems/permutations/
// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];
  let used = [];
  nums.sort((a, b) => a - b);

  const dfs = (nums, k, path) => {
    // 可选列表
    // 决策阶段
    // 路径
    // 决策退出条件

    if (k === nums.length) {
      result.push([...path]);
      return;
    }

    // 在可选列表中做决策
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      if (nums[i] === nums[i - 1] && !used[i - 1]) {
        continue;
      }
      used[i] = true;
      dfs(nums, k + 1, [...path, nums[i]]);
      used[i] = false;
    }
  };

  dfs(nums, 0, []);
  return result;
};

const r = permute([1, 1, 2]);

console.log("r", r);
