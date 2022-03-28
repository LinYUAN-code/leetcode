/**
 * @param {number} n
 * @return {boolean}
 */
 var hasAlternatingBits = function(n) {
    let pre = -1;
    while(n) {
        let t = n & 1;
        if(t===pre)return false;
        pre = t;
        n >>= 1;
    }
    return true;
};