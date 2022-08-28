/**
 * @param {number} k
 * @return {number}
 */
 var preimageSizeFZF = function(k) {
    // Math.min(num(2),num(5)) --> num(5)
    // 二分 log2n
    const get5 = (x) => {
        let ans = 0;
        while(x!=0) {
            x = Math.floor(x/5);
            ans += x;
        }
        return ans;
    }
    const getF = (k) => {
        let l = 0;
        let r = 5 * k;
        while(l<r) {
            let mid = Math.floor((l+r)/2);
            if(get5(mid)>=k)r = mid;
            else l = mid + 1;
        }
        return l;
    }
    return getF(k+1) - getF(k);
};