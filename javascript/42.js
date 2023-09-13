/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // 暴力---n ---> 观察可以知道--每个点可以存储的水就是它两边的最大高度之间的最小高度。
    let ans = 0;
    let l = [];
    let r = [];
    l[0] = -1;
    r[height.length-1] = -1;
    for(let i=1;i<height.length;i++) {
        l[i] = Math.max(l[i-1],height[i-1]);
    }
    for(let i=height.length-2;i>=0;i--) {
        r[i] = Math.max(r[i+1],height[i+1]);
    }
    for (let i=1;i<height.length-1;i++) {
        let minn = Math.min(l[i],r[i]);
        if(minn<=height[i])continue;
        ans += (minn-height[i]);
    }
    return ans;
};