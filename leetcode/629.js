/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var kInversePairs = function(n, k) {
    const mod = 1e9+7;
    //  1000 1000
    // 大的放越靠前--就越能产生逆序对
    // f[i][j] 表示1-i字符能够排列出 k 个逆序对  的数量
    // 那么我们有---》 f[i][j] = f[i-1][j] +....+f[i-1][j-i+1]-->前缀和
    let f = [],
        s = [];
    for(let i=0;i<=n;i++) {
        s[i] = [];
        f[i] = [];
    }
    f[0][0] = 1;
    for(let i=0;i<=k;i++)
        s[0][i] = 1;

    for(let i=1;i<=n;i++) {
        for(let j=0;j<=k;j++) {
            f[i][j] = ((s[i-1][j] - ((j-i)>=0?s[i-1][j-i]:0))%mod + mod)%mod;
            if(j>=1)
                s[i][j] = (f[i][j] + s[i][j-1])%mod;
            else 
                s[i][j] = f[i][j];
            // console.log(i,j,s[i][j]);
        }
    }
    return f[n][k];
};