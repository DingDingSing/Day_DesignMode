// 80 删除有序数组中的重复项贰
// https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/?envType=study-plan-v2&envId=top-interview-150

function removeDuplicates(nums: number[]): number {
  const k = 2;
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

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

removeDuplicates(nums);

console.log("nums", nums);
