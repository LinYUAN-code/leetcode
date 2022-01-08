/**
 * @param {number} n
 * @return {number[]}
 */
 var grayCode = function(n) {
    // 构造题了---怎么构造格雷码
    // g[i] = b[i]^b[i+1]
    let ans = [];
    n = 2**n;
    for(let i=0;i<n;i++) {
        ans[i] = i^(i>>1);
    }
    return ans;
};