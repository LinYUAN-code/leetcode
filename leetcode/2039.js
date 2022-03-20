/**
 * @param {number[][]} edges
 * @param {number[]} patience
 * @return {number}
 */
 var networkBecomesIdle = function(edges, patience) {
    // 计算出每一个节点到0号点的最短距离就完事了 bfs
    // 计算出每一个点最晚发出的时间---
    // 2*d / k * k + 2*d +  1
    let n = patience.length;
    let e = [];
    for(let i=0;i<n;i++)e[i] = [];
    for(let x of edges) {
        e[x[0]].push(x[1]);
        e[x[1]].push(x[0]);
    }
    let d = [];
    for(let i=0;i<n;i++)d[i] = -1;
    const bfs = function() {
        let q = [];
        q.push(0);
        let head = 0;
        d[0] = 0;
        while(head < q.length) {
            let u = q[head++];
            for(let x of e[u]) {
                if(d[x]===-1) {
                    d[x] = d[u] + 1;
                    q.push(x);
                }
            }
        }
    };
    bfs();
    let ans = 0;
    for(let i=1;i<n;i++) {
        ans = Math.max(ans,Math.floor((d[i]*2-1)/patience[i])*patience[i]+1+2*d[i]);
    }
    return ans;
};