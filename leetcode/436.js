/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
 var findRightInterval = function(intervals) {
    // 二分 520快乐
    let a = [];
    for(let i=0;i<intervals.length;i++) {
        a[i] = [intervals[i][0],i];
    }
    a.sort((a,b)=>{
        if(a[0]===b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });
    // console.log(a);
    const find = (m) => {
        let l = 0;
        let r = a.length-1;
        while(l<r){
            let mid = (l+r) >> 1;
            if(a[mid][0] >= m)r = mid;
            else l = mid + 1;
        }
        if(a[l][0] < m)return -1;
        return a[l][1];
    }
    let ans = [];
    for(let i=0;i<intervals.length;i++) {
        ans[i] = find(intervals[i][1]);
    }
    return ans;
};