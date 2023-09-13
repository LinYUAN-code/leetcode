/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
 var minStickers = function(stickers, target) {
    // 26个小写英文单词
    // 先判断是否有解
    let mp = {};
    for(let x of stickers) {
        for(let s of x) {
            mp[s] = 1;
        }
    }
    for(let s of target) {
        if(!mp[s])return -1;
    }
    let n = stickers.length;
    let m = target.length;
    let f = {};
    f[0] = 0;
    // 记忆化搜索
    const dfs = (state) => {
        if(typeof f[state]!=='undefined')return f[state];
        let minn = 9999999;
        for(let x of stickers) {
            let tem = state;
            for(let s of x) {
                for(let i=0;i<m;i++) {
                    if(!((tem>>i)&1))continue;
                    if(target[i] === s) {
                        tem -= (1<<i);
                        break;
                    }
                }
            }
            if(tem===state)continue;
            minn = Math.min(minn,dfs(tem));
        }
        minn++;
        f[state] = minn;
        return minn;
    }
    return dfs((1<<m)-1);
};