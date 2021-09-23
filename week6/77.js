// 77. 组合
// https://leetcode-cn.com/problems/combinations/
// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
// 你可以按 任何顺序 返回答案。
// 输入：n = 4, k = 2
// 输出：
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = [];
  const backTrack = (c, nums, k, path) => {
    // 剪枝 排除不适合条件
    if (path.length + (nums - c + 1) < k) {
      return;
    }
    // 决策退出条件
    if (k === path.length) {
      result.push(path);
      return;
    }
    // 决策
    // 放入
    backTrack(c + 1, n, k, [...path, c]);
    // 不放入
    backTrack(c + 1, n, k, [...path]);
  };
  backTrack(1, n, k, []);
  return result;
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = [];
  let path = [];
  const backTrack = (c, nums, k, path) => {
    // 剪枝 排除不适合条件
    if (path.length + (nums - c + 1) < k) {
      return;
    }
    // 决策退出条件
    if (k === path.length) {
      result.push([...path]);
      return;
    }
    // 决策
    // 放入
    path.push(c);
    backTrack(c + 1, n, k, path);
    // 不放入
    path.pop();
    backTrack(c + 1, n, k, path);
  };
  backTrack(1, n, k, path);
  return result;
};
