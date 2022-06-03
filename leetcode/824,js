/**
 * @param {number} n
 * @return {number}
 */
var consecutiveNumbersSum = function(n) {
    const check = (k) => {
        if(2*n % k !== 0)return false;
        if((2*n/k + 1 - k)%2!=0)return false;
        // console.log(k,(2*n/k + 1 - k)/2)
        return true;
    }
    let ans = 1;
    for(let i=2;i*i/2 + 1<=n;i++) {
        if(check(i))ans++;
    }
    return ans;
};