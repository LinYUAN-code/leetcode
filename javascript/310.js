/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findMinHeightTrees = function(n, edges) {
    if(n===1)return [0];
    let e = [];
    for(let i=0;i<n;i++)e[i] = [];
    for(let x of edges) {
        e[x[0]].push(x[1]);
        e[x[1]].push(x[0]);
    }

    let pre = {};
    const bfs = (u,record) => {
        let vis = [];
        let q = [];
        vis[u] = 1;
        q.push(u);
        while(q.length) {
            let d = q.shift();
            for(let j of e[d]) {
                if(!vis[j]) {
                    q.push(j);
                    if(record) {
                        pre[j] = d;
                    }
                    vis[j] = 1;
                }
            }
            if(!q.length)return d;
        }
    }

    let x = bfs(0,false);
    let y = bfs(x,true);
    let path = [];
    while(true) {
        path.push(y);
        if(typeof pre[y] == 'undefined')break;
        y = pre[y];
    }
    let ans = [];
    if(path.length%2===0) {
        ans.push(path[Math.floor(path.length/2)-1]);
    }
    ans.push(path[Math.floor(path.length/2)]);
    return ans;
};