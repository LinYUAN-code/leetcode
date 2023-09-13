/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var findKthNumber = function(m, n, k) {
    let l = 1;
    let r = 900000000;
    const check = (x) => {
        let ans = 0;
        for(let i=1;i<=m;i++) {
            ans += Math.min(Math.floor(x/i),n);
        }
        return ans >= k;
    }
    while(l<r) {
        let mid = (l+r) >> 1;
        if(check(mid))r = mid;
        else l = mid + 1;
    }
    return l;
};