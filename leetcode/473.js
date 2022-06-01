/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
 var makesquare = function(matchsticks) {
    // 也就是可不可以分成四组 然后每组的和相同
    // 注意到数据只有15
    // 暴力所有的可能性有 4^15-->2^30
    let n = matchsticks.length;
    let sum = 0;
    for(let x of matchsticks) {
        sum += x;
    }
    if(Math.floor(sum/4) * 4 !== sum)return false;
    let ans = false;
    const exp = sum / 4;
    matchsticks.sort((a,b)=>b-a);
    const dfs = (u,s1,s2,s3,s4) => {
        if(s1>exp || s2>exp || s3>exp || s4>exp)return ;
        if(u===n) {
            if(s1 === s2 && s1 === s3 && s1 === s4) {
                ans = true;
            }
            return 
        }
        dfs(u+1,s1+matchsticks[u],s2,s3,s4);
        dfs(u+1,s1,s2+matchsticks[u],s3,s4);
        dfs(u+1,s1,s2,s3+matchsticks[u],s4);
        dfs(u+1,s1,s2,s3,s4+matchsticks[u]);
    }
    dfs(0,0,0,0,0);
    return ans;
};