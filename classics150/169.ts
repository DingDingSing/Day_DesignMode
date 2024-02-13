// 169 多数元素
// https://leetcode.cn/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @description 使用一个存储空间保存每个元素的重复次数、再进行一次遍历取到最大的重复次数的元素
 * 不能使用数组作为临时存储空间、因为下边过长会导致算法超时
 * @param nums
 * @returns
 */
function majorityElement(nums: number[]): number {
  const t = new Map();
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (t.has(n)) {
      t.set(n, t.get(n) + 1);
    } else {
      t.set(n, 1);
    }
  }
  let max = -Infinity;
  let maxKey = 0;
  for (let [key, value] of t) {
    if (value > max) {
      max = value;
      maxKey = key;
    }
  }
  return maxKey;
}

let nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const d = majorityElement(nums);

console.log("ddd", d);
