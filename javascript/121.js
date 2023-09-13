/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    const max = Math.max,
          min = Math.min;
    let minn = prices[0];
    let ans = 0;
    for(let i=0;i<prices.length;i++) {
        ans = max(ans,prices[i]-minn);
        minn = min(minn,prices[i]);
    }
    return ans;
};