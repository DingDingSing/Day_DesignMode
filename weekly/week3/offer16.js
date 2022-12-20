// 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。不得使用库函数，同时不需要考虑大数问题。
// https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n >= 0) {
    return core(x, n);
  } else {
    return 1 / (core(x, -n - 1) * x);
  }
};

var core = function (x, n) {
  if (n === 0) return 1;
  const half = core(x, Math.floor(n / 2));
  if (n % 2 == 1) {
    // 奇数
    return half * half * x;
  } else {
    // 偶数
    return half * half;
  }
};
