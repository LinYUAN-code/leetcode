/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
 var construct = function(grid) {
    // 矩阵蛮小的-->甚至可以直接暴力
    const no = (val) => {
        return val===undefined?0:val;
    }
    let s = [];
    let n = grid.length;
    for(let i=-1;i<=n;i++)s[i] = [];
    for(let i=0;i<n;i++)
        for(let j=0;j<n;j++) {
            s[i][j] = no(s[i-1][j]) + no(s[i][j-1]) - no(s[i-1][j-1]) + grid[i][j];
        }
    // （x，y） 左上角坐标 len当前正方形长度
    const dfs = (x,y,len) => {
        let sum = no(s[x+len-1][y+len-1]) + no(s[x-1][y-1]) - no(s[x-1][y+len-1]) - no(s[x+len-1][y-1]);
        // console.log(x,y,len,sum,no(s[x+len-1][y+len-1]),no(s[x-1][y-1]), no(s[x-1][y]) , no(s[x][y-1]));
        if(sum === len*len) {
            return new Node(1,true,null,null,null,null);
        } else if(!sum) {
            return new Node(0,true,null,null,null,null);
        } else {
            len = len / 2;
            return new Node(1,false,dfs(x,y,len),dfs(x,y+len,len),dfs(x+len,y,len),dfs(x+len,y+len,len));
        }
    }
    return dfs(0,0,n);
};