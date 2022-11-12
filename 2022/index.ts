function _removeDuplicates(nums: number[]): number {
  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  console.log("1", nums);
  return nums.slice(0, slow).length;
}

_removeDuplicates([1, 1, 2]);
