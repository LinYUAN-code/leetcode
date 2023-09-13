/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
 var superPow = function(a, b) {
    // 10*log10b
    const quick = function(a,b) {
        const mod = 1337;
        a %= mod;
        let ans = 1;
        for(let i=b.length-1;i>=0;i--) {
            let tem = 1;
            for(let j=0;j<b[i];j++)tem = (tem*a)%mod;
            if(b[i])ans = (ans * tem)%mod;
            let p = a;
            for(let i=0;i<9;i++)a = (a*p)%mod;
        }
        return ans;
    }
    return quick(a,b)
};