/**
 * @param {number} n
 * @return {number}
 */
 var countNumbersWithUniqueDigits = function(n) {
    /*
        1位数字
            10
        2位数字
            9(1-9)9(0-9 - 1)8...
    */
    if(!n)return 1;
    let ans = 10;
    let base = 9;
    for(let i=2;i<=n;i++) {
        base *= (9-i+2)
        ans += base;
    }
    return ans;
};