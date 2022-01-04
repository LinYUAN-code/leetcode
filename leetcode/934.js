/**
 * @param {number[][]} grid
 * @return {number}
 */
 var shortestBridge = function(grid) {
    // 首先我们找到一座岛的所有点 然后将其加入到队列中去 
    // 接着bfs 直到第一次遇到

    // ok
    let q = [];
    let n = grid.length;
    let m = grid[0].length;

    let dx = [-1,1,0,0];
    let dy = [0,0,-1,1];

    for(let i=0;i<n;i++) {
        let flag = false;
        for(let j=0;j<m;j++)
            if(grid[i][j]) {

                let mp = {};
                const find = function(x,y) {
                    grid[x][y] = 2;
                    q.push([x,y,0]);
                    for(let i=0;i<4;i++) {
                        let nx = x + dx[i];
                        let ny = y + dy[i];
                        if(nx<0||nx>=n||ny<0||ny>=m||!grid[nx][ny])continue;
                        if(grid[nx][ny]===1) {
                            find(nx,ny);
                        }
                    }
                }
                find(i,j);
                flag = true;
                break;
            }
        if(flag)break;
    }

    while(q.length) {
        let u = q.shift();
        let x = u[0];
        let y = u[1];
        let d = u[2];
        for(let i=0;i<4;i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if(nx<0||nx>=n||ny<0||ny>=m||grid[nx][ny]===2)continue;
            if(grid[nx][ny]===1) {
                return d;
            }
            grid[nx][ny] = 2;
            q.push([nx,ny,d+1]);
        }
    }
    return -1;
};