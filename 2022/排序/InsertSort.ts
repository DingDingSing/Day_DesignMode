// // 插入排序
const InsertSort = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    let value = arr[i];
    let j = i - 1;
    for (; j >= 0; j--) {
      if (arr[j] > value) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = value;
  }
};

const arr = [3, 2, 1, 5, 9, 8];
InsertSort(arr);

console.log("arr", arr);

// 插入排序
// const InsertSort = (arr: number[]) => {
//   for (let i = 1; i < arr.length; i++) {
//     let j = i;
//     let value = arr[i];
//     while (j > 0 && arr[j - 1] > value) {
//       arr[j] = arr[j - 1];
//       j--;
//     }
//     arr[j] = value;
//   }
//   return arr;
// };

// const arr = [3, 2, 1, 5, 9, 8];
// InsertSort(arr);

// console.log("arr", arr);
