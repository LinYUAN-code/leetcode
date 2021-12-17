/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
 var numWaterBottles = function(numBottles, numExchange) {
    // 模拟
    let ans = 0;
    let empty = 0;
    while(numBottles) {
        ans += numBottles;
        empty += numBottles;
        numBottles = Math.floor(empty / numExchange);
        empty %= numExchange;
    }
    return ans;
};