/**
 * @param {number} n
 * @return {number}
 */
 var countDigitOne = function(n) {
    // 计数DP
    // 首先计算--0-999能有多少1
    /*
        0 2-9 ---> 9*f[i-1]
        1 -->    num[i-1] + f[i-1]
    */


    let ans = 0;
    let a = n.toString().split("").map(v=>parseInt(v));

    let f = [];
    f[0] = 0;
    f[1] = 1;
    for(let i=2;i<a.length;i++) {
        f[i] = 10 * f[i-1] + 10**(i-1);
    }
    let count = 0;
    for(let i=0;i<a.length;i++) {
        if(a[i]===1) {
            ans += f[a.length - i - 1];
            ans += (count) * (10 ** (a.length - i -1));
            count++;
        } else if(a[i]>1) {
            ans += (a[i]) * f[a.length - i - 1];
            ans += count * (a[i]) * (10 ** (a.length -i -1)) + (10 ** (a.length-i-1));
        }
        if(i===a.length-1)ans += count;
    }

    return ans;
};