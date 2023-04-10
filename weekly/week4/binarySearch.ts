// // 二分查找

// // 递归
// const binarySearch = (nums: number[], num: number) => {
//   return bSearch(nums, 0, nums.length - 1, num);
// };

// const bSearch = (
//   nums: number[],
//   start: number,
//   end: number,
//   num: number
// ): number => {
//   if (start > end) return start;
//   const mid = Math.floor((start + end) / 2);
//   if (nums[mid] === num) {
//     return mid;
//   } else if (nums[mid] > num) {
//     return bSearch(nums, 0, mid - 1, num);
//   } else {
//     return bSearch(nums, mid + 1, end, num);
//   }
// };

// const binarySearch = (nums: number[], num: number) => {
//   return bSearch(nums, num, 0, nums.length - 1);
// };

// const bSearch = (
//   nums: number[],
//   target: number,
//   start: number,
//   end: number
// ): number => {
//   if (start > end) return start;

//   const mid = Math.floor((end + start) / 2);

//   // 几种情况
//   if (nums[mid] === target) {
//     return mid;
//   } else if (nums[mid] > target) {
//     return bSearch(nums, target, start, mid - 1);
//   } else {
//     return bSearch(nums, target, mid + 1, end);
//   }
// };

// // 循环实现 二分查找
// const binarySearchLoop = (nums: number[], num: number) => {
//   let start = 0;
//   let end = nums.length - 1;

//   while (start <= end) {
//     const mid = Math.floor((start + end) / 2);
//     if (nums[mid] === num) {
//       return mid;
//     } else if (nums[mid] > num) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return -1;
// };

// const baal = binarySearchLoop([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10);
// console.log("baa", baal);
// // const baa = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);
// // console.log("baa", baa);

// const baal = binarySearch([1, 2, 3, 5, 6, 8, 9, 10], 3);
// console.log("baa", baal);

// 1,2,3,5,6,7,8

// 2,5
// 3
