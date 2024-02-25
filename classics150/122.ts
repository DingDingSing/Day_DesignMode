// 122 买卖股票的最佳时机贰
// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/?envType=study-plan-v2&envId=top-interview-150

/**
 * @description 贪心算法
 * 贪心算法 在每一步总是做出在当前看来最好的选择。
「贪心算法」 和 「动态规划」、「回溯搜索」 算法一样，完成一件事情，是 分步决策 的；
「贪心算法」 在每一步总是做出在当前看来最好的选择，我是这样理解 「最好」 这两个字的意思：
「最好」 的意思往往根据题目而来，可能是 「最小」，也可能是 「最大」；
贪心算法和动态规划相比，它既不看前面（也就是说它不需要从前面的状态转移过来），也不看后面（无后效性，后面的选择不会对前面的选择有影响），因此贪心算法时间复杂度一般是线性的，空间复杂度是常数级别的；
这道题 「贪心」 的地方在于，对于 「今天的股价 - 昨天的股价」，得到的结果有 3 种可能：① 正数，② 000，③负数。贪心算法的决策是： 只加正数 。
 * @param prices
 */
function maxProfit(prices: number[]): number {
  if (prices.length < 1) return 0;
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - prices[i - 1];
    if (profit > 0) {
      maxProfit += profit;
    }
  }
  return maxProfit;
}

/**
 * @description  TODO: 动态规划实现方案补充
 * @param prices
 */
function maxProfit(prices: number[]): number {}

// function maxProfit(prices: number[]): number {
//   let max = 0;
//   const [profit, end] = maxProfitByRange(prices, 0, prices.length);
//   if (end < prices.length) {
//     maxProfitByRange(prices, end + 1, prices.length);
//   }
// }

// function maxProfitByRange(
//   prices: number[],
//   start: number,
//   end: number
// ): [number, number] {
//   let minPrice = Infinity;
//   let maxProfit = 0;
//   let maxProfitIndex = 0;
//   for (let i = start; i < end; i++) {
//     const price = prices[i];
//     if (price < minPrice) {
//       minPrice = price;
//     } else {
//       if (price - minPrice > maxProfit) {
//         maxProfit = price - minPrice;
//         maxProfitIndex = i;
//       }
//     }
//   }
//   return [maxProfit, maxProfitIndex];
// }
