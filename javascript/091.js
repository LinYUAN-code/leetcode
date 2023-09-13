/**
 * @param {number[][]} costs
 * @return {number}
 */
 var minCost = function(costs) {
    // 动态规划
    let n = costs.length;
    let f = [];
    for(let i=-1;i<n;i++) {
        f[i] = [];
    }
    f[-1][0] = f[-1][1] = f[-1][2] = 0;
    for(let i=0;i<n;i++) {
        f[i][0] = Math.min(f[i-1][1],f[i-1][2]) + costs[i][0];
        f[i][1] = Math.min(f[i-1][0],f[i-1][2]) + costs[i][1];
        f[i][2] = Math.min(f[i-1][0],f[i-1][1]) + costs[i][2];
    }
    return Math.min(f[n-1][0],f[n-1][1],f[n-1][2]);
};