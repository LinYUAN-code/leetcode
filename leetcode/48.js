/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    // 这题需要知道旋转公式
    /*
    *  cos sin     x,y 经过变化会成为  y,-x     
    *  -sin cos 
    */
    // 所有点都绕中心点进行旋转，我们需要对点的坐标进行一次变化
    // 为了避免处理小数的情况--我们将所有点的坐标都乘以2
    // 中心点 (n,n)
    // 然后就有 (x/2,y/2) === (x-n,y-n) ===> (y-n,n-x)  === (y,2n-x) ==> (y/2,n-x/2)
    // 于是我们就得到了坐标的变化公式 (x,y) ==> (y,n-x)
    // 然后我们只需要对 四分之一的部分进行处理就ok了--每次处理旋转四个
    // 而且对于旋转过的点我们不会进行重复旋转
    let tem = 0;
    let n = matrix.length;
    const floor = Math.floor
    let mp = [];
    for(let i=0;i<n;i++)mp[i] = [];
    for(let i=0;i<n;i++)
        for(let j=0;j<n;j++) {
            if(mp[i][j])continue;
            let px = i;
            let py = j;
            tem = matrix[i][j];
            mp[px][py] = 1;
            for(let o=0;o<4;o++) {
                let x = py;
                let y = n-px-1;
                px = x;
                py = y;
                mp[x][y] = 1;
                [tem,matrix[x][y]] = [matrix[x][y],tem];
            }
        }
    return ;
};