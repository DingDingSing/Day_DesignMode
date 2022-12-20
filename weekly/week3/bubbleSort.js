const bubbleSort = (nums) => {
  if (nums.length <= 1) return nums;
  // 双层循环遍历
  for (let i = 0; i < nums.length; i++) {
    let flag = false;
    for (let j = 0; j < nums.length - i - 1; j++) {
      // 内层进行比较
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        flag = true;
      }
    }
    if (!flag) break;
  }
};

const na = [3, 2, 1, 5, 9, 8];

bubbleSort(na);

console.log("na", na);

// 平均时间复杂度 O(n2)
// 逆序度 + 有序度 = n(n-1)/2
// 排序的过程就是增加有序度、减少逆序度的过程