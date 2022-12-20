// 编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。
// https://leetcode-cn.com/problems/zero-matrix-lcci/

/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const m = new Set();
  const n = new Set();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        m.add(i);
        n.add(j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (m.has(i) || n.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
}

const sza = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
setZeroes(sza);

console.log("sza", sza);
