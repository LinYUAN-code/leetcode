/**
 * @param {number[][]} forest
 * @return {number}
 */
 var cutOffTree = function(forest) {
    let n = forest.length;
    let m = forest[0].length;
    let a = [];
    let k = 0;
    // 加入所有的树
    for(let i=0;i<n;i++)
        for(let j=0;j<m;j++) {
            if(forest[i][j]<=1)continue;
            a.push(forest[i][j]);
        }

    a.sort((a,b)=>{
        return a - b;
    })
    const bfs = () => {
        let dx = [-1,1,0,0];
        let dy = [0,0,-1,1];
        let q = [];
        q.push({
            d: forest[0][0],
            x: 0,
            y: 0,      
            s: 0,      
        });
        let visted = [];
        for(let i=0;i<n;i++)visted[i] = [];
        visted[0][0] = 1;
        while(q.length) {
            let u = q.shift();
            if(u.d === a[k]) {
                q = [];
                k++;
                if(k===a.length)return u.s;
                for(let i=0;i<n;i++)
                    for(let j=0;j<m;j++) {
                        visted[i][j] = 0;
                    }
                visted[u.x][u.y] = 1;
            }
            for(let i=0;i<4;i++) {
                let x = u.x + dx[i];
                let y = u.y + dy[i];
                if(x<0||x>=n||y<0||y>=m)continue;
                if(visted[x][y])continue;
                if(!forest[x][y])continue;
                visted[x][y] = 1;
                q.push({
                    d: forest[x][y],
                    x,
                    y,
                    s: u.s+1
                });
            }
        }

        return -1;
    }
    
    return bfs();
};