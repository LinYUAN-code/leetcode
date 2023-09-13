/*
 * @lc app=leetcode.cn id=664 lang=cpp
 *
 * [664] 奇怪的打印机
 */
#include <lin.h>
// @lc code=start
class Solution {
public:
    int strangePrinter(string s) {
        int n = s.size();
        for(int len=1;len<=n;len++)
        {
            for(int l=0;l+len-1<n;l++){
                int r = l+len-1;
                f[l][r] = 0x3f3f3f3f;
                if(len==1)
                    f[l][r] = 1;
                else if(s[l]==s[r])
                    f[l][r] = f[l][r-1];
                else 
                    for(int k=l;k<r;k++){
                        f[l][r] = min(f[l][k]+f[k+1][r],f[l][r]);
                    }
            }
        }
        return f[0][n-1];
    }
    int f[105][105];
    // 区间dp
};
// @lc code=end

