// 40. 组合总和 II
// 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

// candidates 中的每个数字在每个组合中只能使用一次。

// 注意：解集不能包含重复的组合。

// 输入: candidates = [10,1,2,7,6,1,5], target = 8,
// 输出:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/combination-sum-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let result = [];
  candidates.sort((a, b) => a - b);

  const dfs = (candidates, k, total, path, choose) => {
    // 优先使用这个判断条件、最后一个元素满足条件时优先执行 push path 方法
    if (total === target) {
      result.push([...path]);
      return;
    }
    if (k === candidates.length || total > target) {
      return;
    }
    // 决策
    // 不放入
    dfs(candidates, k + 1, total, [...path], false);

    // 去重 判断当前元素是否和上一个元素相同、并且上一个元素已经选择
    if (k > 0 && !choose && candidates[k] === candidates[k - 1]) {
      return;
    }

    // console.log("before path", [...path]);
    // 放入
    if (total < target) {
      dfs(
        candidates,
        k + 1,
        total + candidates[k],
        [...path, candidates[k]],
        true
      );
      //   console.log("after path", [...path, candidates[k]]);
    }
  };

  dfs(candidates, 0, 0, [], false);
  return result;
};

const aa = combinationSum2([8], 8);

console.log("aa", aa);
