/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = function(board) {
    const check = function(x,y) {
        for(let i=0;i<9;i++){
            if(x!==i && board[x][y] === board[i][y])return false;
            if(y!==i && board[x][y] === board[x][i])return false;
        }
        const floor = Math.floor;
        let ox = floor(x / 3);
        let oy = floor(y / 3);
        ox *= 3;
        oy *= 3;
        for(let i=0;i<3;i++)
            for(let j=0;j<3;j++)
                if(!( (ox+i) === x && (oy+j) === y) && board[ox+i][oy+j] === board[x][y])return false;
        return true;
    }

    // 暴搜 + 回溯
    const sol = function(x,y) {
        if(board[x][y]!=='.') {
            return solNext(x,y);
        }
        for(let i=1;i<=9;i++) {
            board[x][y] = i + "";
            if(check(x,y) && solNext(x,y))return true;
            board[x][y] = ".";
        }
        return false;
    }
    const solNext = function(x,y) {
        if(x===8 && y===8)return true;
        if(y===8)return sol(x+1,0);
        return sol(x,y+1);
    }
    console.log(sol(0,0));
};