/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let n = accounts.length;
    let m = accounts[0].length;
    let ans = 0;
    const max = Math.max;
    for(let i=0;i<n;i++) {
        let tmp = 0;
        for(let j=0;j<m;j++) {
            tmp += accounts[i][j];
        }  
        ans = max(ans,tmp); 
    }
    return ans;
};