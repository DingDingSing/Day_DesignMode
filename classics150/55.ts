// 55 跳跃游戏
// https://leetcode.cn/problems/jump-game/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @description 贪心算法：计算每一步的最大行进距离，最大行进距离之内的其他元素都是可以触发的依次进行遍历
 * @param nums
 * @returns
 */
function canJump(nums: number[]): boolean {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    //需要注意最大行进距离是否大于当前节点、若小于说明无法到达当前节点、直接return
    if (i > max) return false;
    const item = nums[i];
    max = Math.max(max, i + item);
    if (max >= nums.length - 1) break;
  }
  return max >= nums.length - 1;
}

let nums = [3, 2, 1, 0, 4];

const r = canJump(nums);

console.log("r", r);
