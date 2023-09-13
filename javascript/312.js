/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxCoins = function(nums) {
    // 正难则反
    // 区间dp？--》找分界点
    // 时间复杂度 n^3
    let n = nums.length;
    let f = [];
    for(let i=0;i<=n+1;i++)
        f[i] = [];
    for(let i=0;i<=n+1;i++)
        for(let j=0;j<=n+1;j++)
            f[i][j] = 0;
    let val = [1].concat(...nums,1);
    for(let i=n-1;i>=0;i--)
        for(let j=i+2;j<=n+1;j++)
            for(let k=i+1;k<j;k++) {
                f[i][j] = Math.max(f[i][j],f[i][k]+f[k][j]+val[i]*val[k]*val[j]);
            }
    console.log(f[0][4]);
    return f[0][n+1];
};