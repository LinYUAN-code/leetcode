/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
 var countPrimeSetBits = function(left, right) {
    let p = {};
    p[2] = p[3] = p[5] = p[7] = p[11] = p[13] = p[17] = p[19] = 1;
    let ans = 0;
    const lowbit = (x) => {
        return x & -x;
    }
    const count = (x) => {
        let ans = 0;
        while(x) {  
            ans++;
            x -= lowbit(x);
        }
        return ans;
    }
    for(let i=left;i<=right;i++) {
        if(p[count(i)])ans++;
    }
    return ans;
};