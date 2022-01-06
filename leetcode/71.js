/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
    // 维护一个栈就好了
    let stk = [];
    let s = path.split("/");
    s = s.filter(v=>{
        return v;
    });
    for(let x of s) {
        if(x==='.') {
            continue;
        } else if(x==='..') {
            if(stk.length)stk.pop();
        } else {
            stk.push(x);
        }
    }
    return "/" + stk.join("/");
};