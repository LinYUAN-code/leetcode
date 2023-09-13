/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
 var maxRunTime = function(n, batteries) {
    // 想到了如何二分答案---但是如何check没有想到...
    /*
        假定时间为t
        我们可以把问题转化为 填充一个 t*n 的矩阵 填充过程中每一行都不能有相同颜色的电池
        理所应当的把电池容量和batteries取一个min
        取和然后判断
        这个过程我们一定可以实现...
    */
    const check = function(mid) {
        let sum = 0;
        batteries.forEach(v=>{
            sum += Math.min(mid,v);
        })
        return sum >= mid*n;
    }
    let l = 0,r = 100000000000000;
    while(l<r) {
        let mid = Math.floor((l+r+1)/2);
        if(check(mid))l = mid;
        else r = mid - 1;
    }
    return l;
};