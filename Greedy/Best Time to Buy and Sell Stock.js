/**
 * @param {number[]} prices
 * @return {number}
 */

// Time: O(n) | Space: O(1)
function maxProfit(prices) {
  let minPrice = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i += 1) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }

    profit = Math.max(profit, prices[i] - minPrice);
  }

  return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // => 5
