/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
 var findJudge = function(n, trust) {
    let din = [];
    let dout = [];
    for(let i=1;i<=n;i++) {
        din[i] = dout[i] = 0;
    }
    for(let x of trust) {
        din[x[1]]++;
        dout[x[0]]++;
    }
    for(let i=1;i<=n;i++) {
        if(dout[i]===0 && din[i]===n-1)return i;
    }
    return -1;
};