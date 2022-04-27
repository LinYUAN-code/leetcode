/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
 var pacificAtlantic = function(heights) {
    // 两次bfs
    let n = heights.length;
    let m = heights[0].length;
    let q = [];
    let mp1 = {};
    let mp2 = {};
    let dx = [-1,1,0,0];
    let dy = [0,0,1,-1];
    const bfs = (mp) => {
        while(q.length) {
            let [x,y] = q.shift();
            for(let i=0;i<4;i++) {
                let nx = x + dx[i];
                let ny = y + dy[i];
                if(nx<0||nx>=n||ny<0||ny>=m)continue;
                if(heights[x][y] > heights[nx][ny])continue;
                if(!mp[nx*m+ny]) {
                    mp[nx*m+ny] = 1;
                    q.push([nx,ny]);
                }
            }
        }
    }
    for(let i=0;i<m;i++) {
        q.push([0,i]);
        mp1[0*m+i]=1;
    }
    for(let i=1;i<n;i++) {
        q.push([i,0]);
        mp1[i*m+0]=1;
    }
    bfs(mp1);

    for(let i=0;i<m;i++) {
        q.push([n-1,i]);
        mp2[(n-1)*m+i]=1;
    }
    for(let i=0;i<n-1;i++) {
        q.push([i,m-1]);
        mp2[i*m+(m-1)]=1;
    }
    bfs(mp2);

    let ans = [];
    for(let i=0;i<n;i++) 
        for(let j=0;j<m;j++) {
            if(mp1[i*m+j] && mp2[i*m+j])ans.push([i,j]);
        }
    return ans;
};