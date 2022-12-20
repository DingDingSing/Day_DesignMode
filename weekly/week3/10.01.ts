// 面试题 10.01. 合并排序的数组
// 给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。

// 初始化 A 和 B 的元素数量分别为 m 和 n。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/sorted-merge-lcci
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 输入: (A = [1, 2, 3, 0, 0, 0]), (m = 3);
// (B = [2, 5, 6]), (n = 3);

// 输出: [1, 2, 2, 3, 5, 6];

/**
 Do not return anything, modify A in-place instead.
 */
function merge(A: number[], m: number, B: number[], n: number) {
  let i = 0;
  let j = 0;
  let temp = [];
  while (i < m && j < n) {
    if (A[i] < B[j]) {
      temp.push(A[i]);
      i++;
    } else {
      temp.push(B[j]);
      j++;
    }
  }
  if (i < m) {
    temp = [...temp, ...A.slice(i, m)];
  } else {
    temp = [...temp, ...B.slice(j, n)];
  }
  for (let i = 0; i < m + n; i++) {
    A[i] = temp[i];
  }
  // 注意点 A可能存在比生成的结果好长的情况、需要移除后面的0
  A.splice(m + n);
}
let ma: number[] = [1, 2, 3, 0, 0, 0];
let mb: number[] = [2];
merge(ma, 3, mb, 1);

console.log("ma", ma);
