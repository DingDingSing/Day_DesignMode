// 剑指 Offer 21. 调整数组顺序使奇数位于偶数前面
// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。
// https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/

// 快速排序
const quickSort = (arr) => {
  return _quickSort(arr, 0, arr.length - 1);
};

const _quickSort = (arr, p, r) => {
  if (p >= r) return;
  q = partition(arr, p, r);
  _quickSort(arr, p, q - 1);
  _quickSort(arr, q + 1, r);
  return arr;
};

const partition = (arr, p, r) => {
  let i = p - 1;
  for (let j = p; j < r; j++) {
    if (arr[j] % 2 === 1) {
      [arr[i + 1], arr[j]] = [arr[j], arr[i + 1]];
      i++;
    }
  }
  [arr[i + 1], arr[r]] = [arr[r], arr[i + 1]];
  return i + 1;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  if (nums.length <= 1) return nums;
  return quickSort(nums);
};

// 双指针

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  if (nums.length <= 1) return nums;
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    if (nums[i] % 2 === 1) {
      i++;
      continue;
    }
    if (nums[j] % 2 === 0) {
      j--;
      continue;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }
  return nums;
};

const cc = [11, 9, 3, 7, 16, 4, 2, 0];

exchange(cc);

console.log("cc", cc);
