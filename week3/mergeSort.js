function mergeSort(arr) {
  const len = arr.length;
  // 处理边界情况
  if (len <= 1) {
    return arr;
  }
  // 计算分割点
  const mid = Math.floor(len / 2);
  // 递归分割左子数组，然后合并为有序数组
  const leftArr = mergeSort(arr.slice(0, mid));
  // 递归分割右子数组，然后合并为有序数组
  const rightArr = mergeSort(arr.slice(mid, len));
  // 合并左右两个有序数组
  arr = mergeArr(leftArr, rightArr);
  // 返回合并后的结果
  return arr;
}

function mergeArr(arr1, arr2) {
  let i = 0,
    j = 0;

  const temp = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      temp.push(arr1[i]);
      i++;
    } else {
      temp.push(arr2[j]);
      j++;
    }
  }

  if (i < arr1.length) {
    return temp.concat(arr1.slice(i));
  } else {
    return temp.concat(arr2.slice(j));
  }
  // return temp;
}

const aa = mergeSort([3, 2, 1, 5, 8, 6, 7]);

console.log("aa", aa);

 
