/**
 * @param {string[]} board
 * @return {boolean}
 */
 var validTicTacToe = function(board) {
    // 如果双方都胜利那么肯定不行
    // X的数量比O多1 或者和O相同
    // 如果X胜利那么X的数量一定比O多1
    // 如果O胜利那么O的数量和X相等

    const judgeWin = function(char) {
        // 检测行
        for(let i=0;i<3;i++) {
            for(let j=0;j<4;j++) {
                if(j===3)return true;
                else if(j===3)break;
                if(board[i][j]===char)continue;
                else break;
            }
        }

        // 检测列
        for(let i=0;i<3;i++) {
            for(let j=0;j<4;j++) {
                if(j===3)return true;
                else if(j===3)break;
                if(board[j][i]===char)continue;
                else break;
            }
        }

        let flag = 0;
        // 检测对角线
        for(let i=0;i<3;i++) {
            if(board[i][i] !== char) {
                flag = 1;
                break;
            }
        }

        if(!flag)return true;
        flag = 0;
        for(let i=0;i<3;i++) {
            if(board[i][2-i] !== char) {
                flag = 1;
                break;
            }
        }
        if(!flag)return true;
        return false;
    }
    let numx = 0;
    let numo = 0;
    for(let i=0;i<3;i++)
        for(let j=0;j<3;j++)
            if(board[i][j]==='X')numx++;
            else if(board[i][j]==='O')numo++;
    
    let winX = judgeWin('X');
    let winO = judgeWin('O');

    // console.log(numx,numo,winX,winO);
    let sum = numx + numo;
    if(sum%2==0 && numx !== numo)return false;
    if(sum%2==1 && numx !== numo+1)return false;
    if(winX && winO)return false;
    if(winO && numo !== numx)return false;
    if(winX && numx !== numo + 1)return false;
    return true;
};