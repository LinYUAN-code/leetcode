/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
 var maxRunTime = function(n, batteries) {
    // 想到了如何二分答案---但是如何check没有想到...
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