/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxIncreaseKeepingSkyline = function(grid) {
    let row = [];
    let col = [];
    let n = grid.length;
    const max = Math.max;
    const min = Math.min;
    for(let i=0;i<n;i++) {
        let maxx = 0;
        for(let j=0;j<n;j++) {
            maxx = max(maxx,grid[i][j]);
        }
        row[i] = maxx;
    }
    for(let i=0;i<n;i++) {
        let maxx = 0;
        for(let j=0;j<n;j++) {
            maxx = max(maxx,grid[j][i]);
        }
        col[i] = maxx;
    }
    let ans = 0;
    for(let i=0;i<n;i++)
        for(let j=0;j<n;j++) {
            ans += min(row[i],col[j]) - grid[i][j];
        }
    return ans;
};