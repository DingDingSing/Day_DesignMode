// 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。

// 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/rotate-image
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const n = matrix.length;
  // 水平翻转
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < n; j++) {
      [matrix[i][j], matrix[n - i - 1][j]] = [
        matrix[n - i - 1][j],
        matrix[i][j],
      ];
    }
  }
  // 主对角线翻转
  // 对角线左侧枚举 1,0 2,0 2,1
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      console.log("i", i);
      console.log("j", j);
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

rotate(matrix);

console.log("matrix", matrix);
