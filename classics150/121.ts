// 121 买卖股票的最佳时机
// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @description 暴力破解法 时间复杂度n^2 会超时
 * @param prices
 * @returns
 */
function maxProfit(prices: number[]): number {
  let max = 0;
  const cache = new Map();
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const profit = prices[j] - prices[i];
      if (profit > max) max = profit;
    }
  }
  return max;
}

/**
 * @description 一次遍历得出最大利润、每个遍历元素存在两种情况；
 * 是最小价格:
 *  更新最小价格
 * 不是最小价格:
 *  更新当前元素卖出利润
 * @param prices
 * @returns
 */
function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (let price of prices) {
    if (price < minPrice) {
      //对比更新相对较小价格
      minPrice = price;
    } else {
      // 在相对最小价格情况下、更新最大利润
      if (price - minPrice > maxProfit) {
        maxProfit = price - minPrice;
      }
    }
  }
  return maxProfit;
}

let nums = [7, 1, 5, 3, 6, 4];

const r = maxProfit(nums);

console.log("nums", r);
