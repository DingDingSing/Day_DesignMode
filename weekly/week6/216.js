// 216. 组合总和 III
// 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。

// 说明：

// 所有数字都是正整数。
// 解集不能包含重复的组合。

// 输入: k = 3, n = 7
// 输出: [[1,2,4]]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/combination-sum-iii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let result = [];
  const backTrack = (c, nums, k, total, path) => {
    // 剪枝 排除不适合条件
    if (path.length + (nums - c + 1) < k || path.length > k) {
      return;
    }

    // 决策退出条件
    if (total === n && path.length === k) {
      result.push([...path]);
      return;
    }

    // 决策
    // 放入
    // 不放入
    backTrack(c + 1, 9, k, total, [...path]);
    // if (total < n) {
    backTrack(c + 1, 9, k, total + c, [...path, c]);
    // }
  };
  backTrack(1, 9, k, 0, []);
  return result;
};

const aa = combinationSum3(2, 18);

console.log("aa", aa);
