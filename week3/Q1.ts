// 给定一个数组 按照奇数偶数划分
// e [3,2,1,5,9,8] => [3,1,5,9,2,8]

// 双指针

const q1 = [3, 2, 1, 5, 9, 8];

const q1Sort = (arr: number[]) => {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    if (arr[i] % 2 === 1) {
      i++;
      continue;
    }

    if (arr[j] % 2 === 0) {
      j--;
      continue;
    }

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

console.log("q1", q1Sort(q1));
