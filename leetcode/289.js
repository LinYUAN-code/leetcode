/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var gameOfLife = function(board) {
    // 原地算法
    // 我这里取个巧吧，对于下次会存货的细胞我取成2就好了
    let n = board.length;
    let m = board[0].length;
    let dx = [-1,-1,-1,0,0,1,1,1];
    let dy = [-1,0,1,-1,1,-1,0,1];
    // 0 2 0表示死亡  2表示本来是死亡的但是现在变成存活的--我们应该把它看作死亡的
    // 1 3 1表示存活  3表示本来是存活的但是现在变成死亡的--我们应该把它看作存活的
    const check = function(px,py) {
        let ans=0;
        for(let i=0;i<dx.length;i++) {
            let x = px + dx[i];
            let y = py + dy[i];
            if(x<0||x>=n||y<0||y>=m)continue;
            if(board[x][y]===1 || board[x][y]===3)ans++;
        }
        return ans;
    }
    const change = function(i,j,live) {
        if(board[i][j]===live)return ;
        if(board[i][j]===0) {
            board[i][j] = 2;
        } else {
            board[i][j] = 3;
        }
    }
    for(let i=0;i<n;i++)
        for(let j=0;j<m;j++) {
            let k = check(i,j);
            if(k<2 || k>3)change(i,j,0);
            else if(k===3)change(i,j,1);
        }
    for(let i=0;i<n;i++)
        for(let j=0;j<m;j++)
            if(board[i][j]===2)board[i][j] = 1;
            else if(board[i][j]===3)board[i][j] = 0;
};