/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
 var canIWin = function(maxChoosableInteger, desiredTotal) {
    // 1^20
    // 记忆化搜索
    let mp = {};
    const dfs = (used,cur) => {
        if(typeof mp[used] !== 'undefined')return mp[used];
        for(let i=1;i<=maxChoosableInteger;i++) {
            if((used>>i)&1)continue;
            if(cur + i >= desiredTotal || !dfs(used | (1<<i),cur+i)) {
                mp[used] = true;
                return true;
            }
        }
        mp[used] = false;
        return false;
    }
    if((1+maxChoosableInteger)*maxChoosableInteger / 2 < desiredTotal)return false;
    return dfs(0,0);
};