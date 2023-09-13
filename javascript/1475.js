/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  let stk = [];
  for (let i = prices.length - 1; i >= 0; i--) {
    while (stk.length > 0 && stk[stk.length - 1] > prices[i]) {
      stk.pop();
    }
    let t = prices[i];
    if (stk.length) {
      prices[i] = prices[i] - stk[stk.length - 1];
    }
    stk.push(t);
  }
  return prices;
};
