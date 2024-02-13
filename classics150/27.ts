// 27 移除元素
// https://leetcode.cn/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @description 前面放置不等于目标数据的元素，后面的数据直接移除掉
 * @param nums
 * @param val
 * @returns
 */
function removeElement(nums: number[], val: number) {
  let idx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[idx] = nums[i];
      idx++;
    }
  }
  nums.splice(idx);
  return idx;
}

let nums = [0, 1, 2, 2, 3, 0, 4, 2],
  val = 2;
removeElement(nums, val);

console.log("nums", nums);
