/**
 * @param {number[][]} grid
 * @return {number}
 */
 var projectionArea = function(grid) {
    let n = grid.length;
    let m = grid[0].length;
    let ans = 0;
    for(let i=0;i<n;i++)
        for(let j=0;j<m;j++) {
            if(grid[i][j])ans++;
        }
    for(let i=0;i<n;i++) {
        let maxx = 0;
        for(let j=0;j<m;j++) {
            maxx = Math.max(grid[i][j],maxx);
        }
        ans += maxx;
    }
    for(let i=0;i<m;i++) {
        let maxx = 0;
        for(let j=0;j<n;j++) {
            maxx = Math.max(grid[j][i],maxx);
        }
        ans += maxx;
    }
    return ans;
};