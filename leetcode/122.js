/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let f = [];
    f[0] = [];
    f[1] = [];
    f[0][0] = 0;
    f[1][0] = -prices[0];
    const max = Math.max
    //0为手中没有股票 1为手中有股票
    for(let i=1;i<prices.length;i++) {
        f[0][i] = max(f[1][i-1]+prices[i],f[0][i-1]);
        f[1][i] = max(f[1][i-1],f[0][i-1]-prices[i]);
    }
    return f[0][prices.length-1];
};