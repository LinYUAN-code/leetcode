/**
 * @param {number} n
 * @return {number}
 */
 var totalMoney = function(n) {
    // n ... (n+6) => (n+3)*7
    let p = Math.floor(n/7);
    let r = n % 7;
    let ans = 0;
    for(let i=1;i<=p;i++) {
        ans += (i+3)*7;
    }
    for(let i=p+1;i<p+r+1;i++) {
        ans += i;
    }
    return ans;
};