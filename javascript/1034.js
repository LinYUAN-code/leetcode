/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
 var colorBorder = function(grid, row, col, color) {

    let n = grid.length;
    let m = grid[0].length;
    let mp = [];
    let dx = [-1,1,0,0];
    let dy = [0,0,-1,1];
    for(let i=0;i<n;i++)mp[i] = [];
 
    const get = function(i,j) {
        if(i<0||i>=n)return -1;
        if(j<0||j>=m)return -1;
        return grid[i][j];
    }
    const judgeConn = function(i,j) {
        if(grid[i][j]===get(i-1,j) || grid[i][j]===get(i+1,j) 
            || grid[i][j]===get(i,j+1) ||grid[i][j] === get(i,j-1)) {
                return true;
        }
        return false;
    }
    const judgeInside = function(i,j) {
        if(grid[i][j]===get(i-1,j) && grid[i][j]===get(i+1,j) 
            && grid[i][j]===get(i,j+1) && grid[i][j] === get(i,j-1)) {
                return true;
        }
        return false;
    }
    const dfs = function(px,py) {
        mp[px][py] = color;
        if(judgeInside(px,py))mp[px][py] = grid[px][py];
        for(let i=0;i<4;i++) {
            let x = px + dx[i];
            let y = py + dy[i];
            if(x<0||x>=n||y<0||y>=m)continue;
            if(mp[x][y])continue;
            if(grid[x][y] !== grid[px][py])continue;
            dfs(x,y);
        }
    }  
    if(judgeConn(row,col)) {
        dfs(row,col);
    } else {
        grid[row][col] = color;
    }
    for(let i=0;i<n;i++)
        for(let j=0;j<m;j++)
            grid[i][j] = mp[i][j] || grid[i][j];
    return grid;
};