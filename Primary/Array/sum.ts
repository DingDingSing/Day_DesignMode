// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/two-sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// const twoSum = (nums: number[], target: number): number[] => {
//   let result: number[] = [];
//   if (nums.length === 0) return result;
//   for (let i = 0; i < nums.length; i++) {
//     const temp = [...nums.slice(0, i), ...nums.slice(i + 1)];
//     console.log("temp", temp);
//     const index = temp.findIndex((item) => item === target - nums[i]);
//     if (index !== -1) {
//       result = [i, index + 1];
//       break;
//     }
//   }
//   return result;
// };

// 查找表

// const _twoSum = (nums: number[], target: number): number[] => {
//   const hashMap = new Map();

//   for (let i = 0; i < nums.length; i++){

//   }
// };

var twoSum_2 = function (nums: number[], target: number) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [i, map.get(target - nums[i])];
    }
    map.set(nums[i], i);
  }
};
