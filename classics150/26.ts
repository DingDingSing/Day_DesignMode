// 26 删除有序数组中的重复项
// https://leetcode.cn/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @description 使用双指针进行元素对比 对于通用型的算法进行K抽象、可以看80题的2个间隔重复项删除
 * @param nums
 * @returns
 */
function removeDuplicates(nums: number[]): number {
  const k = 1;
  if (nums.length <= k) return nums.length;
  let p1 = k;
  let p2 = k;
  while (p2 < nums.length) {
    if (nums[p1 - k] !== nums[p2]) {
      nums[p1] = nums[p2];
      p1++;
    }
    p2++;
  }
  return p1;
}

let nums = [1, 1, 2];

const idx = removeDuplicates(nums);

console.log("nums", nums, idx);
