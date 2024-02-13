// 189 轮转数组
// https://leetcode.cn/problems/rotate-array/?envType=study-plan-v2&envId=top-interview-150

/**
 * @description 需要注意的点：K值可以大于nums.length 需要进行取余操作
 * @description 需要使用额外的空间
 */
function rotate(nums: number[], k: number): void {
  const start = nums.slice(0, nums.length - (k % nums.length));
  const end = nums.slice(nums.length - (k % nums.length));
  const t = [...end, ...start];
  nums.forEach((_, index) => (nums[index] = t[index]));
}

/**
 * @description 方法2 数组反转 不需要额外的空间
 * @param nums
 * @param k
 */
function rotate_0(nums: number[], k: number): void {
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
}

function reverse(nums: number[], start: number, end: number) {
  while (start < end) {
    const t = nums[start];
    nums[start] = nums[end];
    nums[end] = t;
    ++start;
    --end;
  }
}

let nums = [1, 2, 3, 4, 5, 6, 7],
  k = 7;

// rotate(nums, k);

rotate_0(nums, k);

console.log("nums", nums);
