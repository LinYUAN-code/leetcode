/**
 * @param {number[][]} grid
 * @return {number}
 */
 var countPyramids = function(grid) {
    // n*m <= 10^5
    // 真的初看一点思路没有..
    // 我们必须找出一个可以枚举的点
    // 这里我们枚举三角形的顶点可以构成多少个三角形
    // f[i][j] 为以（i，j）的三角形的最大高度
    // 则有 f[i][j] = min(f[i+1][j]+1,f[i+1][j+1]+1,f[i+1][j-1]+1)
    // 从底部向上dp就ok了
    let n = grid.length;
    let m = grid[0].length;
    let ans = 0;
    let f = grid;
    const min = Math.min;
    for(let i=n-2;i>=0;i--)
        for(let j=0;j<m;j++) {
            if(f[i][j])
                f[i][j] = min(f[i+1][j]+1,(j+1<m?f[i+1][j+1]:0)+1,(j-1>=0?f[i+1][j-1]:0)+1);
        }
    for(let i=0;i<n;i++) 
        for(let j=0;j<m;j++) {
            if(f[i][j]) {
                ans += f[i][j] - 1;
                f[i][j] = 1;
            }
        }
    
    for(let i=1;i<n;i++)
        for(let j=0;j<m;j++) {
            if(f[i][j])
                f[i][j] = min(f[i-1][j]+1,(j+1<m?f[i-1][j+1]:0)+1,(j-1>=0?f[i-1][j-1]:0)+1);
        }
    for(let i=0;i<n;i++) 
        for(let j=0;j<m;j++) {
            if(f[i][j]) {
                ans += f[i][j] - 1;
            }
        }
    return ans;
};