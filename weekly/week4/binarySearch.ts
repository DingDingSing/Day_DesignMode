// 二分查找

// 递归
const binarySearch = (nums: number[], num: number) => {
  return bSearch(nums, 0, nums.length - 1, num);
};

const bSearch = (
  nums: number[],
  start: number,
  end: number,
  num: number
): number => {
  if (start > end) return -1;
  const mid = Math.floor((start + end) / 2);
  if (nums[mid] === num) {
    return mid;
  } else if (nums[mid] > num) {
    return bSearch(nums, 0, mid - 1, num);
  } else {
    return bSearch(nums, mid + 1, end, num);
  }
};

// 循环实现 二分查找
const binarySearchLoop = (nums: number[], num: number) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === num) {
      return mid;
    } else if (nums[mid] > num) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};

const baal = binarySearchLoop([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10);
console.log("baa", baal);
// const baa = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);
// console.log("baa", baa);
