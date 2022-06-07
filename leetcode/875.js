/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 var minEatingSpeed = function(piles, h) {
    // 简单二分
    function check(mid) {
        let tmp = 0;
        for(let x of piles) {
            tmp += Math.ceil(x/mid);
            if(tmp > h) {
                return false;
            }
        }
        return tmp <= h;
    }
    let l = 1;
    let r = 1000000000;
    while(l<r) {
        let mid = (l+r) >> 1;
        if(check(mid))r = mid;
        else l = mid + 1;
    }
    return l;
};