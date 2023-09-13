/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solve = function(board) {
    // dfs就好了-我们直接对边界上的O进行修改就好了
    let n = board.length;
    let m = board[0].length;
    let dx = [-1,1,0,0];
    let dy = [0,0,-1,1];
    const dfs = function(pos) {
        board[pos[0]][pos[1]] = 'T';
        for(let i=0;i<4;i++) {
            let x = pos[0] + dx[i];
            let y = pos[1] + dy[i];
            if(x<0||x>=n||y<0||y>=m)continue;
            if(board[x][y] != 'O')continue;
            dfs([x,y]);
        }
        return false;
    };
    for(let i=0;i<n;i++) {
        if(board[i][0]==='O')
            dfs([i,0]);
        if(board[i][m-1]==='O')
            dfs([i,m-1]);
    }
    for(let i=1;i<m-1;i++) {
        if(board[0][i]==='O')
            dfs([0,i]);
        if(board[n-1][i]==='O')
            dfs([n-1,i]);
    }
    for(let i=0;i<n;i++)
        for(let j=0;j<m;j++)
            if(board[i][j]==='T')board[i][j] = 'O';
            else board[i][j] = 'X';
    return ;
};