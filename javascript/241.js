/**
 * @param {string} expression
 * @return {number[]}
 */
 var diffWaysToCompute = function(expression) {
    // 分治 + 记忆化
    let f = {};
    const handleExpr =  (s) => {
        let tmp = "";
        let ans = [];
        for(let x of s) {
            if(isNaN(x)) {
                if(tmp)ans.push(parseInt(tmp));
                tmp = "";
                ans.push(x);
            } else {
                tmp += x;
            }
        }
        if(tmp) {
            ans.push(parseInt(tmp));
        }
        return ans;
    }
    const arr = handleExpr(expression);
    if(arr.length===1)return arr;
    console.log(arr);
    let dfs = (l,r) => {
        if(l>r)return [0];
        if(f[l+","+r]) {
            return f[l+","+r];
        }
        let ans = [];
        if(l===r) {
            return [arr[l]];
        }
        for(let i=l+1;i<r;i++) {
            if(isNaN(arr[i])) {
                let a1 = dfs(l,i-1);
                let a2 = dfs(i+1,r);
                for(let x of a1) 
                    for(let y of a2) {
                        switch(arr[i]) {
                            case '*':
                                ans.push(x*y);
                                break;
                            case '+':
                                ans.push(x+y);
                                break;
                            case '-':
                                ans.push(x-y);
                                break;
                        }  
                    }
            }
        }
        return f[l+","+r] = ans;
    }
    dfs(0,arr.length-1);
    return f[0+","+(arr.length-1)];
};