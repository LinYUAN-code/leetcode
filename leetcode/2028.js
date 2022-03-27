/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
 var missingRolls = function(rolls, mean, n) {
    const m = rolls.length;
    let sum = mean*(n+m) - rolls.reduce((pre,cur)=>pre+cur,0);
    let mp = {};
    if(sum > n*6 || sum < n)return [];
    let tem = n;
    let ans = [];
    for(let i=0;i<n;i++) {
        if(tem<sum) {
            if(sum - tem > 5) {
                ans[i] = 6;
                tem+=5;
            }  else {
                ans[i] = sum - tem + 1;
                tem += sum - tem;
            }
        }else {
            ans[i] = 1;
        }
    }
    return ans;
};