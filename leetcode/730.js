/**
 * @param {string} s
 * @return {number}
 */
 var countPalindromicSubsequences = function(s) {
    /*
        n <= 1000;
        注意s 只包含 a b c d
        
        如果可以相同的话
        f[i][j] 考虑前i个字符 然后以字母j为结尾的回文子序列
        --》 f[i+1][s[j]] = 2*f[i][s[j]] + 1
        时间复杂度 O(n)


        但是我们这里要考虑不同

        令f[k][i][j] 统计所有[i,j] 之内以k为结尾的回文子序列个数
        
        a 1 
        aa 2
        aaa 3
    */
    const mod = 1e9 + 7;
    let n = s.length;
    const f = [];
    for(let i=0;i<4;i++)f[i] = [];
    for(let i=0;i<4;i++)
        for(let j=0;j<n;j++)f[i][j] = [];

    for(let k=0;k<4;k++)
        for(let i=0;i<n;i++) {
            let c = String.fromCharCode(97+k);
            if(s[i]===c)f[k][i][i] = 1;
            else f[k][i][i] = 0;
        }

    for(let len=2;len<=n;len++) 
        for(let l=0;l+len-1<n;l++) {
            let r = l + len - 1;
            for(let k=0;k<4;k++) {
                let c = String.fromCharCode(97+k);
                if(s[l]===c && s[r]===c) {
                    if(len===2) {
                        f[k][l][r] = 2;
                        continue;
                    }
                    f[k][l][r] = (2+f[0][l+1][r-1]+f[1][l+1][r-1]+f[2][l+1][r-1]+f[3][l+1][r-1])%mod;
                } else if (s[l]===c) {
                    f[k][l][r] = f[k][l][r-1];
                } else if(s[r]===c) {
                    f[k][l][r] = f[k][l+1][r];
                } else {
                    if(len===2) { 
                        f[k][l][r] = 0; 
                        continue; 
                    }
                    f[k][l][r] = f[k][l+1][r-1];
                }
            }
         }
    return (f[0][0][n-1] + f[1][0][n-1] + f[2][0][n-1] + f[3][0][n-1])%mod;
};