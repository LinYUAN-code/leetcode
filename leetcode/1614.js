/**
 * @param {string} s
 * @return {number}
 */
 var maxDepth = function(s) {
    let stk = [];
    let ans = 0;
    for(let x of s) {
        if(x === '(') {
            stk.push(x);
        } else if( x !== ')');
        else  {
            stk.pop();
        }
        ans = Math.max(ans,stk.length);
    }
    return ans;
};