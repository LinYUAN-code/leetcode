/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
 var makesquare = function(matchsticks) {
    // 状态压缩+动态规划
    let f = [];
    let n = matchsticks.length;
    f[0] = 0;
    let sum = 0;
    for(let x of matchsticks) {
        sum += x;
    }
    if(Math.floor(sum/4)*4 !== sum)return false;
    let tar = sum / 4;

    for(let i=1;i<(1<<n);i++) {
        f[i] = -1;
        for(let j=0;j<n;j++) {
            if(!(i & (1<<j))) {
                continue;
            }
            let pre = i ^ (1<<j);
            if( f[pre]>=0 && f[pre]+matchsticks[j]<=tar) {
                f[i] = (f[pre] + matchsticks[j])%tar;
            }
        }
    }
    return f[(1<<n)-1]===0;
};