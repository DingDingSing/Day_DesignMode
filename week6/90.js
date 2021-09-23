// 90. 子集 II
// https://leetcode-cn.com/problems/subsets-ii/
// 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
// 输入：nums = [1,2,2]
// 输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/subsets-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);
  const dfs = (nums, k, path, choose) => {
    // nums 可选列表
    // k 决策阶段
    // path 路径
    // 退出条件
    if (k === nums.length) {
      // 判断当前是否存在已知路径
      result.push([...path]);
      return;
    }

    // 决策阶段
    // 不放入
    dfs(nums, k + 1, [...path], false);
    // 放入
    // 去重条件
    // 当前元素和上一个元素相等并且 上一个元素并没有放置到路径中
    if (nums[k] === nums[k - 1] && !choose) return;
    dfs(nums, k + 1, [...path, nums[k]], true);
  };

  dfs(nums, 0, [], false);
  return result;
};
