/**
 * @param {number} n
 * @return {number[]}
 */
 var dicesProbability = function(n) {
    // 动态规划
    // 0 -- 11 * 6
    let f = [];
    let k = n * 6;
    for(let i=0;i<=k;i++)f[i] = 0;
    f[0] = 1;
    let base = 1/6;
    for(let o=0;o<n;o++)
        for(let i=k;i>=0;i--) {
            let tem = 0;
            for(let j=i-1,time=0;j>=0&&time<6;j--,time++) {
                tem  += base * f[j];
            }
            f[i] = tem;
        }

    return f.slice(n);
};