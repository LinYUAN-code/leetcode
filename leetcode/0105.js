/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
 var oneEditAway = function(first, second) {
    let i = 0;
    let j = 0;
    let cnt = 0;
    let a,b;
    if(first.length > second.length) {
        a = first;
        b = second;
    } else {
        a = second;
        b = first;
    }
    if(a.length - b.length > 1)return false;
    while(i<a.length && j<b.length) {
        if(a[i]!==b[j]) {
            if(cnt)return false;
            if(a.length===b.length) {
                cnt++;
                i++;
                j++;
            } else {
                i++;
                cnt++;
            }
        } else {
            i++;
            j++;
        }
    }
    return true;
};