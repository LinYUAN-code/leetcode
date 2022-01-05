/**
 * @param {string} s
 * @return {string}
 */
 var modifyString = function(s) {
    // 只要和两边字母不通就行了
    // 我这里只使用 a b c 好了
    let ans = "";
    let b = ['a','b','c'];
    for(let i=0;i<s.length;i++) {
        if(s[i]!=='?')ans+=s[i];
        else {
            let id = 0;
            if((i-1>=0 && ans[i-1]===b[id]) || (i+1<s.length && s[i+1]===b[id]))id++;
            if(!id) {
                ans += b[id];
                continue;
            }
            if((i-1>=0 && ans[i-1]===b[id]) || (i+1<s.length && s[i+1]===b[id]))id++;
            if(id===1) {
                ans += b[id];
                continue;
            }
            ans += b[2];
        }
    }
    return ans;
};