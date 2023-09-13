/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
    // 学习课程 ai 则 必须 先学习课程  bi  [ai,bi]
    // 请你判断是否可能完成所有课程的学习 ---》 就是判断图中有没有环
    // 判无向图环常见方法dfs，bfs
    // 拓扑排序也可以判有向图环
    let deg = [];
    let e = [];
    for(let i=0;i<numCourses;i++) {
        e[i] = [];
        deg[i] = 0;
    }
    for(let i=0;i<prerequisites.length;i++) {
        let o = prerequisites[i];
        e[o[1]].push(o[0]);
        deg[o[0]]++;
    }
    let q = [];
    for(let i=0;i<numCourses;i++)
        if(!deg[i])q.push(i);
    while(q.length) {
        let u = q.pop();
        for(let i=0;i<e[u].length;i++) {
            let  j = e[u][i];
            deg[j]--;
            if(!deg[j]) {
                q.push(j);
            }
        }
    }
    for(let i=0;i<numCourses;i++) {
        if(deg[i])return false;
    }
    return true;
};