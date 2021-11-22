/**
 * @param {number[][]} matrix
 * @return {number}
 */
 var longestIncreasingPath = function(matrix) {
    // 移动：上下左右
    // 找出最长递增的子路径 n,n 200
    // 首先如何求出数组中的最长上升子路径，我们有n^2 以及 nlogn的算法
    // 但是这道题目怎么做呢，
    // 直接上记忆化搜索--f[i][j]为从这个格子开始移动所可以的最长
    // 为什么可以呢？因为我们前面走过的路径肯定不会对其造成影响 因为是递增的
    let dx = [-1,1,0,0];
    let dy = [0,0,-1,1];
    const n = matrix.length;
    const m = matrix[0].length;
    const max = Math.max;
    const f = [];
    for(let i=0;i<n;i++)f[i] = [];
    const dfs = function(px,py) {
        if(f[px][py])return f[px][py];
        let d = 0;
        for(let i=0;i<4;i++) {
            let x = px + dx[i];
            let y = py + dy[i];
            if(x<0||x>=n||y<0||y>=m)continue;
            if(matrix[px][py] >= matrix[x][y])continue;
            d = max(d,dfs(x,y));
        }
        f[px][py] = d + 1;
        return f[px][py];
    }
    let ans = 0;
    for(let i=0;i<n;i++)
        for(let j=0;j<m;j++)
            ans = max(ans,dfs(i,j));
    return ans;
};