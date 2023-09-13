/**
 * @param {string[]} strs
 * @return {number}
 */
 var findLUSlength = function(strs) {
    // 最长的子序列一定是strs中的某一个
    // 反证法易证
    let ans = -1;
    const contain = (a,b) => {
        let i = 0;
        for(let j=0;j<b.length;j++) {
            if(b[j]===a[i]) {
                i++;
                if(i===a.length)return true;
            }
        }
        return false;
    }
    for(let i=0;i<strs.length;i++) {
        if(strs[i].length < ans)continue;
        let flag = false;
        for(let j=0;j<strs.length;j++) {
            if(i===j)continue;
            if(contain(strs[i],strs[j])) {
                flag = true;
                break;
            }
        }
        if(!flag)ans = strs[i].length;
    }
    return ans;
};