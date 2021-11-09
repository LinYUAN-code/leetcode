/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
    // 也就只能动态规划了
    // f[i][j] --> 表示为 0-i 和 0-j 匹配最少需要多少操作数。
    // 其实我们不需要考虑删除操作--因为删除一个字符等于给对面添加一个字符
    // 而且修改一个字符对两边的影响等价--》所以我们统一修改word1中的字符
    // 这样我们就将操作简化成了三个 
    //  f[i-1][j-1];
    // 1.修改word1  ---> f[i-1][j-1]+1
    // 2.插入word1  ---> f[i][j-1]+1
    // 3.插入word2  ---> f[i-1][j]+1
    let f = [];
    const min = function(a,b) {
        if(a<b)return a;
        return b;
    }
    // 特殊情况判断
    if(!word1.length)return word2.length;
    if(!word2.length)return word1.length;
    // 初始化
    for(let i=0;i<=word1.length;i++)f[i] = [];
    let inf = 0x3f3f3f3f;
    for(let i=0;i<=word1.length;i++)
        for(let j=0;j<=word2.length;j++)
            f[i][j] = inf;
    f[0][0] = 0;
    for(let i=1;i<=word2.length;i++)
        f[0][i] = i;
    for(let i=1;i<=word1.length;i++)
        f[i][0] = i;
    // 状态准一
    for(let i=1;i<=word1.length;i++)
        for(let j=1;j<=word2.length;j++) {
            if(word1[i-1]===word2[j-1])f[i][j] = f[i-1][j-1];
            f[i][j] = min(f[i][j],f[i-1][j-1]+1);
            f[i][j] = min(f[i][j],f[i-1][j]+1);
            f[i][j] = min(f[i][j],f[i][j-1]+1);
        }
    return f[word1.length][word2.length]
};