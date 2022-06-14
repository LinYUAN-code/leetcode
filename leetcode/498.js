/**
 * @param {number[][]} mat
 * @return {number[]}
 */
 var findDiagonalOrder = function(mat) {
    // 模拟
    let ans = [];
    let n = mat.length;
    let m = mat[0].length;
    for(let i=0;i<n+m-1;i++) {
        if(i%2) {
            let y = Math.min(m-1,i);
            let x = i - y;
            while(x<n && y>=0) {
                ans.push(mat[x][y]);
                x++;
                y--;
            }
        } else {
            let x = Math.min(n-1,i);
            let y = i - x;
            while(x>=0 && y<m) {
                ans.push(mat[x][y]);
                x--;
                y++;
            }
        }
    }
    return ans;
};