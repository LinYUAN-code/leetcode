/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    let n = board.length,m = board[0].length;
    let st = [];
    for(let i=0;i<board.length;i++)st[i] = [];
    let dx = [-1,1,0,0],dy = [0,0,-1,1];
    const judge = function(u,px,py) {
        if(u===word.length)return true;
        for(let i=0;i<4;i++) {
            let x = px + dx[i];
            let y = py + dy[i];
            if(x<0||x>=n||y<0||y>=m||st[x][y] || board[x][y] !== word[u])continue;
            st[x][y] = 1;
            if(judge(u+1,x,y))return true;
            st[x][y] = 0;
        }
        return false;
    }
    for(let i=0;i<board.length;i++) {
        for(let j=0;j<board[0].length;j++) {
            if(board[i][j] === word[0]) {
                st[i][j] = 1;
                if (judge(1,i,j))return true;
                st[i][j] = 0;
            }
        }
    }
    return false;
};