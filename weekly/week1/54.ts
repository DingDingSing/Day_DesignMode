// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

// https://leetcode-cn.com/problems/spiral-matrix/

function spiralOrder(matrix: number[][]): number[] {
  const m = matrix.length;
  const n = matrix[0].length;
  if (matrix.length === 0) return [];
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = m - 1;
  const order = [];

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      order.push(matrix[top][i]);
    }

    if (top === bottom) break;
    for (let i = top + 1; i <= bottom; i++) {
      order.push(matrix[i][right]);
    }

    if (left === right) break;
    for (let i = right - 1; i >= left; i--) {
      order.push(matrix[bottom][i]);
    }

    for (let i = bottom - 1; i > top; i--) {
      order.push(matrix[i][left]);
    }
    left++;
    right--;
    top++;
    bottom--;
  }
  return order;
}
const smatrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

const xx = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const zz = [[7], [9], [6]];

const o = spiralOrder(smatrix);

const oo = spiralOrder(xx);

const ooo = spiralOrder(zz);

console.log("o", o);

console.log("oo", oo);

console.log("ooo", ooo);
