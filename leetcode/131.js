/**
 * @param {string} s
 * @return {string[][]}
 */
 var partition = function(s) {
    // s --> 1-16 
    // dfs(s)为找出 s的所有回文子串--然后递归处理
    const check = function(s) {
        for(let i=0,j=s.length-1;i<j;i++,j--) {
            if(s[i]!==s[j])return false;
        }
        return true;
    }
    const dfs = function(s) {
        let ans = [];
        if(s.length===1)return [[s]];
        for(let i=0;i<s.length-1;i++) {
            if(!check(s.slice(0,i+1)))continue;
            let tmp = dfs(s.slice(i+1)); //[[],[]]
            tmp = tmp.map(v=>
                [s.slice(0,i+1),...v]
            )
            ans = [...ans,...tmp];
        }
        if(check(s))
            ans.push([s]);
        return ans;
    }
    return dfs(s);
};