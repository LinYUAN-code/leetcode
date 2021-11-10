/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    // s -- > [1,300]
    // word.length --> [1,1000]
    // f[i] 为 1-i 能不能拆分
    // f[n] 为ans
    // 时间复杂度 nm
    let f = [];
    f[0] = true;
    for(let i=1;i<=s.length;i++) {
        f[i] = false;
        for(let j=0;j<wordDict.length;j++) {
            if(wordDict[j].length > i) {
                continue
            }
            if (wordDict[j] === s.slice(i-wordDict[j].length,i-wordDict[j].length+wordDict[j].length))
                f[i] |= f[i-wordDict[j].length]
        }
    }
    return f[s.length];
};