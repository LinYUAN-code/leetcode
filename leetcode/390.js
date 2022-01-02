/**
 * @param {number} n
 * @return {number}
 */
 var lastRemaining = function(n) {
    // 模拟等差数列

    let a1 = 1;
    let an = n;
    let cnt = n;
    let base = 1;
    let k = 1;
    while(cnt>1) {
        if(k%2===1) { //从头向后删除
            a1 = a1 + base;
            // 如果是奇数那么最后一个也被删除
            an = an - (cnt%2?base:0);
        } else { //从后向前删除
            an = an - base;
            a1 = a1 + (cnt%2?base:0);
        }
        base <<= 1;
        k++;
        cnt >>= 1;
    }
    return a1;
};