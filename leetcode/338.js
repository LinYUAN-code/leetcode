/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    // 每次都算那么就是nlogn
    // 能不呢动态规划呢？--使用lowbit
    if (!n) return [0];
    let f = [0,1];
    for(let i=2;i<=n;i++) {
        f[i] = f[i-(i&(-i))] + 1;
    }
    return f;
};