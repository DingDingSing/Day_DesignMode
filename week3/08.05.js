// 面试题 08.05. 递归乘法
// 递归乘法。 写一个递归函数，不使用 * 运算符， 实现两个正整数的相乘。可以使用加号、减号、位移，但要吝啬一些。
// https://leetcode-cn.com/problems/recursive-mulitply-lcci/

/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var multiply = function (A, B) {
  const max = Math.max(A, B);
  const min = Math.min(A, B);
  if (min === 1) return max;
  const helf = multiply(Math.floor(min / 2), max);

  if (min % 2 === 1) {
    //奇数
    return helf + helf + max;
  } else {
    return helf + helf;
  }
};
