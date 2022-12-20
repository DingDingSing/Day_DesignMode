// 找出数组中重复的数字。
// 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
// 输入：
// [2, 3, 1, 0, 2, 5, 3]
// 输出：2 或 3

// 不是最优解

// const findRepeatNumber = (nums: number[]): number => {
//   const temp: number[] = [];
//   let tempVal: number = temp[0];
//   for (let item of nums) {
//     if (temp.includes(item)) {
//       tempVal = item;
//       break;
//     }
//     temp.push(item);
//   }
//   return tempVal;
// };

// 优解 原地交换

/**
 * @description 原地交换
 * @param nums
 * @returns number | null
 */

// const findRepeatNumber = (nums: number[]): number | null => {
//   for (let i = 0; i < nums.length; i++) {
//     while (nums[i] != i) {
//       if (nums[i] == nums[nums[i]]) {
//         return nums[i];
//       }
//       const temp = nums[i];
//       [nums[i], nums[temp]] = [nums[temp], nums[i]];
//     }
//   }
//   return null;
// };

// 优解

const findRepeatNumber = (nums: number[]): number | undefined => {
  const temp = new Set();
  for (let item of nums) {
    if (temp.has(item)) return item;
    temp.add(item);
  }
};

// const cc = findRepeatNumber([2, 3, 1, 0, 2, 5, 3]);

// console.log("cc", cc);
