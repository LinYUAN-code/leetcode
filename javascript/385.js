/**
 * @param {string} s
 * @return {NestedInteger}
 */
 var deserialize = function(s) {
    if(parseInt(s))return new NestedInteger(s);
    const p = parseInt;
    let stk = [];
    let res = [];
    s = s.split(",");
    // 用一个栈去模拟
    for(let x of s) {
        let n = x.length;
        let l = 0;
        let r = n-1;
        while(x[l]==='[') {
            stk.push("[");
            l++;
        }
        let tmp = [];
        while(x[r]===']') {
            tmp.push("]");
            r--;
        }
        if(l<=r)stk.push(x.slice(l,r+1));
        stk.push(...tmp);
    }
    let r = stk.length-1;
    const dfs = () => {
        if(stk[r]!==']')return new NestedInteger();
        r--;
        let ans = new NestedInteger();
        let tmp = [];
        while(stk[r]!=='[') {
            if(stk[r]===']') {
                tmp.push(dfs());
            } else {
                tmp.push(new NestedInteger(stk[r]))
            }
            r--;
        }
        for(let i=tmp.length-1;i>=0;i--)ans.add(tmp[i]);
        return ans;
    }
    return dfs();
};