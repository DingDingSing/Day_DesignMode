// 斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

// F(0) = 0，F(1) = 1
// F(n) = F(n - 1) + F(n - 2)，其中 n > 1
// 给定 n ，请计算 F(n) 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/fibonacci-number
// // 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 暴力法
function fib_1(n: number): number {
  if (n == 0) return 0;
  if (n == 1 || n == 2) return 1;
  return fib_1(n - 1) + fib_1(n - 2);
}

// 备忘录
function fib_2(n: number): number {
  if (n == 0) return 0;
  if (n == 1 || n == 2) return 1;
  const m: number[] = [];
  return _memo(m, n);
}

function _memo(m: number[], n: number): number {
  if (m[n]) return m[n];
  m[n] = (_memo(m, n - 1) + _memo(m, n - 2)) % 1000000007;
  return m[n];
}

// dp 优化 状态压缩

// fib(1)+fib(3) = fib(3)
function fib_3(n: number): number {
  if (n == 0) return 0;
  if (n == 1 || n == 2) return 1;
  let [pre, cur] = [1, 1];
  for (let i = 3; i <= n; i++) {
    const next = (pre + cur) % 1000000007;
    [pre, cur] = [cur, next];
  }
  return cur;
}

// 实际效率更高
const fib_4 = (n: number): number => {
  if (n === 0) return 0;
  if (n == 1 || n == 2) return 1;
  let pre = 1;
  let cur = 1;
  for (let i = 3; i <= n; i++) {
    const sum = (pre + cur) % 1000000007;
    pre = cur;
    cur = sum;
  }
  return cur;
};
