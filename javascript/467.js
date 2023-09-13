/**
 * @param {string} p
 * @return {number}
 */
 var findSubstringInWraproundString = function(p) {
    // z后面可以跟a 其他的只能递增
    // 动态规划 
    // f[i] 表示以字母为结尾的合法子串 -.- 而且不能有重复
    // 那么我们统计以每个字母的可行最长序列
    let s = {};
    let n = p.length;
    let f  = [];
    let alph = "abcdefghijklmnopqrstuvwxyz".split("");
    alph.forEach(v=>{
        s[v] = 0;
    })
    const toI = (s) => {
        return s.charCodeAt(0);
    }
    f[0] = 1;
    s[p[0]] = 1;
    for(let i=1;i<n;i++) {
        f[i] = 0;
        if(p[i]==='a' && p[i-1]==='z') {
            f[i] = f[i-1] + 1;
        }
        if(toI(p[i])-1 === toI(p[i-1])) {
            f[i] = f[i-1] + 1;
        }
        f[i] = Math.max(f[i],1);
        s[p[i]] = Math.max(s[p[i]],f[i]);
    }
    let ans = 0;
    alph.forEach(v=>{
        ans += s[v];
    })
    return ans;
};