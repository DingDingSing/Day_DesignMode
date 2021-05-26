// 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：

// 每行的元素从左到右升序排列。
// 每列的元素从上到下升序排列。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/search-a-2d-matrix-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function searchMatrix(matrix: number[][], target: number): boolean {
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;
  if (matrix.length === 0) return false;
  if (bottom === 0 && right === 0) return matrix[0][0] === target;
  while (right >= 0) {
    for (let i = 0; i <= bottom; i++) {
      if (matrix[i][right] === target) {
        return true;
      }
    }
    right--;
  }
  return false;
}

console.log(
  "o",
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    30
  )
);

console.log("o", searchMatrix([[-5]], -5));

console.log("o", searchMatrix([[1, 1]], 1));
