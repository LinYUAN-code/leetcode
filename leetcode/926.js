/**
 * @param {string} s
 * @return {number}
 */
 var minFlipsMonoIncr = function(s) {
    // 动态规划 f[i][j] 到j 到i 需要翻转的次数
    // 前缀和 ---> 枚举从哪里开始后面都是1 就好了 也很简单
    let f = [];
    f[0] = [];
    f[1] = [];
    f[0][-1] = 0;
    f[1][-1] = 0;
    let n = s.length;
    for(let i=0;i<n;i++) {
        // 1
        if(s[i]==='1') {
            f[1][i] = Math.min(f[0][i-1],f[1][i-1]);
        } else {
            f[1][i] = Math.min(f[0][i-1],f[1][i-1]) + 1; 
        }
        // 0
        if(s[i]==='0') {
            f[0][i] = f[0][i-1];
        } else {
            f[0][i] = f[0][i-1] + 1;
        }
    }
    return Math.min(f[0][n-1],f[1][n-1]);
};