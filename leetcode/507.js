/**
 * @param {number} num
 * @return {boolean}
 */
 var checkPerfectNumber = function(num) {
    // 1.正因子--时间复杂度 sqrt(n)
    // 2.打表
    let ans = 1;
    for(let i=2;i*i<=num;i++) {
        if(num%i===0) {
            ans += i + num/i;
        }
    }
    return num===ans && num!==1;
};