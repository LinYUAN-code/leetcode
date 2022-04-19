/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
 var shortestToChar = function(s, c) {
    let a = [];
    let b;
    let ans = [];
    for(let i=0;i<s.length;i++) {
        if(s[i]===c) {
            a[i] = i;
        } else {
            a[i] = a[i-1];
        }
    }
    for(let i=s.length-1;i>=0;i--) {
        if(s[i]===c) {
            b = i;
        } 
        ans[i] = 999999999;
        if(typeof b !== 'undefined') {
            ans[i] = b-i;
        }
        if(typeof a[i]!=='undefined') {
            ans[i] = Math.min(ans[i],i-a[i]);
        }
    }
    return ans;
};