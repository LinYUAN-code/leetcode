/**
 * @param {string} s
 * @return {number}
 */
 var maxPower = function(s) {
    let ans = 0;
    const max = Math.max;
    let pre = "A";
    let tem = 0;
    for(let x of s) {
        if(x !== pre) {
            ans = max(ans,tem);
            tem = 1;
            pre = x;
        } else {
            tem++;
        }
    }
    ans = max(ans,tem);
    return ans;
};