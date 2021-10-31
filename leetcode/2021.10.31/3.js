// bfs
/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
 var minimumOperations = function(nums, start, goal) {
    let d = [];
    let bfs = function() {
        let a = [];
        a.push(start);
        for(let i=0;i<=1000;i++)d[i] = -1;
        d[start] = 0;
        while(a.length) {
            let u = a.shift();
            for(let i=0;i<nums.length;i++) {
                let j = nums[i];
                let p = u+j;
                if(p==goal)return d[u]+1;
                if(p>=0&&p<=1000 && d[p]==-1) {
                    d[p] = d[u]+1;
                    a.push(p);
                }
                p = u-j;
                if(p==goal)return d[u]+1;
                if(p>=0&&p<=1000 && d[p]==-1) {
                    d[p] = d[u]+1;
                    a.push(p);
                }
                p = u^j;
                if(p==goal)return d[u]+1;
                if(p>=0&&p<=1000 && d[p]==-1) {
                    d[p] = d[u]+1;
                    a.push(p);
                }
            }
        }
        return -1;
    }
    return bfs()
};
