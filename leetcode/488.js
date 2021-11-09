/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
 var findMinStep = function(board, hand) {
    // 返回最小操作数或者是-1（无解）
    // 数据范围---》 桌子上球的数量[1,16]  手中球的数量[1,5]
    // 手中球只有1--5个 所以可以暴力 时间复杂度 5!*16^5 

    // 看看能不能简化
    // 记忆化
    // 减少无用搜索
    let mp = {};
    let inf = 0x3f3f3f3f;
    const check = function(b) {
        for(let i=0;i+2<b.length;i++) {
            let c = b[i];
            let k = i+1;
            for(;k<b.length;k++) {
                if(b[k]!==c)break;
            }
            if(b[k]!==c)k--;
            if(k-i+1>=3) {
                return b.slice(0,i)+b.slice(k+1);
            }
        }
        return b;
    }
    
    const dfs = function(b,h,count) {
        if(mp[b+'+'+h])
            return mp[b+'+'+h];
        while(true) {
            let s = check(b);
            if(b.length === s.length)break;
            b = s;
        }
        if(b.length===0) {
            ans = Math.min(ans,count);
            return count;
        }
        if(count>=ans || !h.length) {
            return inf
        }
        let minn = inf;      
        for(let i=0;i<h.length;i++) {
            // 1.无用搜索
            if(i>0 && h[i]===h[i-1])continue;
            for(let j=0;j<=b.length;j++) {
                let p = b.slice(0,j) + h[i] + b.slice(j);
                let nh = h.slice(0,i) + h.slice(i+1);
                minn = Math.min(minn,dfs(p,nh,count+1));
                // 2.减少无用搜索
                if(h[i]===b[j])j++;
            }
        }   
        mp[b+'+'+h] = minn;
        return minn;
    }
    let ans = inf;
    dfs(board,hand,0);
    if(ans===inf)return -1;
    else return ans;
};