/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
    // 1---1000
    // 很经典的题目---统计回文子串的个数---但是我忘了怎么写----想想
    // 暴力做法: n^3 强行验证 n^2 个字符串是不是回文的
    // 想想哪里可以优化:我们验证过程中有很多重复操作 比如   axxxxxa 验证 xxxxx 和 axxxxxa 中有重叠部分
    // f[i][j] 为 [i,j] 是不是回文子串
    // 区间dp
    // 我好像呆了--->求数量其实就是求出所有最长的回文子串--可以使用中心扩展以及马拉车算法都比我这个好....无语
    let f = [];
    for(let i=0;i<=s.length;i++) {
        f[i] = [];
    }
    for(let i=0;i<s.length;i++)
        f[i+1][i] = f[i][i] = true;

    for(let len=2;len<=s.length;len++) 
        for(let l=0;l+len-1<s.length;l++) {
            let r = l + len - 1;
            if(s[l]===s[r]) {
                f[l][r] = f[l+1][r-1];
            }
        }

    let ans = 0;
    for(let i=0;i<s.length;i++)
        for(let j=i;j<s.length;j++)
            if(f[i][j])
                ans++;
    return ans;
};