/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
    // 不多说--就是一个很经典的dp
    let n = obstacleGrid.length;
    let m = obstacleGrid[0].length;
    // 走不了
    if(obstacleGrid[0][0])return 0;
    let f = [];
    for(let i=0;i<=n;i++)f[i] = [];
    f[1][1] = 1;
    for(let i=1;i<=n;i++)
        for(let j=1;j<=m;j++) {
            if(i===1&&j===1)continue;
            if(!obstacleGrid[i-1][j-1])
                f[i][j] = (i-1>=1?f[i-1][j]:0) + (j-1>=1?f[i][j-1]:0);
            else 
                f[i][j] = 0;
        }
    return f[n][m];
};