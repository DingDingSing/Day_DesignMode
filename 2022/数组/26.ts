// 26. 删除有序数组中的重复项
// https://leetcode.cn/problems/remove-duplicates-from-sorted-array/

function _removeDuplicates(nums: number[]): number {
  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    // [1,1,2] => [1,2,1]
    // 不相等则进行替换
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return nums.slice(0, slow + 1).length;
}

const ii = _removeDuplicates([1, 1, 2]);

console.log("i", ii);
