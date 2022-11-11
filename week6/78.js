// 78. 子集
// https://leetcode-cn.com/problems/subsets/
// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
// 输入：nums = [1,2,3]
// 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var subsets = function (nums) {
  var result = [];
  var dfs = (nums, k, path) => {
    if (k === nums.length) {
      result.push([...path]);
      return;
    }
    dfs(nums, k + 1, [...path, nums[k]]);
    dfs(nums, k + 1, [...path]);
  };

  dfs(nums, 0, []);
  return result;
};

console.time('sort')
const ss = subsets([1, 2, 3]);
console.timeEnd("sort")

// console.log("ss", ss);
