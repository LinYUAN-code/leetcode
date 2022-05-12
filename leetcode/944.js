/**
 * @param {string[]} strs
 * @return {number}
 */
 var minDeletionSize = function(strs) {
    let n = strs.length;
    let m = strs[0].length;
    let ans = 0;
    for(let i=0;i<m;i++) {
        let pre = "";
        for(let j=0;j<n;j++) {
            if(!pre || pre<=strs[j][i]) {
                pre = strs[j][i];
            } else {
                ans++;
                break;
            }
        }
    }
    return ans;
};