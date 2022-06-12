/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
 var findAndReplacePattern = function(words, pattern) {
    // 利用哈希表进行模拟
    const isSame = (a,b) => {
        let mp1 = {};
        let mp2 = {};
        for(let i=0;i<a.length;i++) {
            let c1 = a[i];
            let c2 = b[i];
            if(!mp1[c1] && !mp2[c2]) {
                mp1[c1] = c2;
                mp2[c2] = c1;
            }
            if(c2 !== mp1[c1])return false;
        }
        return true;
    }
    let ans = [];
    for(let x of words)  {
        if(isSame(x,pattern)) {
            ans.push(x);
        }
    }
    return ans;
};