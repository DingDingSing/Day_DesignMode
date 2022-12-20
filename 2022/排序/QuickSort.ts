// 快速排序
// 递归 找到标志位 小的放在嘴边 大的放在右边

const quickSort = (arr: number[], left = 0, right = arr.length - 1) => {
  if (arr.length <= 1) return arr;
  const index = partition(arr, left, right);
  //   console.log("index", index);
  // 退出条件
  if (left < index - 1) {
    quickSort(arr, left, index - 1);
  }
  if (right > index) {
    quickSort(arr, index, right);
  }
  return arr;
};

const partition = (arr: number[], left: number, right: number) => {
  // 以基准值为轴心，划分左右子数组的过程
  const mid = arr[Math.floor(left + (right - left) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (arr[i] < mid) {
      i++;
    }
    while (arr[j] > mid) {
      j--;
    }

    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  return i;
};
