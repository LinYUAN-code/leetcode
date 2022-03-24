/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var findKthNumber = function(n, k) {

    const getCount = function(x,v) {
        const a = x.toString();
        const b = v.toString();
        let n = a.length;
        let m = b.length;
        let k = m-n;
        let u = parseInt(b.slice(0,n));
        let ans = 0;
        for(let i=0;i<k;i++)ans += Math.pow(10,i);
        if(u>x)ans += Math.pow(10,k);
        else if(u==x)ans += v - x * Math.pow(10,k) + 1;
        return ans;
    }
    let ans = 1;
    while(k!=1) {
        let num = getCount(ans,n);
        if(k>num) {
            k -= num;
            ans++;
        } else {
            ans *= 10;
            k--;
        }
    }
    return ans;
};