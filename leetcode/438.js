/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    // O(26n) 扫描?
    p = Array.from(p).sort().join("");
    let ans = [];
    let mp = [];
    for(let i=0;i<26;i++)mp[i] = 0;
    let tp = [];
    for(let i=0;i<26;i++)tp[i] = 0;
    for(let i=0;i<p.length;i++){
        tp[p.charCodeAt(i).toString(10)-97]++;
    }
    const check = function() {
        for(let i=0;i<26;i++) {
            if(mp[i]>tp[i])return 2;
        }
        for(let i=0;i<26;i++) {
            if(mp[i]<tp[i])return 1;
        }
        return 0;
    }
    let pre = 0;
    mp[s.charCodeAt(pre).toString(10)-97]++;
    if(check()===0)ans.push(pre);
    let m = {};
    for(let i=1;i<s.length;i++) {
        if(!m[i]) {
            mp[s.charCodeAt(i).toString(10)-97]++;
            m[i] = true;
        }
        let opt = check();
        if(opt===0) {
            ans.push(pre);
            continue;
        }
        if(opt===2) {
            mp[s.charCodeAt(pre).toString(10)-97]--;
            pre++;
            i--;
            continue;
        }
    }
    return ans;
};