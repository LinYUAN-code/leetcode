/**
 * @param {number} n
 * @return {number}
 */
 var binaryGap = function(n) {
    let ans = 0;
    let pre = -1;
    let pos = 0;
    while(n) {
        if(n&1 === 1) {
            if(pre!==-1) {
                ans = Math.max(ans,pos - pre);
                pre = pos;
            }
            pre = pos;
        }
        pos++;
        n >>= 1;
    }
    return ans;
};