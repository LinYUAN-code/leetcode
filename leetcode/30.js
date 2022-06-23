/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
 var findSubstring = function(s, words) {
    /*
        子串的长度完全相同
        并且并且需要全部的单词
        同时注意到滑动窗口的特新

        滑动窗口技巧--我们可以每次移动k 但是相应的开头要多次开始滑动
        时间复杂度 n*m
    */
    // 检查两个map是否相同
    const isSame = (a,b) => {
        for(let key in a) {
            if(!a[key])continue;
            if(a[key] !== b[key])return false;
        }
        for(let key in b) {
            if(!b[key])continue;
            if(a[key] !== b[key])return false;
        }
        return true;
    }
    let num = words.length;
    let m = words[0].length;
    let len = num * m;
    let n = s.length;
    let r = 0;
    let ans = [];
    let mp = {};
    for(let x of words) {
        if(!mp[x])mp[x] = 0;
        mp[x]++;
    }
    for(let i=0;i<m;i++) {
        if(i+len>n)break;
        let oo = {};
        for(let j=0;j<num;j++) {
            let ss = s.slice(i+j*m,i+j*m+m);
            if(!oo[ss])oo[ss] = 0;
            oo[s.slice(i+j*m,i+j*m+m)]++;            
        }
        // check 
        if(isSame(oo,mp))ans.push(i);
        for(let l=i+m;l+len<=n;l+=m) {
            oo[s.slice(l-m,l)]--;
            let ss = s.slice(l+(num-1)*m,l+num*m);
            if(!oo[ss])oo[ss] = 0;
            oo[ss]++;
            if(isSame(oo,mp))ans.push(l);
        }
    }
    return ans;
};  