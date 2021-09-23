// 39. 组合总和
// 给定一个无重复元素的正整数数组 candidates 和一个正整数 target ，找出 candidates 中所有可以使数字和为目标数 target 的唯一组合。

// candidates 中的数字可以无限制重复被选取。如果至少一个所选数字数量不同，则两种组合是唯一的。

// 对于给定的输入，保证和为 target 的唯一组合数少于 150 个。

// 输入: (candidates = [2, 3, 6, 7]), (target = 7);
// 输出: [[7], [2, 2, 3]];

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/combination-sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [];
  // 排序是剪枝的前提
  //   candidates.sort((a, b) => a - b);

  const dfs = (candidates, k, total, path) => {
    // 可选列表
    // k 决策阶段
    // total 当前重量
    // path 路径

    // 退出条件

    if (k === candidates.length || total > target) {
      return;
    }

    if (total === target) {
      result.push([...path]);
      return;
    }

    //决策

    // 不放入

    dfs(candidates, k + 1, total, [...path]);

    // 放入

    if (total < target) {
      // TODO: 问题在于可以重复选择一个数字 [2,2,3] = 7
      dfs(candidates, k, total + candidates[k], [...path, candidates[k]]);
    }
  };

  dfs(candidates, 0, 0, []);

  return result;
};

const aa = combinationSum([2, 3, 6, 7], 7);

console.log("aa", aa);
