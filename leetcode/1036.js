/**
 * @param {number[][]} blocked
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */
 var isEscapePossible = function(blocked, source, target) {
    // 感觉直接bfs就可以了
    // 但是暴力的bfs不可行 x*y == 10^12
    // 但是其实有意思的一点是障碍物的个数很少 可能不会造成严整的奇怪路径
    // 什么情况下我们可能到不了 目标点 
    // 那就是 原点被包围且目标点不在里面 或者反之
    // 200个障碍物体可以围城的面积有限 所以我们可以转为判定走一定步数来判断是不是被障碍物包围 并且 对应点是否在里面
    // 200个障碍物所能包围的最大面积---我直接n^2+n 懒得算了 反正不可能超过这个
    let dx = [-1,1,0,0];
    let dy = [0,0,-1,1];
    let step = blocked.length*blocked.length + blocked.length;
    const equal = (a,b) => a[0]===b[0] && a[1]===b[1];
    const isIn = (a,b) => {
        return b.some(v=>{
            return equal(v,a);
        });
    }
    const bfs = function(s,t) {
        // 能不能走step步
        let d = step;
        let q = [];
        let mp = {};
        mp[s.toString()] = 1;
        q.push({
            p: s,
            d: 0            
        });
        let x,y;
        while(q.length && d > 0) {
            let u = q.shift();
            for(let i=0;i<4;i++) {
                x = u.p[0] + dx[i];
                y = u.p[1] + dy[i];
                if(x<0||x>=1000000||y<0||y>=1000000)continue;
                let p = [x,y];
                if(equal(p,t))return true;
                if(isIn(p,blocked))continue;
                if(mp[p.toString()])continue;
                d--;
                mp[p.toString()] = 1;
                q.push({
                    p: p,
                    d: u.d+1
                });
            }
        }
        if(d>0)return false;
        return true;
    }
    return bfs(source,target) && bfs(target,source);
};