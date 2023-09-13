/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let dx = [0,1,0,-1];
    let dy = [1,0,-1,0];
    let dir = 0;
    let ans = [];
    let mp = [];
    for(let i=0;i<n;i++)mp[i] = [];
    const dfs = function(px,py) {
        ans.push(matrix[px][py]);
        mp[px][py] = 1;
        let x,y;
        let p = 0;
        while(p<4) {
            p++;
            x = px + dx[dir];
            y = py + dy[dir];
            if(x<0||x>=n||y<0||y>=m||mp[x][y]) {
                dir  = (dir+1)%4;
                continue;
            } else break;
        }
        if(x<0||x>=n||y<0||y>=m||mp[x][y])return ;
        dfs(x,y);
    }
    dfs(0,0);
    return ans;
};