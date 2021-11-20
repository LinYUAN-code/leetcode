/**
 * @param {number} n
 * @return {number}
 */
 var trailingZeroes = function(n) {
    // 0 说明有 2 和 5 匹配
    // 统计5个数就好了
    if(!n)return 0;
    let num5 = 0;
    floor = Math.floor
    let base = 5;
    while(base<=n) {
        num5 += floor(n / base);
        base *= 5;
    }
    return num5;
};