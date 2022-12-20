const insertSort = (nums) => {
  if (nums.length <= 1) return nums;

  for (let i = 1; i < nums.length; i++) {
    let temp = nums[i];
    let j = i;
    while (j > 0 && nums[j - 1] > temp) {
      nums[j] = nums[j - 1];
      j--;
    }
    nums[j] = temp;
  }
};

const dd = [3, 2, 1, 5, 9, 8];

insertSort(dd);
console.log("dd", dd);

// 插入排序 已知左侧都是已经排序好的数据
// 将右侧数据插入合适位置 j-- 继续比较