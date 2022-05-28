/**
 * @param {string} s
 * @return {string}
 */
 var removeOuterParentheses = function(s) {
    let ans = "";
    let tmp = "";
    let lNum = 0;
    for(let x of s) {
        tmp += x;
        if(x==='(') {
            lNum++;
        } else if(x===')') {
            lNum--;
        }
        if(!lNum) {
            ans += tmp.slice(1,tmp.length-1);
            lNum = 0;
            tmp = "";
        }
    }
    return ans;
};