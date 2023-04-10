// 46. 全排列

// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

// 示例 1：
// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// [1][2][3][12][13][23][123]



















// 


// 可选列表 决策阶段 路径

// 退出条件

// for 选择 in 选择列表

// 做决策

// dfs

// 取消决策


function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  const used = new Set();

  const dfs = (nums: number[], k: number, path: number[]) => {
    // 退出条件
    if (k === nums.length) {
      result.push(path);
      return;
    }

    // 决策阶段
    //  for 选择 in 选择列表
    for (let i = 0; i < nums.length; i++) {
      // 已经使用则跳过
      if (path.includes(nums[i])) continue;
      // 做决策
      used.add(nums[i]);
      dfs(nums, k + 1, [...path, nums[i]]);
      // 取消决策
      used.delete(nums[i]);
    }
  };

  dfs(nums, 0, []);

  return result;
}

// const ps = permute([1, 2, 3]);

// console.log("ps", ps);

// var permute = function (nums) {
//   const result = []
//   const dfs = (nums, k, path) => {
//       // 退出条件
//       if (k === nums.length) {
//           result.push(path)
//           return
//       }

//       for (let i = 0; i < nums.length; i++) {
//           if (path.includes(nums[i])) {}
//           dfs(nums, k + 1, [...path, nums[i]])
//       }
//   };
//   dfs(nums, 0, [])
//   return result
// };







const board = (m: number, n: number) => {

  const result: number[][] = [];

  const dfs = (i: number, j: number, path: number[]) => {
    // 决策退出条件
    if (i === m && j === n) {
      result.push(path);
      return;
    }

    // 决策阶段
    if (i < m) {
      dfs(i + 1, j, [...path, i + 1]);
    }

    if (j < n) {
      dfs(i, j + 1, [...path, j + 1]);
    }
  };

  dfs(1, 1, []);
  return result.length;
};

const iboard = board(3, 7);

console.log("i", iboard);
