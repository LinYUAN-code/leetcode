/**
 * @param {number} n
 * @return {number}
 */
 var findNthDigit = function(n) {
    // 直接计算模拟就好了
    // 1位数有9个 10位数有2*100个 100位数字有3*1000个
    // 我们先找到它在哪一位
    if(n<10)return n;
    n -= 9;
    let base = 10;
    let b = 2;
    for(;;b++) {
        if(n < b*base*9) {
            break;
        }
        n -= b*base*9;
        base *= 10;
    }
    // console.log(n,b);
    // 确定它在哪一个数字里
    let bb = Math.floor((n-0.5)/b);
    let k = base + bb;
    n -= bb*b;
    n = b - n + 1;
    // console.log(k,n,bb)
    for(let i=0;i<n;i++) {
        if(i===n-1)return k%10;
        k = Math.floor(k/10);
    }

    return k;
};