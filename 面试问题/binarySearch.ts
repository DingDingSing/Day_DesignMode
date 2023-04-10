const binarySearch = (nums: number[], target: number) => {
  return _binarySearch(nums, target, 0, nums.length - 1);
};

const _binarySearch = (
  nums: number[],
  target: number,
  start: number,
  end: number
): number | null => {
  if (start > end) return null;

  const mid = Math.floor((start + end) / 2);

  if (nums[mid] === target) {
    return mid;
  } else if (nums[mid] > target) {
    return _binarySearch(nums, target, start, mid - 1);
  } else {
    return _binarySearch(nums, target, mid + 1, end);
  }
};

const targetIndex = binarySearch([1, 2, 3, 4, 5, 6, 7], 2);
console.log("i", targetIndex);
