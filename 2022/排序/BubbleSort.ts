// 冒泡排序
// 比较两个元素、若 a>b 则交换位置 将大的冒泡到最右边
const BubbleSort = (arr: number[]) => {
  for (let i = 0; i < arr.length - 1; i++) {
    // 判断最好情况 有序数组
    let flag = false;
    // 内层每次最大位为有序
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true;
      }
    }
    if (!flag) return;
  }
  return arr;
};

// 是原地排序么 - 是
// 是稳定的排序算法么 - 是
// 时间复杂度 最好O(n) 最差 O(n2) 平均 O(n2)

const arr = [1,2,3,4];

BubbleSort(arr);

console.log("arr", arr);
