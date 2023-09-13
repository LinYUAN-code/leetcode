/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrder = function(numCourses, prerequisites) {
    // [a,b] 表示选修a 之前必须要修b
    // 将所有课程全部修完，返回一种可行的顺序。
    // 相当于拓扑排序了
    // 这里采用bfs求拓扑排序的算法
    let d = [];
    for(let i=0;i<numCourses;i++)
        d[i] = 0;
    let e = [];
    for(let i=0;i<numCourses;i++)e[i] = [];
    for(let x of prerequisites) {
        e[x[1]].push(x[0]);
        d[x[0]]++;
    }
    let ans = [];
    const topu = function() {
        const q = [];
        for(let i=0;i<numCourses;i++) 
            if(!d[i])q.push(i);
        while(q.length) {
            let x = q.shift();
            ans.push(x);
            for(let i=0;i<e[x].length;i++) {
                let j = e[x][i];
                d[j]--;
                if(!d[j]) {
                    q.push(j);
                }
            }
        }
    }
    topu();
    if(ans.length != numCourses)return [];
    return ans;
};