/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var findTheWinner = function(n, k) {
    // 约瑟夫问题
    let ans = 0;
    for(let i=2;i<=n;i++) {
        ans = (ans+k)%i;
    }
    return ans+1;
};