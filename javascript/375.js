/**
 * @param {number} n
 * @return {number}
 */
 var getMoneyAmount = function(n) {
    // 猜数字问题变形 hhh---> 计算你至少需要拥有多少现金才能确保你能赢得这个游戏。
    // 我们没次猜肯定是把数字分成了2堆--->如果每次它都在最小的堆里面 那么我们肯定是最好的
    // 所以 造成最坏的局面的话 --> 被猜测数字肯定是最大值n
    // 我们可以进行区间dp  [i,k]   [k,j] 
    // 每次dp然后选择左右两边最大值即可  max(dp[i][k-1],dp[k+1][j]) + 1
    // 操作选最优---局面选最差
    // 如果只有3个数字那么我们肯定得猜测中间的
    // 如果有两个数字那么我们猜最小的
    // 一个数字猜个鬼

    let f = [];
    for(let i=0;i<=n+1;i++) {
        f[i] = [];
    }
    const inf = 0x3f3f3f3f;
    for(let i=0;i<=n+1;i++)
        for(let j=0;j<=n+1;j++)
         f[i][j] = 0;
    for(let i=1;i<=n;i++)
        for(let j=i+1;j<=n;j++)
            f[i][j] = inf;

    for(let len=2;len<=n;len++) 
        for(let l=1;l+len-1<=n;l++) {
            r = l + len - 1;
            for(let k=l;k<=r;k++) {
                f[l][r] = Math.min(f[l][r],Math.max(f[l][k-1],f[k+1][r])+k);
            }
        }
    return f[1][n];
};