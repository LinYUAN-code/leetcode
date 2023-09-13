/**
 * @param {character[][]} board
 * @return {number}
 */
 var countBattleships = function(board) {
    // 我们只需要统计是不是顶点就好了
    let n = board.length;
    let m = board[0].length;
    board[-1] = [];
    let ans = 0;
    for(let i=0;i<n;i++)
        for(let j=0;j<m;j++) {
            if(board[i][j]==='X' && board[i-1][j] !=='X' && board[i][j-1] !== 'X') {
                ans++;
            }
        }
    return ans;
};